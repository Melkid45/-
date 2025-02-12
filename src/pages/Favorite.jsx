import React from 'react'
import MenuUser from '../components/MenuUser'
import CardGirls from '../components/CardGirls'

export default function Favorite() {

  const OpenMenu = () => {
    document.querySelector('.account__body-block-navigation').classList.add('active')
  }

  return (
    <section className='favorite'>
      <div className="container">
      <span className="account__body-first">
            (Имя) Вы успешно авторизовались ан сайте.
            <button onClick={OpenMenu} className="mob">
              Открыть Меню
            </button>
          </span>
        <div className="favorite__body">
          <div className="favorite__body-list">
            <CardGirls/>
            <CardGirls/>
            <CardGirls/>
            <CardGirls/>
            <CardGirls/>
          </div>
          <MenuUser/>
        </div>
      </div>
    </section>
  )
}
