import React from "react";

export default function MenuCompany() {

  const AddProfile = () => {
      document.querySelector('.account__body-block-profile').classList.remove('none')
      document.querySelector('.account__body-block-main').classList.add('none')
      document.querySelector('.form__company').classList.add('none')
      document.querySelector('.account__body-block-navigation').classList.remove('active')
      document.querySelector('.account__body-block-price').classList.add('none')
      document.querySelector('.account__body-block-black').classList.add('none')
      document.querySelector('.account__body-block-black-client').classList.add('none')
      document.querySelector('.account__body-block-faq').classList.add('none')
    }

    const CloseMenu = () => {
      document.querySelector('.account__body-block-navigation').classList.remove('active')
    }

    const OpenPrice = () => {
      document.querySelector('.account__body-block-main').classList.add('none')
      document.querySelector('.account__body-block-price').classList.remove('none')
      document.querySelector('.account__body-block-profile').classList.add('none')
      document.querySelector('.form__company').classList.add('none')
      document.querySelector('.account__body-block-black').classList.add('none')
      document.querySelector('.account__body-block-black-client').classList.add('none')
      document.querySelector('.account__body-block-navigation').classList.remove('active')
      document.querySelector('.account__body-block-faq').classList.add('none')
    }

    const OpenBlack = () => {
      document.querySelector('.account__body-block-black').classList.remove('none')
      document.querySelector('.account__body-block-main').classList.add('none')
      document.querySelector('.account__body-block-price').classList.add('none')
      document.querySelector('.account__body-block-profile').classList.add('none')
      document.querySelector('.form__company').classList.add('none')
      document.querySelector('.account__body-block-black-client').classList.add('none')
      document.querySelector('.account__body-block-navigation').classList.remove('active')
      document.querySelector('.account__body-block-faq').classList.add('none')
    }
    const OpenFaq = () => {
      document.querySelector('.account__body-block-black').classList.add('none')
      document.querySelector('.account__body-block-main').classList.add('none')
      document.querySelector('.account__body-block-price').classList.add('none')
      document.querySelector('.account__body-block-profile').classList.add('none')
      document.querySelector('.form__company').classList.add('none')
      document.querySelector('.account__body-block-black-client').classList.add('none')
      document.querySelector('.account__body-block-navigation').classList.remove('active')
      document.querySelector('.account__body-block-faq').classList.remove('none')
    }
  return (
    <div className="account__body-block-navigation">
      <button onClick={CloseMenu} className="account__body-block-navigation-back mob">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63.55 63.551"  xml:space="preserve"><g><g><path fill="#E40AA0" d="M61.422,60.795l-1.12-3.859C56.407,43.55,40.181,33.099,20.599,31.241v12.715L0,23.355L20.599,2.756v12.771 c24.563,2.229,42.951,16.887,42.951,34.4c0,2.353-0.337,4.711-1.008,7.008L61.422,60.795z M18.264,28.713l1.257,0.096 c19.504,1.47,35.582,10.754,41.557,23.588c0.092-0.821,0.14-1.645,0.14-2.469c0-16.535-18-30.361-41.869-32.16l-1.08-0.081V8.395 l-14.96,14.96l14.96,14.962v-9.604H18.264z"/></g></g></svg>
      Вернуться назад
      </button>
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
          <button onClick={OpenPrice}>
          Стоимость платных услуг
          </button>
        </li>
        <li>
            <button onClick={OpenFaq}>
              Вопросы и ответы
            </button>
        </li>
        <li>
            <button onClick={OpenBlack}>Черный список клиентов</button>
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
