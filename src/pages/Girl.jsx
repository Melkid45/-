import React from 'react'
import Starr from '../assets/icons/star.svg'
import CardGirl from '../assets/images/card__girl.avif'
import ItemGirl from '../assets/images/wrap__girl.avif'
import Chat from '../assets/icons/chat.svg'
import Tg from '../assets/icons/tg.svg'
import Wt from '../assets/icons/wt.svg'
import Like from '../assets/icons/like.svg'
import Tel from '../assets/icons/tel.png'
import Favor from '../assets/icons/favor.png'

import Card from '../assets/icons/girl__card.svg'
import Check from '../assets/icons/check.svg'
import Video from '../assets/images/firma__video.avif'
import One from '../assets/icons/girl/1.svg'
import Two from '../assets/icons/girl/2.svg'
import Three from '../assets/icons/girl/3.svg'
import Four from '../assets/icons/girl/4.svg'
import Five from '../assets/icons/girl/5.svg'
import Six from '../assets/icons/girl/6.svg'
import Comments from '../components/Comments'

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'

export default function Girl() {
  return (
    <div className='girl'>
      <div className="container">
        <div className="girl__body">
          <div className="girl__body-card">
            <div className="girl__body-card-start">
              <span>Анкета №  237</span>
              <img className='girl__body-card-start-main desk' src={CardGirl} alt="" />
              <Splide className="mob girl__body-card-start-splide" aria-label=""
          options={ {
            rewind: true,
            arrows: true,
            pagination: false
          } }>
              <SplideSlide>
              <img src={CardGirl} alt="" />
              </SplideSlide>
              <SplideSlide>
              <img src={CardGirl} alt="" />
              </SplideSlide>
              <SplideSlide>
              <img src={CardGirl} alt="" />
              </SplideSlide>
              <SplideSlide>
              <img src={CardGirl} alt="" />
              </SplideSlide>
          </Splide>
              <div className="girl__body-card-start-rating">
                <img src={Starr} alt="" />
                <img src={Starr} alt="" />
                <img src={Starr} alt="" />
                <img src={Starr} alt="" />
                <img src={Starr} alt="" />
              </div>
              <div className="girl__body-card-start-wrap desk">
                <div className="girl__body-card-start-wrap-item">
                  <img src={ItemGirl} alt="" />
                </div>
                <div className="girl__body-card-start-wrap-item">
                  <img src={ItemGirl} alt="" />
                </div>
                <div className="girl__body-card-start-wrap-item">
                  <img src={ItemGirl} alt="" />
                </div>
                <div className="girl__body-card-start-wrap-item">
                  <img src={ItemGirl} alt="" />
                </div>
                <div className="girl__body-card-start-wrap-item">
                  <img src={ItemGirl} alt="" />
                </div>
                <div className="girl__body-card-start-wrap-item">
                  <img src={ItemGirl} alt="" />
                </div>
                <div className="girl__body-card-start-wrap-item">
                  <img src={ItemGirl} alt="" />
                </div>
                <div className="girl__body-card-start-wrap-item">
                  <img src={ItemGirl} alt="" />
                </div>
                <div className="girl__body-card-start-wrap-item">
                  <img src={ItemGirl} alt="" />
                </div>
                <div className="girl__body-card-start-wrap-item">
                  <img src={ItemGirl} alt="" />
                </div>
                <div className="girl__body-card-start-wrap-item click">
                  <div className="grad"></div>
                  <img src={ItemGirl} alt="" />
                  <span>+ 23</span>
                </div>
              </div>
            </div>
            <div className="girl__body-card-end">
              <div className="girl__body-card-end-info">
                <div className="girl__body-card-end-info-title">
                  <h1>Карина</h1>
                  <div onClick={() => document.getElementById('comm')?.scrollIntoView({behavior: 'smooth'})} className="girl__body-card-end-info-title-chat">
                    <img src={Chat} alt="" />
                    <span>23</span>
                  </div>
                </div>
                <div className="girl__body-card-end-info-num">
                  <img className='girl__body-card-end-info-num-main' src={Tel} alt="" />
                  <div className="girl__body-card-end-info-num-wrap">
                    <a href="">
                      8(914)218-65-48
                    </a>
                    <div className="girl__body-card-end-info-num-wrap-social">
                      <a href="">
                        <img src={Wt} alt="" />
                      </a>
                      <a href="">
                        <img src={Tg} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="girl__body-card-end-info-time">
                  <p>
                  с 10:00 до 21:00 
                  </p>
                  <span>Работает</span>
                </div>
                <button className='girl__body-card-end-info-like'>
                  <img src={Like} alt="" />
                </button>
                <div className="girl__body-card-end-info-dop">
                  <div className="girl__body-card-end-info-dop-right">
                    <p>Фото</p>
                    <span>100%</span>
                    <p>проверено</p>
                  </div>
                  <button>
                    <img src={Favor} alt="" />
                  </button>
                </div>
              </div>
              <div className="girl__body-card-end-place">
                <div className="girl__body-card-end-place-wrap">
                  <div className="girl__body-card-end-place-wrap-col">
                  <span>Апартаменты:</span>
                  <ul>
                    <li>
                      <p>1 час - </p>
                      <p>2 500 руб</p>
                    </li>
                    <li>
                      <p>2 час - </p>
                      <p>5 000 руб</p>
                    </li>
                    <li>
                    <p>Ночь - </p>
                      <p>30 000 руб</p>
                    </li>
                  </ul>
                  </div>
                  <div className="girl__body-card-end-place-wrap-col">
                  <span>Выезд:</span>
                  <ul>
                    <li>
                    <p>1 час - </p>
                      <p>2 500 руб</p>
                    </li>
                    <li>
                    <p>2 час - </p>
                      <p>5 000 руб</p>
                    </li>
                    <li>
                      <p>Ночь - </p>
                      <p>30 000 руб</p>
                    </li>
                  </ul>
                  </div>
                  
                </div>
                <div className="girl__body-card-end-place-out">
                  <span>Я выезжаю:</span>
                  <span>Туда и туда</span>
                </div>
              </div>
              <div className="girl__body-card-end-param">
                <span className='girl__body-card-end-param-title'>Параметры:</span>
                <div className="girl__body-card-end-param-block">
                  <div className="girl__body-card-end-param-block-item">
                    <img src={One} alt="" />
                    <span>23</span>
                  </div>
                  <div className="girl__body-card-end-param-block-item">
                    <img src={Two} alt="" />
                    <span>50</span>
                  </div>
                  <div className="girl__body-card-end-param-block-item">
                    <img src={Three} alt="" />
                    <span>2</span>
                  </div>
                  <div className="girl__body-card-end-param-block-item">
                    <img src={Four} alt="" />
                    <span>170</span>
                  </div>
                  <div className="girl__body-card-end-param-block-item">
                    <img src={Five} alt="" />
                    <span>37</span>
                  </div>
                  <div className="girl__body-card-end-param-block-item">
                    <img src={Six} alt="" />
                    <span>42</span>
                  </div>
                </div>
                <div className="girl__body-card-end-param-desc">
                  <div className="girl__body-card-end-param-desc-item">
                    <span>Национальность:</span>
                    <span>Русская</span>
                  </div>
                  <div className="girl__body-card-end-param-desc-item">
                    <span>Финура:</span>
                    <span>10 из 10</span>
                  </div>
                  <div className="girl__body-card-end-param-desc-item">
                    <span>Волосы:</span>
                    <span>Блондинка</span>
                  </div>
                </div>
              </div>
              <div className="girl__body-card-end-job">
                  <span className="girl__body-card-end-job-title">
                  Место работы :
                  </span>
                  <div className="girl__body-card-end-job-wrap">
                    <span>Индивидуалка </span>
                    <button className="girl__body-card-end-job-wrap-card">
                      <img src={Card} alt="" />
                      На карте
                    </button>
                  </div>
                  <span className="girl__body-card-end-job-place">
                    Находится по адресу: г. (название), ул. (название), д. №, Центр
                  </span>
              </div>
              <div className="girl__body-card-end-meet">
                <span className="girl__body-card-end-meet-title">
                При встречи возможно:
                </span>
                <div className="girl__body-card-end-meet-block">
                  <div className="girl__body-card-end-meet-block-col">
                    <div className="girl__body-card-end-meet-block-col-item">
                      <img src={Check} alt="" />
                      <span>Классический секс </span>
                    </div>
                    <div className="girl__body-card-end-meet-block-col-item">
                      <img src={Check} alt="" />
                      <span>Минет в презервативе</span>
                    </div>
                    <div className="girl__body-card-end-meet-block-col-item">
                      <img src={Check} alt="" />
                      <span>Минет без презерватива</span>
                    </div>
                    <div className="girl__body-card-end-meet-block-col-item">
                      <img src={Check} alt="" />
                      <span>Страпон</span>
                    </div>
                  </div>
                  <div className="girl__body-card-end-meet-block-col">
                    <div className="girl__body-card-end-meet-block-col-item">
                      <img src={Check} alt="" />
                      <span>Госпожа</span>
                      <p>+ 5000</p>
                    </div>
                    <div className="girl__body-card-end-meet-block-col-item">
                      <img src={Check} alt="" />
                      <span>БДСМ</span>
                    </div>
                    <div className="girl__body-card-end-meet-block-col-item">
                      <img src={Check} alt="" />
                      <span>Лезби-шоу</span>
                      <p>+ 5000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="girl__body-card-end-about">
                <span>Коротко о себе:</span>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt cum ad mollitia? Necessitatibus incidunt obcaecati alias repellendus quasi eligendi aliquid, minima cum accusantium rem, totam veritatis vitae harum nesciunt ipsam.
                  Culpa doloribus quod dolor ea totam minima tempore officia error aliquid ab magni iste delectus neque, illo non hic ad voluptatibus. Hic voluptates voluptatibus libero facilis, odit eaque molestias sint!
                  Iure libero minima incidunt dolorum nemo, necessitatibus temporibus! Alias assumenda explicabo in vitae voluptate ex pariatur accusantium. Tenetur commodi fugiat hic dicta a, reprehenderit ipsum, numquam vel cum magnam quasi?
                </p>
                <button>
                  ПОДРОБНЕЕ
                </button>
              </div>
              <div className="girl__body-card-end-right">
                <span className="girl__body-card-end-right-title">
                Требования к гостям:
                </span>
                <ul className="girl__body-card-end-right-list">
                  <li>
                    <span>Ограничения по возрасту:</span>
                    <span>От 20 До 30</span>
                  </li>
                  <li>
                    <span>Использование презерватива:</span>
                    <p>Да</p>
                  </li>
                  <li>
                    <span>Количество контактов:</span>
                    <p>1</p>
                  </li>
                  <li>
                    <span>Фейс-контроль:</span>
                    <p>Да</p>
                  </li>
                  <li>
                    <span>Алкогольное, наркотическое опьянение:</span>
                    <p>Нет</p>
                  </li>
                </ul>
                <span className='girl__body-card-end-right-imp'>Важно!</span>
                <p className='girl__body-card-end-right-desc'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius rerum, at ad eos quae praesentium nisi corrupti vitae! Autem aut architecto beatae nostrum, quos aliquam voluptas provident saepe maxime accusamus.
                  Error tempora repudiandae alias suscipit praesentium cupiditate dolore animi nihil sed optio cum, eum exercitationem ullam omnis fugiat id officia! Inventore cum dolores itaque rem porro sed ullam fugiat autem!
                </p>
              </div>
              
            </div>
          </div>
          <div className="girl__body-bot">
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
      </div>
    </div>
  )
}
