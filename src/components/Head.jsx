import Logo from "../assets/images/logo__header.svg";
import AuthImg from "../assets/icons/auth.svg";
import HomeImg from "../assets/icons/home.svg";
import CartImg from "../assets/icons/card.svg";
import RegImg from "../assets/icons/reg.svg";
import RegisterSection from "./RegisterSection";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import AuthSection from "./AuthSection";

export default function Head() {
  const OpenHandler = () => {
    document.querySelector(".register__block").classList.remove("sc-0");
  };
  const OpenAuth = () => {
    document.querySelector(".user__auth").classList.remove("sc-0");
  };
  const OpenHeader = () => {
    document.querySelector(".burger").classList.toggle("active");
    document.querySelector(".header").classList.toggle("active");
  };
  const OpenList = () => {
    document.querySelector(".header__body-mob-dop").classList.toggle("active");
    document
      .querySelector(".header__body-mob-dop-list")
      .classList.toggle("active");
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__body">
            <div className="header__body-top">
              <a href="/">
                <img src={Logo} alt="" />
              </a>
              <div className="header__body-top-btns desk">
                <button onClick={OpenHandler}>
                  <img src={RegImg} alt="" />
                  <span>Регистрация</span>
                </button>
                <button onClick={OpenAuth}>
                  <img src={AuthImg} alt="" />
                  <span>Войти</span>
                </button>
              </div>
              <div onClick={OpenHeader} className="burger mob">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="header__body-bot desk">
              <a className="header__body-bot-icons" href="/">
                <img src={HomeImg} alt="" />
              </a>
              <nav>
                <ul>
                  <li>
                    <Link to={'girls'}>Девушки</Link>
                  </li>
                  <li>
                    <Link to={'guys'}>Парни</Link>
                  </li>
                  <li>
                    <Link to={'firma'}>Фирмы,салоны</Link>
                  </li>
                  <li className="vip">
                    <a href="">Vip</a>
                  </li>
                  <li className="top">
                    <a href="">Top</a>
                  </li>

                  <li>
                    <Link to={'user-account'}>Баннеры</Link>
                  </li>

                  <li>
                    <Link to={'company-account'}>Объявления</Link>
                  </li>
                </ul>
              </nav>
              <a className="header__body-bot-icons" href="/">
                <img src={CartImg} alt="" />
              </a>
            </div>
            <div className="header__body-mob mob">
              <nav>
                <ul>
                  <li>
                    <Link to={'girls'}>Девушки</Link>
                  </li>
                  <li>
                    <Link to={'guys'}>Парни</Link>
                  </li>
                  <li>
                    <Link to={'firma'}>Фирмы,салоны</Link>
                  </li>
                  <li className="vip">
                    <a href="">Vip</a>
                  </li>
                  <li className="top">
                    <a href="">Top</a>
                  </li>
                  <li>
                    <Link to={'user-account'}>Баннеры</Link>
                  </li>
                  <li>
                    <Link to={'company-account'}>Объявления</Link>
                  </li>
                  <li onClick={OpenList} className="header__body-mob-dop">
                    <span>
                      Дополнительно
                      <svg viewBox="0 0 5 9">
                        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" fill="#fff"/>
                      </svg>
                    </span>
                    <div className="header__body-mob-dop-list">
                      <a href="">Индивидуалки</a>
                      <a href="">Массажистки</a>
                      <a href="">Апартаменты</a>
                      <a href="">Выезд</a>
                      <a href="">С видео</a>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="header__body-top-btns">
                <button onClick={OpenHandler}>
                  <img src={RegImg} alt="" />
                  <span>Регистрация</span>
                </button>
                <button onClick={OpenAuth}>
                  <img src={AuthImg} alt="" />
                  <span>Войти</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <RegisterSection className="" />
      <AuthSection />
    </>
  );
}
