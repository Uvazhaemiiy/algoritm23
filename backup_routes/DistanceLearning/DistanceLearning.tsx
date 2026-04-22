import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'

const DistanceLearning: FC = () => (
   <SidebarLayout>
       <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="font-semibold leading-6 text-sky-600">Подробная информация по дистанционному обучению</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-2xl">Переход на дистанционное обучение.</h3>
            <p className="mt-8 text-sx text-gray-500">
            В связи с распространением Covid-19 в Российской Федерации, Медицинский колледж РУТ (МИИТ) переходит на дистанционное обучение, так как студенты должны оставаться в безопасности и продолжать учиться. В ускоренном режиме мы разработали дистанционный стандарт обучения с помощью средств технической и программной коммуникации. 
            </p> 
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-2xl">Как происходит обучение в МК РУТ (МИИТ)?</h3>
            <div className="prose prose-indigo mt-5 text-gray-500">
              <ul role="list">
                <li>1. Проведение уроков в программе - <a href="https://discord.com/" className="font-medium text-sky-600 hover:text-sky-900">Discord</a></li>
                <li>2. Контроль и выдача доступов в канале - "авторизация"</li>
                <li>3. Отправка работ преподавателям через ботов - vk, telegram, discord, site</li>
                <li>4. Хранилище файлов - Google Disk</li>
              </ul>
              <h3 className="mt-6 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-2xl">Я - студент как мне начать обучение????</h3>
              <ul role="list">
                <li className='mt-4'>1. Необходимо скачать программу <a href="https://discord.com/" className="font-medium text-sky-600 hover:text-sky-900">Discord</a> и присоединиться к нашему колледжу по <a href="https://discord.com/invite/5sjfWB2" className="font-medium text-sky-600 hover:text-sky-900">ссылке</a></li>
                <li>2. Запросить доступ в канале  <a href="https://discord.com/invite/5sjfWB2" className="font-medium text-sky-600 hover:text-sky-900">"авторизация"</a> </li>
                <li>- Пример: Иван Медиков / мсд-213 / дайте доступ</li>
                <li>3. После того как модераторы проверят вашу заявку, вам будут доступны все комнаты для обучения.</li>
                <li>4. Для выгрузки ДЗ преподавателям, необходимо изучить статьи по выгрузке работ через наших ботов - vk, telegram, discord</li>
                <li className='mt-2'> <a href="https://medrut-miit.college/blogs/news/discord-upload" className="font-medium text-sky-600 hover:text-sky-900">Как выгрузить работы через Discord </a></li>
                <li> <a href="https://medrut-miit.college/blogs/news/telegram-upload-rut-miit" className="mt-1 font-medium text-sky-600 hover:text-sky-900">Как выгрузить работы через Telegram</a></li>
                <li> <a href="https://medrut-miit.college/blogs/news/vk-upload-rut-miit" className="mt-1 font-medium text-sky-600 hover:text-sky-900">Как выгрузить работы через VK </a></li>
                <li className='mt-2'>5. Изучить таблицу доступов и примеров выгрузки файлов, таблица и ключ доступа будет доступен после авторизации в Discord в "Закреплённых сообщениях".</li>
              <h3 className="mt-6 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-2xl">Запреты дистанционного обучения.</h3>
                <li className='mt-4'>1. Запрещается использовать ненормативную лексику. (3 предупреждения и доступ будет отобран, для продолжения обучения обратитесь к руководству Медицинского Колледжа РУТ (МИИТ)).</li>
                <li>2. Прогуливать пары без уважительной причины</li>
                <li>3. Отключать звук во время занятий, микрофон можно отключать.</li>
                <li>4. Пропагандировать другие средства коммуникации во время учебы.</li>
                <li>5. Игнорировать преподавателя во время проведения занятий. (Руководство колледжа будет подключено к решению проблем)</li>
                <li>6. Играть в видеоигры и транслировать их на учебном сервере запрещено</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
   </SidebarLayout>
)

export default DistanceLearning
