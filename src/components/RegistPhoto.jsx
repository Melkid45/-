import React from 'react'
import Trash from '../assets/icons/trash.svg'
export default function RegistPhoto() {
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
            <div className="account__body-block-company-section-photo-block-item">
                <div className="account__body-block-company-section-photo-block-item-wrap">
                    <img src="" alt="" />
                </div>
                <button>
                Сделать главной
                <img src={Trash} alt="" />
                </button>
            </div>
            <div className="account__body-block-company-section-photo-block-item">
                <div className="account__body-block-company-section-photo-block-item-wrap">
                    <img src="" alt="" />
                </div>
                <button>
                Сделать главной
                <img src={Trash} alt="" />
                </button>
            </div>
            <div className="account__body-block-company-section-photo-block-item">
                <div className="account__body-block-company-section-photo-block-item-wrap">
                    <img src="" alt="" />
                </div>
                <button>
                Сделать главной
                <img src={Trash} alt="" />
                </button>
            </div>
            <div className="account__body-block-company-section-photo-block-item">
                <div className="account__body-block-company-section-photo-block-item-wrap">
                    <img src="" alt="" />
                </div>
                <button>
                Сделать главной
                <img src={Trash} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}
