import React from "react";
import { Link } from "react-router-dom";
export default function MenuUser() {
  return (
    <div className="account__body-block-navigation">
      <span className="account__body-block-navigation-title">
        Меню пользователя:
      </span>
      <ul>
        <li>
          <Link to={'favorite'}>Отложенные анкеты</Link>
        </li>
        <li>
          <a href="">Комментарии</a>
        </li>
        <li>
          <a href="">Написать администратору</a>
        </li>
        <li>
          <a href="">Сообщения</a>
        </li>
        <li>
          <a href="">Редактировать профиль</a>
        </li>
      </ul>
    </div>
  );
}
