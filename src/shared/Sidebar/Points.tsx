import React, { FC } from 'react'
import { Point } from './Point'
// import { Category } from './Category'
// import { SubPoint } from './SubPoint'
import s from './Sidebar.module.scss'

//Сыылки на странице внутри меню
export const Points: FC = React.memo(() => (
   <ul className={s.points}>
      <Point ico="home" label="Главная" to="/" />
        {/* Основные качества - end 
      <Category ico="pin" label="Начать игру">
         <SubPoint label="Регистрация" to="/registration" />
         <SubPoint label="Скачать клиент" to="/download-r2" />
         <SubPoint label="Личный кабинет" to="/organization-documents" />
         <SubPoint label="Правила проекта" to="/project-rules" />
         <SubPoint label="Вопросы и ответы" to="/frequently-asked-questions" />
      </Category> */}

        {/* 
      <Category ico="messages-alt" label="Игровой мир">
        <SubPoint label="Игровые механики" to="/game-mechanics-r2" />
         <SubPoint label="Описание сервера" to="/server-description" />
         <SubPoint label="Новости и обновления" to="/medspecialties" />
         <SubPoint label="Подарки и бонусы" to="/request" />
         <SubPoint label="Календарь событий" to="/calendar-events" />
         <SubPoint label="Время проведения осады" to="/medrequirement" />
         <SubPoint label="Эпические квесты" to="/epic-quests" />
         <SubPoint label="Время респавна боссов" to="/medrequirement" />
         <SubPoint label="Рейтинг игроков" to="/top" />
      </Category> */}

       {/* 
      <Category ico="notice-alt" label="База знаний R2">
         <SubPoint label="Игровые предметы" to="/grounds-transfer" />
         <SubPoint label="Особые NPC" to="/student-life" />
         <SubPoint label="Квесты" to="/student-life" />
         <SubPoint label="Спецификация классов" to="/student-life" />
         <SubPoint label="Система перевоплощений" to="/student-life" />
         <SubPoint label="Питомцы" to="/student-life" />
         <SubPoint label="Руны" to="/student-life" />
         <SubPoint label="Особые предметы" to="/student-life" />
         <SubPoint label="Территории и земли" to="/accreditation" />
      </Category> */}
      <Point ico="pen-to-square-solid" label="Портфолио" to="/portfolio" />
      <Point ico="settings" label="Услуги" to="/services" />
      <Point ico="chart" label="Стоимость оказания услуг" to="/pricing" />
      <Point ico="search" label="Каталог продуктов 1С" to="/catalog-1c" />
      <Point ico="messages" label="Контакты" to="/contacts" />
   </ul>
))
