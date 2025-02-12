import React from 'react'
import Girls from '../assets/images/girls.avif'
import Favor from '../assets/icons/favor.png'
import Like from '../assets/icons/like.svg'
import Photo from '../assets/icons/photo.svg'
import Comment from '../assets/icons/comment__col.svg'
import Video from '../assets/icons/video.svg'
import Star from '../assets/icons/star.svg'
import New from '../assets/icons/new.svg'
import { Link } from 'react-router-dom'
export default function () {
  return (
    <div className='girls__card'>
      <div className="girls__card-start">
        <div className="girls__card-start-wrap">
          <img src={Girls} alt="" />
          <div className="girls__card-start-wrap-btn">
            <button>
              <img src={Favor} alt="" />
              Отложить 
            </button>
            <button>
              <img src={Like} alt="" />
              12
            </button>
          </div>
        </div>
        <div className="girls__card-start-info">
          <div className="girls__card-start-info-item">
            <img src={Favor} alt="" />
            <span>135</span>
          </div>
          <div className="girls__card-start-info-item">
            <img src={Photo} alt="" />
            <span>7</span>
          </div>
          <div className="girls__card-start-info-item">
            <img src={Video} alt="" />
            <span>23</span>
          </div>
          <div className="girls__card-start-info-item">
          <img src={Comment} alt="" />
            <span>2</span>
          </div>
        </div>
      </div>
      <div className="girls__card-info">
        <div className="girls__card-info-main">
          <span className='girls__card-info-main-name'>
          Карина 29 лет
          </span>
          <span className='girls__card-info-main-num'>
          +7(914)218-65-48
          </span>
          <div className="girls__card-info-main-desc">
            <p>
            c 10:00 до 21:00
            </p>
            <span>Работает</span>
          </div>
        </div>
        <div className="girls__card-info-list">
          <div className="girls__card-info-list-place">
            <span>
            г. Название<br />
            Район
            </span>
            <p>
              Какой-то город, какой-то район
            </p>
          </div>
          <div className="girls__card-info-list-param">
            <div className="girls__card-info-list-param-item">
              <span>
              Рост:
              </span>
              <p>
                168
              </p>
            </div>
            <div className="girls__card-info-list-param-item">
              <span>
              Вес:
              </span>
              <p>
                55 кг
              </p>
            </div>
            <div className="girls__card-info-list-param-item">
              <span>
              Бюст:
              </span>
              <p>
                3
              </p>
            </div>
          </div>
          <div className="girls__card-info-list-price">
            <div className="girls__card-info-list-price-item">
              <span>
              1 Час:
              </span>
              <p>
                2500
              </p>
            </div>
            <div className="girls__card-info-list-price-item">
              <span>
              2 Час:
              </span>
              <p>
                5000
              </p>
            </div>
            <div className="girls__card-info-list-price-item">
              <span>
              Ночь:
              </span>
              <p>
                25000
              </p>
            </div>
            <div className="girls__card-info-list-price-item">
              <span>
              Выезд:
              </span>
              <p>
                3500
              </p>
            </div>
          </div>
          <div className="girls__card-info-list-rating">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
        </div>
      </div>
      <img src={New} alt="" className="girls__card-new" />
      <span className="girls__card-top">
        TOP
      </span>
      <Link to={'girl'} className="girls__card-btn">
        ПОДРОБНЕЕ
      </Link>
    </div>
  )
}
