import React, { useRef } from 'react'
import Triangle from '../assets/icons/triangle.svg'
import { useState } from 'react';
export default function Filter() {
  const ref = useRef(null)

  const [places, setPlaces] = useState([]);
  const [newPlace, setNewPlace] = useState({});

  const handleCLick = () => {
    setPlaces([ ...places, newPlace]);
    setNewPlace({ city: '', name: ''});
    console.log(places)
  }
  const OpenCLick = () => {
    document.querySelector('.filter__select-body-choose').classList.toggle('active')
  }
  return (
    
        
    
    <div className='filter'>
      <div className="filter__select">
        <div className="filter__select-body">
          <span className="filter__select-body-main">
            Город
          </span>
          <div className="filter__select-body-choose">
            <span>Город 1</span>
            <span>Город 2</span>
            <span>Город 3</span>
            <span>Город 4</span>
            <span>Город 5</span>
          </div>
        </div>
        <button onClick={OpenCLick} ref={ref}  className="filter__select-button">
          <img src={Triangle} alt="" />
        </button>
      </div>
      <div className="filter__category">
      <div className="filter__select">
        <div className="filter__select-body">
          <span className="filter__select-body-main">
            Город
          </span>
          <div className="filter__select-body-choose">
            <span>Город 1</span>
            <span>Город 2</span>
            <span>Город 3</span>
            <span>Город 4</span>
            <span>Город 5</span>
          </div>
        </div>
        <button onClick={OpenCLick} ref={ref}  className="filter__select-button">
          <img src={Triangle} alt="" />
        </button>
      </div>
      <div className="filter__category-wrap">
        <div className="filter__category-wrap-top">
        <button>Реальные</button>
        <button>Новые</button>
        </div>
        <button className='filter__category-wrap-bot'>
        Рекомендуемые
        </button>
      </div>
      </div>
      <div className="filter__table">
        <span>Ценность</span>
        <div className="filter__table-wrap">
        <button className="filter__table-wrap-item">Дешовые</button>
        <button className="filter__table-wrap-item">2000-2500</button>
        <button className="filter__table-wrap-item">2500-3000</button>
        <button className="filter__table-wrap-item">3000-4000</button>
        <button className="filter__table-wrap-item">4000-5000</button>
        <button className="filter__table-wrap-item">Элитные</button>
        </div>
      </div>
      <div className="filter__table">
        <span>Возраст</span>
        <div className="filter__table-wrap">
        <button className="filter__table-wrap-item">Молодые</button>
        <button className="filter__table-wrap-item">20-25лет</button>
        <button className="filter__table-wrap-item">25-30лет</button>
        <button className="filter__table-wrap-item">30-35лет</button>
        <button className="filter__table-wrap-item">35-40лет</button>
        <button className="filter__table-wrap-item">Зрелые</button>
        </div>
      </div>
      <div className="filter__list">
        <span>Телосложение</span>
        <div className="filter__list-wrap">
        <button className="filter__list-wrap-item">Классический секс</button>
        <button className="filter__list-wrap-item">Анальный секс </button>
        <button className="filter__list-wrap-item">Лесбийский секс</button>
        <button className="filter__list-wrap-item">Групповой секс</button>
        <button className="filter__list-wrap-item">Секс в машине</button>
        <button className="filter__list-wrap-item">Минет без презерватива</button>
        <button className="filter__list-wrap-item">Глубокий минет</button>
        <button className="filter__list-wrap-item">Куннилингус</button>
        <button className="filter__list-wrap-item">Эротический массаж</button>
        <button className="filter__list-wrap-item">Услуги семейной паре</button>
        <button className="filter__list-wrap-item">Услуги БДСМ</button>
        <button className="filter__list-wrap-item">Золотой дождь</button>
        <button className="filter__list-wrap-item">Эскорт услуги</button>
        <button className="filter__list-wrap-item">Госпожа</button>
        <button className="filter__list-wrap-item">Страпон</button>
        <button className="filter__list-wrap-item">Секс игрушки</button>
        <button className="filter__list-wrap-item">Стриптиз</button>
        <button className="filter__list-wrap-item">Есть подружка </button>
        <button className="filter__list-wrap-item">Обслуживаю мальчишники </button>
        <button className="filter__list-wrap-item">Веб-камера</button>
        </div>
      </div>
      <div className="filter__table">
        <span>Телосложение</span>
        <div className="filter__table-wrap">
        <button className="filter__table-wrap-item">Худые</button>
        <button className="filter__table-wrap-item">Стройные</button>
        <button className="filter__table-wrap-item">Спортивные</button>
        <button className="filter__table-wrap-item">Пышные</button>
        </div>
      </div>
      <div className="filter__table">
        <span>Цвет волос</span>
        <div className="filter__table-wrap">
        <button className="filter__table-wrap-item">Блондинки</button>
        <button className="filter__table-wrap-item">Брюнетки</button>
        <button className="filter__table-wrap-item">Шатенки</button>
        <button className="filter__table-wrap-item">Рыжие</button>
        </div>
      </div>
      <div className="filter__table">
        <span>Национальность </span>
        <div className="filter__table-wrap">
        <button className="filter__table-wrap-item">Европейки</button>
        <button className="filter__table-wrap-item">Азиатки</button>
        <button className="filter__table-wrap-item">Негритянки</button>
        <button className="filter__table-wrap-item">Метиски</button>
        </div>
      </div>
      <div className="filter__row">
        <span>Размер груди</span>
        <div className="filter__row-wrap">
        <button className="filter__row-wrap-item">1</button>
        <button className="filter__row-wrap-item">2</button>
        <button className="filter__row-wrap-item">3</button>
        <button className="filter__row-wrap-item">4</button>
        <button className="filter__row-wrap-item">5</button>
        <button className="filter__row-wrap-item">6</button>
        </div>
      </div>
      <div className="filter__stroke">
        <span>Дополнительно</span>
        <div className="filter__stroke-wrap">
        <button className="filter__stroke-wrap-item">Самые комментируемые</button>
        <button className="filter__stroke-wrap-item">Интим фото</button>
        </div>
      </div>
    </div>
  )
}
