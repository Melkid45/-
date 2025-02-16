import React from "react";
import MenuUser from "../components/MenuUser";

export default function UserAccount() {

  const OpenMenu = () => {
    document.querySelector('.account__body-block-navigation').classList.add('active')
  }

  return (
    <section className="account">
      <div className="container">
        <div className="account__body">
          <span className="account__body-first">
            (Имя) Вы успешно авторизовались ан сайте.
            <button onClick={OpenMenu} className="mob">
              Открыть Меню
            </button>
          </span>
          <div className="account__body-block">
            <div className="account__body-block-main">
              <div className="account__body-block-main-section">
                <h1>Приветствуем вас! </h1>
                <p>
                  Уваемый гость, вы попали в личный кабинет пользователя где в
                  боковом меню вы можете редактировать профиль просматривать
                  отложенные анкеты и комментарии к ним. А так же связаться в
                  администратором сайта, по тем или иным вопросам ответы на
                  которые будут в сообщениях.
                  <br />
                  <br />
                  Напоминает, что откладывать анкеты в избранное, а так же
                  комментировать их могут только зарегистрированные
                  пользователи. РЕГИСТРАЦИЯ ДЛЯ ГОСТЕЙ АБСОЛЮТНО БЕСПЛАТНАЯ.
                </p>
              </div>
              <div className="account__body-block-main-section">
                <h2>Парвила регистрации гостей.</h2>
                <ul>
                  <li>
                    Запрещена регистрация на сайте пользователей не достигших 18
                    лет!
                  </li>
                  <li>
                    Убедительная просьба, оставлять комментарии только в том
                    случае если вы действительно воспользовались услугами
                    данного рекламодателя.
                  </li>
                  <li>
                    Запрещено на сайте оставлять какую либо конкретную
                    информацию о рекламодателе, ту которая не указана в анкете.
                    Комментарии с какой-либо рекламой, по типу кукол, игрушек,
                    контрацептивов, сдача квартир и т.п. будут удалены с сайта.
                  </li>
                  <li>
                    За первое нарушение данных условий будет предупреждением.
                    При повторном нарушении весь аккаунт будет заблокирован!
                  </li>
                  <li>
                    Запрещено в комментариях использовать оскорбления, угрозы в
                    адрес рекламодателей.
                  </li>
                  <li>
                    Запрещено размещать в комментариях информацию или данные,
                    которые являются незаконными, вредоносными, чужими, нарушают
                    чьи либо авторские права, содержат оскорбления в адрес
                    третьих лиц;
                  </li>
                  <li>
                    ПОЛЬЗОВАТЕЛИ НАРУШЕВШИЕ ДАННОЕ СОГЛАШЕНИЕ БУДУТ НАВСЕГДА
                    ЗАБЛОКИРОВАНЫ!
                  </li>
                </ul>
              </div>
            </div>
            <MenuUser/>
          </div>
        </div>
      </div>
    </section>
  );
}
