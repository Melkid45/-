import React from 'react'
import Triangle from '../assets/icons/triangle.svg'

export default function RegisterGuest() {

    const OpenCLick = (e) => {
        e.target.closest('.filter__select').querySelector('.filter__select-body-choose').classList.toggle('active')
    }

  return (
    <form className="account__body-block-company-section-contact">
        <div className="account__body-block-company-section-contact-item item__range">
            <p>Время для звонка: c</p>
            <input type="text" />
            <p>до</p>
            <input type="text" />
        </div>
        <div className="filter__select">
        <span className="filter__select-title">
        Фейс-контроль:
        </span>
        <div className="filter__select-body">
            <span className="filter__select-body-main">
                Да
            </span>
            <div className="filter__select-body-choose">
            <span>Нет</span>
            </div>
        </div>
        <div onClick={OpenCLick}  className="filter__select-button">
          <img src={Triangle} alt="" />
        </div>
        </div>
        <div className="filter__select">
        <span className="filter__select-title auto">
        Алкогольное, наркотическое опьянение:
        </span>
        <div className="filter__select-body">
            <span className="filter__select-body-main">
                Да
            </span>
            <div className="filter__select-body-choose">
            <span>Нет</span>
            </div>
        </div>
        <div onClick={OpenCLick}  className="filter__select-button">
          <img src={Triangle} alt="" />
        </div>
        </div>
        <div className="account__body-block-company-section-contact-desc">
            <span>Важно!</span>
            <textarea className='account__body-block-company-section-contact-desc-block'></textarea>
            <p className='account__body-block-company-section-contact-desc-soft'>
            В этой графе можно указать дополнительные требования к гостям. А так же новости, скидки, акции
если таковые имеются. 
            </p>
        </div>
    </form>
  )
}
