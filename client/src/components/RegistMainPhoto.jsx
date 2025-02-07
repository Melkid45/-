import React from 'react'
import Trash from '../assets/icons/trash.svg'
export default function RegistMainPhoto() {
  return (
    <div className="account__body-block-company-section-photo">
        <div className="account__body-block-company-section-photo-upload">
            <div>
                <span>
                Выбрать файл
                </span>
                <input type="file"/>
            </div>
            <p>
                Файл не выбран
            </p>
        </div>
        <div className="account__body-block-company-section-photo-block">
            <div className="account__body-block-company-section-photo-block-item alternative">
                <div className="account__body-block-company-section-photo-block-item-wrap">
                    <img src="" alt="" />
                </div>
                <button>
                <img src={Trash} alt="" />
                </button>
            </div>
        </div>
        <p className="account__body-block-company-section-photo-desc">
        После загрузки фото, анкета получает статус “Проверено 100%” <br />
        Не публикуется в анкете!
        </p>
    </div>
  )
}