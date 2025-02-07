import React from "react";

export default function MenuUser() {
  return (
    <div className="account__body-block-navigation">
      <span className="account__body-block-navigation-title">
        Меню пользователя:
      </span>
      <ul>
        <li>
          <a href="/favorite">Отложенные анкеты</a>
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
