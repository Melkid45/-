import React from "react";

export default function RegisterTarif() {
  return (
    <div className="account__body-block-company-section-tarif">
      <div className="account__body-block-company-section-tarif-main">
        <div className="account__body-block-company-section-tarif-main-wrap">
          <span className="account__body-block-company-section-tarif-main-wrap-title">
            Апартаменты:
          </span>
          <div className="account__body-block-company-section-tarif-main-wrap-items">
            <div>
              <span>1 час -</span>
              <input type="text" />
            </div>
            <div>
              <span>2 часа -</span>
              <input type="text" />
            </div>
            <div>
              <span>Экспресс - </span>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="account__body-block-company-section-tarif-main-wrap">
          <span className="account__body-block-company-section-tarif-main-wrap-title">
            Выезд:
          </span>
          <div className="account__body-block-company-section-tarif-main-wrap-items">
            <div>
              <span>1 час -</span>
              <input type="text" />
            </div>
            <div>
              <span>2 часа -</span>
              <input type="text" />
            </div>
            <div>
              <span>Экспресс - </span>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="account__body-block-company-section-tarif-option">
        <span>Я выезжаю:</span>
        <label htmlFor="checkbox"  className="checkbox-label">
          <input type="checkbox" id="checkbox" className="checkbox" />
          <span className="checkbox-view"></span>
          на квартиру;
        </label>
        <label htmlFor="checkbox1" className="checkbox-label">
          <input type="checkbox" id="checkbox1" className="checkbox" />
          <span className="checkbox-view"></span>
          в гостиницу;
        </label>
        <label htmlFor="checkbox2" className="checkbox-label">
          <input type="checkbox" id="checkbox2" className="checkbox" />
          <span className="checkbox-view"></span>
          в сауну;
        </label>
        <label htmlFor="checkbox3" className="checkbox-label">
          <input type="checkbox" id="checkbox3" className="checkbox" />
          <span className="checkbox-view"></span>
          в офис;
        </label>
        <label htmlFor="checkbox4" className="checkbox-label">
          <input type="checkbox" id="checkbox4" className="checkbox" />
          <span className="checkbox-view"></span>
          в загродный дом.
        </label>
      </div>
      <div className="account__body-block-company-section-tarif-about">
        <span>Коротко о салоне:</span>
        <textarea placeholder="Описние себя и услуг которые вы предоставляете. Минимум 200 символов."></textarea>
      </div>
    </div>
  );
}
