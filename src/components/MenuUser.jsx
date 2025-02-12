import React from "react";
import { Link, replace } from "react-router-dom";
export default function MenuUser() {

  const CloseMenu = () => {
    document.querySelector('.account__body-block-navigation').classList.remove('active')
  }

  return (
    <div className="account__body-block-navigation">
      <button onClick={CloseMenu} className="account__body-block-navigation-back mob">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63.55 63.551"  xml:space="preserve"><g><g><path fill="#E40AA0" d="M61.422,60.795l-1.12-3.859C56.407,43.55,40.181,33.099,20.599,31.241v12.715L0,23.355L20.599,2.756v12.771 c24.563,2.229,42.951,16.887,42.951,34.4c0,2.353-0.337,4.711-1.008,7.008L61.422,60.795z M18.264,28.713l1.257,0.096 c19.504,1.47,35.582,10.754,41.557,23.588c0.092-0.821,0.14-1.645,0.14-2.469c0-16.535-18-30.361-41.869-32.16l-1.08-0.081V8.395 l-14.96,14.96l14.96,14.962v-9.604H18.264z"/></g></g></svg>
        Вернуться назад
      </button>
      <span className="account__body-block-navigation-title">
        Меню пользователя:
      </span>
      <ul>
        <li>
          <Link to='/favorite' replace>Отложенные анкеты</Link>
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
