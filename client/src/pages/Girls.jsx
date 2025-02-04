import React from 'react'
import Search from '../assets/icons/search.svg'
import Tabs from '../components/Tabs'
import Filter from '../components/Filter'
import CardGirls from '../components/CardGirls'
export default function Girls() {
  return (
    <>
    <Tabs/>
    <section className='girls'>
      <div className="container">
        <div className="girls__body">
          <div className="girls__body-top">
            <h1>Ночные бабачки (город)</h1>
            <div className="girls__body-top-search">
              <input placeholder='ПОИСК' type="text" />
              <img src={Search} alt="" />
            </div>
          </div>
          <div className="girls__body-block">
            <div className="girls__body-block-list">
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
              <CardGirls/>
            </div>
            <Filter/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
