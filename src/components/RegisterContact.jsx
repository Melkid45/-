import React from 'react'
import Triangle from '../assets/icons/triangle.svg'
export default function RegisterContact() {

    const OpenCLick = (e) => {
        e.target.closest('.filter__select').querySelector('.filter__select-body-choose').classList.toggle('active')
    }

    return (
    <form className="account__body-block-company-section-contact">
        <div className="account__body-block-company-section-contact-item">
            <p>Город: <span>*</span></p>
            <input type="text" />
        </div>
        <div className="account__body-block-company-section-contact-item">
            <p>Район: <span>*</span></p>
            <input type="text" />
        </div>
        <div className="account__body-block-company-section-contact-item">
            <p>Улица:</p>
            <input type="text" />
        </div>
        <div className="account__body-block-company-section-contact-item">
            <p>Дом:</p>
            <input type="text" />
        </div>
        <div className="account__body-block-company-section-contact-item">
            <p>Номер телефона: <span>*</span></p>
            <input type="text" />
        </div>
        <div className="filter__select">
        <span className="filter__select-title">
          Мессенджер:
        </span>
        <div className="filter__select-body">
          <span className="filter__select-body-main">
          Мессенджер
          </span>
          <div className="filter__select-body-choose">
            <span>Telegramm</span>
            <span>What's up</span>
            <span>Viber</span>
          </div>
        </div>
        <div onClick={OpenCLick}  className="filter__select-button">
          <img src={Triangle} alt="" />
        </div>
        </div>
        <div className="account__body-block-company-section-contact-item item__range">
            <p>Время для звонка: c</p>
            <input type="text" />
            <p>до</p>
            <input type="text" />
        </div>
        <p className='account__body-block-company-section-contact-imp'>Если вы принимаете звонки в любое время, то ничего не надо заполнять. </p>
    </form>
    )
}
