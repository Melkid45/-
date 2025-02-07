import React from "react";

export default function MenuCompany() {

  const AddProfile = () => {
      document.querySelector('.account__body-block-profile').classList.remove('none')
      document.querySelector('.account__body-block-main').classList.add('none')
      document.querySelector('.account__body-first').classList.add('none')
    }

  return (
    <div className="account__body-block-navigation">
      <span className="account__body-block-navigation-title">
        Баланс: (0)
      </span>
      <div className="account__body-block-navigation-do">
        <a href="">
        Пополнить баланс
        </a>
        <button onClick={AddProfile} href="">
        + Добавить анкету
        </button>
      </div>
      <span className="account__body-block-navigation-title">
        Мои анкеты:
      </span>
      <ul>
        <li>
            <a href="/my-profile">Анкеты салона (0)</a>
        </li>
        <li>
            <a href="/profile">Анкеты девушек (0)</a>
        </li>
      </ul>
      <span className="account__body-block-navigation-title">
      Меню пользователя:
      </span>
      <ul>
        <li>
            <a href="">Стоимость платных услуг</a>
        </li>
        <li>
            <a href="">Вопросы и ответы</a>
        </li>
        <li>
            <a href="">Черный список клиентов</a>
        </li>
      </ul>
      <span className="account__body-block-navigation-title">
      Мой профиль:
      </span>
      <ul>
        <li>
            <a href="">Проверочные фото</a>
        </li>
        <li>
            <a href="">Редактировать профиль</a>
        </li>
        <li>
            <a href="">История операций</a>
        </li>
      </ul>
      <span className="account__body-block-navigation-title">
      Тех. поддержка:
      </span>
      <ul>
        <li>
            <a href="">Написать в тех. поддержку</a>
        </li>
        <li>
            <a href="">Сообщения</a>
        </li>
      </ul>
    </div>
  );
}
