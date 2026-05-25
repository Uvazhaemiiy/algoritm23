<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$configFile = __DIR__ . '/config.php';
if (!file_exists($configFile)) {
  http_response_code(503);
  echo json_encode(['error' => 'Сервер почты не настроен']);
  exit;
}

$config = require $configFile;
$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
  $input = [];
}

$fullName = trim($input['fullName'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$message = trim($input['message'] ?? '');
$subject = trim($input['subject'] ?? '') ?: 'Новая заявка с сайта algoritm23.net';
$honeypot = trim($input['honeypot'] ?? '');

if ($honeypot !== '') {
  http_response_code(400);
  echo json_encode(['error' => 'Spam detected']);
  exit;
}

if ($fullName === '' || $email === '' || $phone === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Заполните все поля формы']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Укажите корректный email']);
  exit;
}

function smtp_read($socket)
{
  $response = '';
  while ($line = fgets($socket, 515)) {
    $response .= $line;
    if (isset($line[3]) && $line[3] === ' ') {
      break;
    }
  }
  return $response;
}

function smtp_expect($socket, $codes)
{
  $response = smtp_read($socket);
  $code = (int) substr($response, 0, 3);
  return in_array($code, $codes, true);
}

function smtp_cmd($socket, $command, $expectedCodes)
{
  fwrite($socket, $command . "\r\n");
  return smtp_expect($socket, $expectedCodes);
}

function smtp_send_mail($config, $to, $from, $replyTo, $subject, $bodyText)
{
  $host = $config['smtp_host'] ?? 'smtp.mail.ru';
  $port = (int) ($config['smtp_port'] ?? 465);
  $user = $config['smtp_user'] ?? '';
  $pass = $config['smtp_pass'] ?? '';

  $socket = @stream_socket_client(
    "ssl://{$host}:{$port}",
    $errno,
    $errstr,
    20,
    STREAM_CLIENT_CONNECT,
    stream_context_create([
      'ssl' => [
        'verify_peer' => true,
        'verify_peer_name' => true,
      ],
    ])
  );

  if (!$socket) {
    throw new RuntimeException("SMTP connect failed: {$errstr} ({$errno})");
  }

  stream_set_timeout($socket, 20);

  if (!smtp_expect($socket, [220])) {
    throw new RuntimeException('SMTP greeting failed');
  }

  if (!smtp_cmd($socket, 'EHLO algoritm23.net', [250])) {
    throw new RuntimeException('SMTP EHLO failed');
  }

  if (!smtp_cmd($socket, 'AUTH LOGIN', [334])) {
    throw new RuntimeException('SMTP AUTH failed');
  }

  fwrite($socket, base64_encode($user) . "\r\n");
  if (!smtp_expect($socket, [334])) {
    throw new RuntimeException('SMTP user rejected');
  }

  fwrite($socket, base64_encode($pass) . "\r\n");
  if (!smtp_expect($socket, [235])) {
    throw new RuntimeException('SMTP password rejected');
  }

  if (!smtp_cmd($socket, "MAIL FROM:<{$from}>", [250])) {
    throw new RuntimeException('SMTP MAIL FROM failed');
  }

  if (!smtp_cmd($socket, "RCPT TO:<{$to}>", [250, 251])) {
    throw new RuntimeException('SMTP RCPT TO failed');
  }

  if (!smtp_cmd($socket, 'DATA', [354])) {
    throw new RuntimeException('SMTP DATA failed');
  }

  $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
  $headers = [
    "From: \"АЛГОРИТМ 23\" <{$from}>",
    "To: <{$to}>",
    "Reply-To: <{$replyTo}>",
    "Subject: {$encodedSubject}",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
  ];

  $payload = implode("\r\n", $headers) . "\r\n\r\n" . $bodyText . "\r\n.";
  fwrite($socket, $payload . "\r\n");

  if (!smtp_expect($socket, [250])) {
    throw new RuntimeException('SMTP message rejected');
  }

  smtp_cmd($socket, 'QUIT', [221]);
  fclose($socket);

  return true;
}

$mailTo = $config['mail_to'] ?? 'info@algoritm23.net';
$mailFrom = $config['mail_from'] ?? ($config['smtp_user'] ?? '');

$bodyText = implode("\n", [
  $subject,
  "Ф.И.О.: {$fullName}",
  "Email: {$email}",
  "Телефон: {$phone}",
  "Сообщение: {$message}",
]);

try {
  smtp_send_mail($config, $mailTo, $mailFrom, $email, $subject, $bodyText);
  echo json_encode(['ok' => true]);
} catch (Throwable $error) {
  error_log('[contact.php] ' . $error->getMessage());
  http_response_code(500);
  echo json_encode(['error' => 'Не удалось отправить заявку. Попробуйте позже или напишите на info@algoritm23.net']);
}
