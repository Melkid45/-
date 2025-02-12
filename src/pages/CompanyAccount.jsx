import React from "react";
import MenuCompany from "../components/MenuCompany";
import Tabs from "../components/Tabs";
import RegistCompany from "../components/RegistCompany";
import GirlsAnket from "../components/GirlsAnket";
import PriceCard from "../components/PriceCard";
import BlackList from "../components/BlackList";
import Faq from "../components/Faq";

export default function CompanyAccount() {
  const AddSalon = () => {
    document.querySelector('.account__body-block-profile').classList.add('none')
    document.querySelector('.form__company').classList.remove('none')
    
  }

  const AddGirl = () => {
    document.querySelector('.account__body-block-profile').classList.remove('none')
    document.querySelector('.account__body-block-main').classList.add('none')
    document.querySelector('.account__body-first').classList.add('none')
  }


  const OpenMenu = () => {
    document.querySelector('.account__body-block-navigation').classList.add('active')
  }

  
    

  return (
    <>
    <Tabs/>
    <section className="account">
      <div className="container">
        <div className="account__body">
          <span className="account__body-first">
            (Имя) Вы успешно авторизовались на сайте.
            <button onClick={OpenMenu} className="mob">
              Открыть Меню
            </button>
          </span>
          <div className="account__body-block">
            <div className="account__body-block-main">
              <div className="account__body-block-main-section">
                <h1>Приветствуем вас! </h1>
                <p>
                  Уважаемый рекламодатель, размещение анкет и прочей рекламы на
                  сайте только платное! С информацие по стоимости вы можете
                  ознакомить на странице <a href="">СТОИМОСТЬ ПЛАТНЫХ УСЛУГ.</a>
                </p>
              </div>
              <div className="account__body-block-main-section">
                <h2>Правила размещения анкет:</h2>
                <ul>
                  <li>
                  На сайте разрешено размещать анкеты типа, парней, фирмы досуга и массажных салонов. Анкеты с 
   рекламой кукол, игрушек, контрацептивов, сдача квартир и т.п. будут навсегда заблокированны;

                  </li>
                  <li>
                  Для рекламы с поиском сотрудниц и т.п. есть специальный раздел “Баннеры”; 
                  </li>
                  <li>
                  Раздел “Объявления” содержит текстовые объявления обновляющиеся раз в час;
                  </li>
                  <li>
                  Одному рекламодателю запрещено регистрировать более одного аккаунта. При обнаружении нескольких 
   аккаунтов, принадлежащих одному лицу - все аккаунты будут заблокированны!  
                  </li>
                  <li>
                  Запрещено размещение анкет лиц младше 18 лет;
                  </li>
                  <li>
                  Запрещено размещать информацию или данные, которые являются незаконными, вредоносными, чужими,
   нарушают чьи либо авторские права, содержат оскорбления в адрес третьих лиц;
                  </li>
                  <li>
                  Размещенная вами информация в анкете может быть проверена в любое время и в случае несоответствия 
   действительности, может быть изменена администрацией сайта по своему усмотрению;
                  </li>
                  <li>
                  Запрещено размещать информацию от третьих лиц без из согласия;
                  </li>
                  <li>
                  Категорически запрещено использовать порно фотографии! Фото должны быть хорошего качества, и не 
   должны содержать посторонних значков, текста, номера телефона или адресов сайтов;
                  </li>
                  <li>
                  Первая бокировка анкеты будет предупреждением. При повторной блокировке анкеты, весь аккаунт будет 
 заблокирован!
                  </li>
                  <li>
                  ПОЛЬЗОВАТЕЛИ НАРУШЕВШИЕ ДАННОЕ СОГЛАШЕНИЕ БУДУТ НАВСЕГДА ЗАБЛОКИРОВАНЫ!
                  </li>
                  <li>
                  Обязательно ознакомьтесь с самыми <a href="">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ.</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="account__body-block-profile none">
                <div className="account__body-block-profile-buttons">
                    <button onClick={AddSalon}>
                        +Анкета салона
                    </button>
                    <a href="">
                        +Анкета девушки
                    </a>
                </div>
                <span>Внимание!</span>
                <p>Рекламодатель должен добавить хотя бы одну анкету салона.</p>
            </div>
            <PriceCard/>
            <BlackList/>
            <Faq/>
            <RegistCompany/>
            <MenuCompany />
          </div>
        </div>
      </div>
    </section>
    <section className="sale">
        <div className="container">
            <div className="sale__body">
                <span>Акции!</span>
                <p>Здесь находятся данные об акциях которые проводит администрация сайта. </p>
                <ul className="sale__body-block">
                    <li className="sale__body-block-item">
                        1. Скидка на подписку PRO 50% <a href="/my-profiles">(Перейти на страницу)</a>
                    </li>
                    <li className="sale__body-block-item">
                        2. Скидка на подписку VIP 25% <a href="/my-profiles">(Перейти на страницу)</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  );
}
