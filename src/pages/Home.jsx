import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import CardGirl from '../components/CardGirls'
import Search from '../assets/icons/search.svg'
import Tabs from '../components/Tabs'
import Filter from '../components/Filter'
import CardGirls from '../components/CardGirls'
export default function Home() {

  const OpenFilter = () => {
    document.querySelector('.filter').classList.add('active')
  }
  return (
    <>
    <Tabs/>
    <section className='girls'>
      <div className="container">
        <div className="girls__body">
          <div className="girls__body-top">
            <h1>Ночные бабачки (город)</h1>
            <div className="girls__body-top-wrap">
            <div className="girls__body-top-search">
              <input placeholder='ПОИСК' type="text" />
              <img src={Search} alt="" />
            </div>
            <button onClick={OpenFilter} className='open__filter mob'>
              Открыть Фильтр
            </button>
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
  );
}
