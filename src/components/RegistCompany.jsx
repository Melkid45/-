import React from 'react'
import RegisterContact from './RegisterContact'
import RegisterGuest from './RegisterGuest'
import RegisterTarif from './RegisterTarif'
import RegistServices from './RegistServices'
import RegistPhoto from './RegistPhoto'
import RegistMainPhoto from './RegistMainPhoto'
import RegistVideo from './RegistVideo'
import RegistCard from './RegistCard'

export default function RegistCompany() {
  return (
    <div className='account__body-block-company form__company none'>
        <div className="account__body-block-company-section">
            <span className="account__body-block-company-section-title">
            Контактная информация:
            </span>
            <RegisterContact/>
        </div>
        <div className="account__body-block-company-section">
            <span className="account__body-block-company-section-title">
            Требования к гостям:
            </span>
            <RegisterGuest/>
        </div>
        <div className="account__body-block-company-section">
            <span className="account__body-block-company-section-title">
            Тарифы:
            </span>
            <RegisterTarif/>
        </div>
        <div className="account__body-block-company-section">
            <span className="account__body-block-company-section-title">
            Мои услуги: 
            </span>
            <p className='account__body-block-company-section-desc'>Если какая-то из услуг требует дополнительной оплаты, то укажите ее в расположенном рядом поле.</p>
            <RegistServices/>
        </div>
        <div className="account__body-block-company-section">
            <span className="account__body-block-company-section-title">
            Загрузить фото: 
            </span>
            <RegistPhoto/>
        </div>
        <div className="account__body-block-company-section">
            <span className="account__body-block-company-section-title">
            Загрузить проверочное фото:
            </span>
            <RegistMainPhoto/>
        </div>
        <div className="account__body-block-company-section">
            <span className="account__body-block-company-section-title">
            Загрузить видео:
            </span>
            <RegistVideo/>
        </div>
        <div className="account__body-block-company-section">
            <span className="account__body-block-company-section-title">
            Указать на карте:
            </span>
            <p className='account__body-block-company-section-desc'>Можете указать на карте не точный адрес, а рядом с ним.</p>
            <RegistCard/>
        </div>
        <button className='account__body-block-company-section-btn'>
          Сохранить
        </button>
    </div>
  )
}
