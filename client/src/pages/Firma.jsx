import React from 'react'
import Tabs from '../components/Tabs'
import Star from '../assets/icons/star.svg'
import Chat from '../assets/icons/chat.svg'
import Tel from '../assets/icons/tel.png'
import Tg from '../assets/icons/tg.svg'
import Wt from '../assets/icons/wt.svg'
import like from '../assets/icons/like.svg'
import Favor from '../assets/icons/favor.png'
import Link from '../assets/icons/link.svg'

import FirmaOne from '../assets/images/firma/1.png'
import FirmaTwo from '../assets/images/firma/2.png'
import FirmaThree from '../assets/images/firma/3.png'
import FirmaFour from '../assets/images/firma/4.png'
import FirmaFive from '../assets/images/firma/5.png'
import Tag from '../assets/icons/tag.svg'
import Check from '../assets/icons/check.svg'
import Girl from '../assets/images/firma__girl.png'

import Icons1 from '../assets/icons/adv/1.svg'
import Icons2 from '../assets/icons/adv/2.svg'
import Icons3 from '../assets/icons/adv/3.svg'
import Icons4 from '../assets/icons/adv/4.svg'
import Icons5 from '../assets/icons/adv/5.svg'
import Icons6 from '../assets/icons/adv/6.svg'
import Icons7 from '../assets/icons/adv/7.svg'
import Icons8 from '../assets/icons/adv/8.svg'
import Icons9 from '../assets/icons/adv/9.svg'
import Icons10 from '../assets/icons/adv/10.svg'
import Icons11 from '../assets/icons/adv/11.svg'

import Video from '../assets/images/firma__video.png'
import Comments from '../components/Comments'


export default function Firma() {
  return (
    <>
      <Tabs/>
      <section className='firma'>
        <div className="container">
          <div className="firma__body">
            <div className="firma__body-info">
            <div className="firma__body-info-dop">
              <div className="firma__body-info-dop-true">
                <p>Фото</p>
                <span>100%</span>
                <p>проверено</p>
              </div>
              <button>
                <img src={Favor} alt="" />
              </button>
            </div>
            <a href='' className="firma__body-info-link">
              <img src={Link} alt="" />
              Перейти на сайт  фирмы
            </a>
              <div className="firma__body-info-start">
                <span className='firma__body-info-start-number'>
                  Анкета № 23
                </span>
                <div className="firma__body-info-start-wrap">
                  <span>Логотип</span>
                </div>
                <div className="firma__body-info-start-stars">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div className="firma__body-info-name">
                <div className="firma__body-info-name-title">
                  <div className="firma__body-info-name-title-top">
                    <h1>“Богини”</h1>
                    <a href='' className="firma__body-info-name-title-top-chat">
                      <img src={Chat} alt="" />
                      <p>23</p>
                    </a>
                  </div>
                  <span>Фирма досуга</span>
                </div>
                <div className="firma__body-info-name-contact">
                  <img src={Tel} alt="" />
                  <div className="firma__body-info-name-contact-info">
                    <a className='firma__body-info-name-contact-info-tel' href="">
                      8(914)218-65-48
                    </a>
                    <div className="firma__body-info-name-contact-info-social">
                      <a href="">
                        <img src={Wt} alt="" />
                      </a>
                      <a href="">
                        <img src={Tg} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="firma__body-info-name-liked">
                  <button>
                    <img src={like} alt="" />
                  </button>
                  <span>Круглосуточно</span>
                </div>
              </div>
            </div>
            <div className="firma__body-place">
              <span className='firma__body-place-title'>Интерьер:</span>
              <div className="firma__body-place-block">
                <div className="firma__body-place-block-item">
                  <img src={FirmaOne} alt="" />
                </div>
                <div className="firma__body-place-block-item">
                  <img src={FirmaTwo} alt="" />
                </div>
                <div className="firma__body-place-block-item">
                  <img src={FirmaThree} alt="" />
                </div>
                <div className="firma__body-place-block-item">
                  <img src={FirmaFour} alt="" />
                </div>
                <div className="firma__body-place-block-item">
                  <img src={FirmaFive} alt="" />
                  <span>+15 Фото</span>
                </div>
              </div>
            </div>
            <div className="firma__body-tarif">
              <span className='firma__body-tarif-title'>
              Тарифы:
              </span>
              <div className="firma__body-tarif-block">
                <div className="firma__body-tarif-block-col">
                  <span>Апартаменты:</span>
                  <ul>
                    <li>
                    1 час - 
                    </li>
                    <li>
                    2 часа -
                    </li>
                    <li>
                    Ночь - 
                    </li>
                    <li>
                    Экспресс - 
                    </li>
                  </ul>
                </div>
                <div className="firma__body-tarif-block-col">
                  <span>Выезд:</span>
                  <ul>
                    <li>
                    1 час - 
                    </li>
                    <li>
                    2 часа -
                    </li>
                    <li>
                    Ночь - 
                    </li>
                  </ul>
                </div>
              </div>
              <span className='firma__body-tarif-title'>
              Я выезжаю:
              </span>
            </div>
            <div className="firma__body-job">
              <span className='firma__body-job-title'>
                Место работы:
              </span>
              <div className="firma__body-job-place">
                <p>Фирма <span>“Богини”</span> находится по адресу: г. (название), ул. (название), д. №, Центр</p>
                <a href='' className="firma__body-job-place-card">
                  <img src={Tag} alt="" />
                  <span>На карте</span>
                </a>
              </div>
            </div>
            <div className="firma__body-program">
              <span className="firma__body-program-title">
              Программы:
              </span>
              <div className="firma__body-program-list">
                <div className="firma__body-program-list-item">
                  <img src={Check} alt="" />
                  <span>Программа 1</span>
                </div>
                <div className="firma__body-program-list-item">
                  <img src={Check} alt="" />
                  <span>Программа 1</span>
                </div>
                <div className="firma__body-program-list-item">
                  <img src={Check} alt="" />
                  <span>Программа 1</span>
                </div>
                <div className="firma__body-program-list-item">
                  <img src={Check} alt="" />
                  <span>Программа 1</span>
                </div>
                <div className="firma__body-program-list-item">
                  <img src={Check} alt="" />
                  <span>Программа 1</span>
                </div>
              </div>
              <button className='program__more'>
                Все программы: (12)
              </button>
            </div>
            <div className="firma__body-about">
              <div className="firma__body-about-title">
              Коротко о фирме:
              </div>
              <div className="firma__body-about-text">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum id officiis temporibus, nam at vel laborum. Sequi autem id repudiandae quidem possimus quod earum, ad repellendus blanditiis soluta nam.
                Maxime nihil atque magni laboriosam facere enim iste, cumque distinctio numquam nobis corporis eveniet eos vero, quia praesentium consequatur repellat sit voluptates doloremque voluptatem esse ratione eaque possimus. Ab, minima?
                Ad dolorum debitis unde quas, nisi enim excepturi dolores voluptatibus fugiat fugit omnis soluta aliquam hic nesciunt similique veritatis necessitatibus numquam eius neque, assumenda molestiae? Dolorem ullam cum aliquam in!
                Alias iure error consequatur quis dignissimos modi laboriosam doloremque quos facilis, enim fugiat tempora magnam fuga dolores similique odit veniam cumque fugit! Officiis nisi eum non quibusdam recusandae quasi saepe.
                </p>
              </div>
              <button className="firma__body-about-more">
                ПОДРОБНЕЕ
              </button>
            </div>
            <div className="firma__body-girls">
              <span className='firma__body-girls-title'>
              Расписание девушек:
              </span>
              <div className="firma__body-girls-block">
                  <div className="firma__body-girls-block-top">
                    <div className="firma__body-girls-block-top-col">
                      <span>8</span>
                      <p>девушек в <br /> семене из</p>
                      <span>24</span>
                    </div>
                    <div className="firma__body-girls-block-top-tabs">
                      <button className='active'>
                      Пн
                      </button>
                      <button>
                      Вт
                      </button>
                      <button>
                      Ср
                      </button>
                      <button>
                      Чт
                      </button>
                      <button>
                      Пт
                      </button>
                      <button>
                      Сб
                      </button>
                      <button>
                      Вс
                      </button>
                    </div>
                  </div>
                  <div className="firma__body-girls-block-bot">
                    <div className="firma__body-girls-block-bot-list">
                      <div className="firma__body-girls-block-bot-list-item">
                        <div className="firma__body-girls-block-bot-list-item-wrap">
                          <img src={Girl} alt="" />
                          <span className='circle'></span>
                        </div>
                        <div className="firma__body-girls-block-bot-list-item-info">
                          <span>(Имя)</span>
                          <p>в смене</p>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-list-item">
                        <div className="firma__body-girls-block-bot-list-item-wrap">
                          <img src={Girl} alt="" />
                          <span className='circle'></span>
                        </div>
                        <div className="firma__body-girls-block-bot-list-item-info">
                          <span>(Имя)</span>
                          <p>в смене</p>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-list-item">
                        <div className="firma__body-girls-block-bot-list-item-wrap">
                          <img src={Girl} alt="" />
                          <span className='circle'></span>
                        </div>
                        <div className="firma__body-girls-block-bot-list-item-info">
                          <span>(Имя)</span>
                          <p>в смене</p>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-list-item">
                        <div className="firma__body-girls-block-bot-list-item-wrap">
                          <img src={Girl} alt="" />
                          <span className='circle'></span>
                        </div>
                        <div className="firma__body-girls-block-bot-list-item-info">
                          <span>(Имя)</span>
                          <p>в смене</p>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-list-item">
                        <div className="firma__body-girls-block-bot-list-item-wrap">
                          <img src={Girl} alt="" />
                          <span className='circle'></span>
                        </div>
                        <div className="firma__body-girls-block-bot-list-item-info">
                          <span>(Имя)</span>
                          <p>в смене</p>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-list-item">
                        <div className="firma__body-girls-block-bot-list-item-wrap">
                          <img src={Girl} alt="" />
                          <span className='circle'></span>
                        </div>
                        <div className="firma__body-girls-block-bot-list-item-info">
                          <span>(Имя)</span>
                          <p>в смене</p>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-list-item">
                        <div className="firma__body-girls-block-bot-list-item-wrap">
                          <img src={Girl} alt="" />
                          <span className='circle'></span>
                        </div>
                        <div className="firma__body-girls-block-bot-list-item-info">
                          <span>(Имя)</span>
                          <p>в смене</p>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-list-item">
                        <div className="firma__body-girls-block-bot-list-item-wrap">
                          <img src={Girl} alt="" />
                          <span className='circle'></span>
                        </div>
                        <div className="firma__body-girls-block-bot-list-item-info">
                          <span>(Имя)</span>
                          <p>в смене</p>
                        </div>
                      </div>
                    </div>
                    <div className="firma__body-girls-block-bot-graphic">
                      <div className="firma__body-girls-block-bot-graphic-row">
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>24 ч</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12 с 16</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>с 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-graphic-row">
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>24 ч</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12 с 16</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>с 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-graphic-row">
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>24 ч</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12 с 16</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>с 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-graphic-row">
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>24 ч</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12 с 16</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>с 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-graphic-row">
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>24 ч</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12 с 16</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>с 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-graphic-row">
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>24 ч</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12 с 16</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>с 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-graphic-row">
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>24 ч</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12 с 16</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>с 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                      </div>
                      <div className="firma__body-girls-block-bot-graphic-row">
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>24 ч</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12 с 16</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>с 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>до 12</span>
                        </div>
                        <div className="firma__body-girls-block-bot-graphic-row-item">
                          <span>отдых</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <button className='firma__body-girls-more'>
              Все девушки (13)
              </button>
            </div>
            <div className="firma__body-right">
              <span className="firma__body-right-title">
              Правила фирмы:
              </span>
              <div className="firma__body-right-block">
                <div className="firma__body-right-block-age">
                  <p>Ограничения по возрасту:</p>
                  <span>от 18 до 45</span>
                </div>
                <div className="firma__body-right-block-item">
                  <p>Фейс-контроль:</p>
                  <span>Нет</span>
                </div>
                <div className="firma__body-right-block-item">
                  <p>Алкогольное, наркотическое опьянение:</p>
                  <span>Нет</span>
                </div>
              </div>
              <div className="firma__body-right-imp">
                <span>Важно!</span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, ea? Voluptas iusto est iure eligendi. Id dolorem earum dolores ut? Similique nihil omnis asperiores? Quisquam provident vitae nam ipsum fugit!
                  Dolores corrupti provident, deserunt accusantium enim vitae quibusdam asperiores quae architecto fugiat numquam obcaecati id odio vel minus, facere fuga voluptate placeat cum eos quisquam blanditiis. Id voluptatibus cum perspiciatis?
                  Possimus, laudantium illum voluptatem quibusdam ratione animi perspiciatis! Sequi illum harum quia natus numquam consectetur nesciunt eveniet iure pariatur. Aliquam, ad aperiam tempore quaerat illum tempora nulla quae sed labore?
                </p>
              </div>
            </div>
            <div className="firma__body-adv">
              <span className="firma__body-adv-title">
                Преимущества фирмы:
              </span>
              <div className="firma__body-adv-block">
                <div className="firma__body-adv-block-col">
                  <div className="firma__body-adv-block-col-item">
                    <div className="circle">
                      <img src={Icons1} alt="" />
                    </div>
                    <span>Душ</span>
                  </div>
                  <div className="firma__body-adv-block-col-item">
                    <div className="circle">
                      <img src={Icons2} alt="" />
                    </div>
                    <span>Ванна</span>
                  </div>
                  <div className="firma__body-adv-block-col-item">
                    <div className="circle">
                      <img src={Icons3} alt="" />
                    </div>
                    <span>Джакузи</span>
                  </div>
                  <div className="firma__body-adv-block-col-item">
                    <div className="circle">
                      <img src={Icons4} alt="" />
                    </div>
                    <span>Стриптиз </span>
                  </div>
                  <div className="firma__body-adv-block-col-item">
                    <div className="circle">
                      <img src={Icons5} alt="" />
                    </div>
                    <span>Курят</span>
                  </div>
                  <div className="firma__body-adv-block-col-item">
                    <div className="circle">
                      <img src={Icons6} alt="" />
                    </div>
                    <span>Кальян</span>
                  </div>
                </div>
                <div className="firma__body-adv-block-col">
                  <div className="firma__body-adv-block-col-item">
                    <div className="circle">
                      <img src={Icons7} alt="" />
                    </div>
                    <span>Бар</span>
                  </div>
                  <div className="firma__body-adv-block-col-item">
                    <div className="circle">
                      <img src={Icons8} alt="" />
                    </div>
                    <span>Кухня</span>
                  </div>
                  <div className="firma__body-adv-block-col-item">
                    <div className="circle">
                      <img src={Icons9} alt="" />
                    </div>
                    <span>Оплата безналом</span>
                  </div>
                  <div className="firma__body-adv-block-col-item">
                    <div className="circle">
                      <img src={Icons10} alt="" />
                    </div>
                    <span>Кондиционер</span>
                  </div>
                  <div className="firma__body-adv-block-col-item">
                    <div className="circle">
                      <img src={Icons11} alt="" />
                    </div>
                    <span>Парковка</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="firma__body-video">
              <span className="firma__body-video-title">
              Видео:
              </span>
              <div className="firma__body-video-block">
                <div className="firma__body-video-block-item">
                  <img src={Video} alt="" />
                </div>
                <div className="firma__body-video-block-item">
                  <img src={Video} alt="" />
                </div>
                <div className="firma__body-video-block-item">
                  <img src={Video} alt="" />
                </div>
                <div className="firma__body-video-block-item active">
                  <div className="grad"></div>
                  <img src={Video} alt="" />
                  <span>+ 30</span>
                </div>
              </div>
            </div>
            <Comments/>
          </div>
        </div>
      </section>
    </>
  )
}
