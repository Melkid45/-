import React from "react";
import Girl from "../assets/images/anket__girls.avif";
import Triangle from '../assets/icons/triangle.svg' 
import Trash from '../assets/icons/trash__white.svg'
export default function GirlsAnket() {


    const OpenCLick = (e) => {
        e.target
          .closest("div")
          .querySelector(".filter__select-body-choose")
          .classList.toggle("active");
      };

  return (
    <div className="account__body-block-anket ">
      <h2 className="account__body-block-anket-title">Анкеты девушек: </h2>
      <div className="account__body-block-anket-block">
        <table className="account__body-block-anket-block-item">
          <tr className="account__body-block-anket-block-item-top">
            <th className="">№ и фото</th>
            <th className="">Состояние</th>
            <th className="">Оплата</th>
            <th className="">Действия</th>
          </tr>
          <tr >
            <td rowSpan={3}
              className="account__body-block-anket-block-item-girl">
              <p className="num">№ 237</p>
              <span className="type">VIP</span>
              <img src={Girl} alt="" />
              <div className="account__body-block-anket-block-item-girl-prov">
                <p>Фото</p>
                <span>100%</span>
                <p>проверено</p>
              </div>
            </td>
            <td className="account__body-block-anket-block-item-status">
              <div className="account__body-block-anket-block-item-status-name">
                <span className="type">Оплачена</span>
                <p>
                  до <span>11.01.20025 02:30</span>
                </p>
              </div>
              <p className="desc">( осталось 12 дней)</p>
            </td>
            <td className="account__body-block-anket-block-item-tarif w3">
              <span className="name">Простой тариф:</span>
              <div className="group">
                <div className="filter__select">
                  <div className="filter__select-body">
                    <span className="filter__select-body-main">30д. - 500руб.</span>
                    <div className="filter__select-body-choose">
                      <span>15д. - 250руб.</span>
                      <span>7д. - 150руб.</span>
                      <span>3д. - 100руб.</span>
                      <span>1д. - 50руб.</span>
                    </div>
                  </div>
                  <button
                    onClick={OpenCLick}
                    className="filter__select-button"
                  >
                    <img src={Triangle} alt="" />
                  </button>
                </div>
                <div className="group__btn">
                    Продлить
                </div>
              </div>
            </td>
            <td className="account__body-block-anket-block-item-info ">
                <span>Статистика анкеты:</span>
                <ul>
                    <li>Просмотров за сутки: <p>12</p></li>
                    <li>Просмотров всего: <p>540</p></li>
                    <li>Анкету рекомендуют: <p>7</p></li>
                </ul>
            </td>
          </tr>
          <tr>
            <td className="account__body-block-anket-block-item-comment ">
                <span>Комментарии: Включены</span>
                <button>Отключить</button>
                <button>Удалить</button>
            </td>
            <td className="account__body-block-anket-block-item-tarif ">
              <span className="name">VIP тариф:</span>
              <div className="group">
                <div className="filter__select">
                  <div className="filter__select-body">
                    <span className="filter__select-body-main">30д. - 500руб.</span>
                    <div className="filter__select-body-choose">
                      <span>15д. - 250руб.</span>
                      <span>7д. - 150руб.</span>
                      <span>3д. - 100руб.</span>
                      <span>1д. - 50руб.</span>
                    </div>
                  </div>
                  <button
                    onClick={OpenCLick}
                    className="filter__select-button"
                  >
                    <img src={Triangle} alt="" />
                  </button>
                </div>
                <div className="group__btn">
                    Продлить
                </div>
              </div>
            </td>
            <td rowSpan={2} className="account__body-block-anket-block-item-do">
                <a href="">Просмотреть анкету</a>
                <a href="">Редактировать анкету</a>
                <button>
                Заморозить анкету
                </button>
                <button className="delete">
                Удалить анкету
                <img src={Trash} alt="" />
                </button>
            </td>
          </tr>
          <tr >
            <td className="account__body-block-anket-block-item-job ">
            <span>Статус работы:</span>
            <div className="buttons">
                <button>Работает</button>
                <button>Отдыхает</button>
            </div>
            </td>
            <td className="account__body-block-anket-block-item-tarif ">
              <span className="name">TOP тариф:</span>
              <div className="group">
                <div className="filter__select">
                  <div className="filter__select-body">
                    <span className="filter__select-body-main">30д. - 500руб.</span>
                    <div className="filter__select-body-choose">
                      <span>15д. - 250руб.</span>
                      <span>7д. - 150руб.</span>
                      <span>3д. - 100руб.</span>
                      <span>1д. - 50руб.</span>
                    </div>
                  </div>
                  <button
                    onClick={OpenCLick}
                    className="filter__select-button"
                  >
                    <img src={Triangle} alt="" />
                  </button>
                </div>
                <div className="group__btn">
                    Продлить
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
