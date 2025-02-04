import React from 'react'
import Starr from '../assets/icons/star.svg'
import CardGirl from '../assets/images/card__girl.png'
import ItemGirl from '../assets/images/wrap__girl.png'
import Chat from '../assets/icons/chat.svg'
import Tg from '../assets/icons/tg.svg'
import Wt from '../assets/icons/wt.svg'
import Like from '../assets/icons/like.svg'
import Tel from '../assets/icons/tel.png'
import Favor from '../assets/icons/favor.png'


import One from '../assets/icons/girl/1.svg'
import Two from '../assets/icons/girl/2.svg'
import Three from '../assets/icons/girl/3.svg'
import Four from '../assets/icons/girl/4.svg'
import Five from '../assets/icons/girl/5.svg'
import Six from '../assets/icons/girl/6.svg'
export default function Girl() {
  return (
    <div className='girl'>
      <div className="container">
        <div className="girl__body">
          <div className="girl__body-card">
            <div className="girl__body-card-start">
              <span>Анкета №  237</span>
              <img className='girl__body-card-start-main' src={CardGirl} alt="" />
              <div className="girl__body-card-start-rating">
                <img src={Starr} alt="" />
                <img src={Starr} alt="" />
                <img src={Starr} alt="" />
                <img src={Starr} alt="" />
                <img src={Starr} alt="" />
              </div>
              <div className="girl__body-card-start-wrap">
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
                  <div className="girl__body-card-end-info-title-chat">
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
                <span className='girl__body-card-end-param-title'></span>
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
              </div>
            </div>
          </div>
          <div className="girl__body-bot">
            
          </div>
        </div>
      </div>
    </div>
  )
}
