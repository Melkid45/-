import React from 'react'
import MenuUser from '../components/MenuUser'
import CardGirls from '../components/CardGirls'

export default function Favorite() {
  return (
    <section className='favorite'>
      <div className="container">
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
