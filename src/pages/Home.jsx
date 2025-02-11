import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import CardGirl from '../components/CardGirls'
import Tabs from '../components/Tabs'
export default function Home() {
  return (
    <>
    <Tabs/>
    <section className="home">
      <div className="container">
        <div className="home__body">
          <div className="home__body-category">
            <h1>Девушки со статусом TOP</h1>
          <Splide aria-label=""
          options={ {
            rewind: true,
            arrows: true,
            pagination: false
          } }>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
          </Splide>
          </div>
          <div className="home__body-category">
            <h2>Девушки со статусом VIP</h2>
          <Splide aria-label=""
          options={ {
            rewind: true,
            arrows: true,
            pagination: false
          } }>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
          </Splide>
          </div>
          <div className="home__body-category">
            <h3>Новые анкеты девушек</h3>
          <Splide aria-label=""
          options={ {
            rewind: true,
            arrows: true,
            pagination: false
          } }>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
          </Splide>
          </div>
          <div className="home__body-category">
            <h3>Самые комментрируемые</h3>
          <Splide aria-label=""
          options={ {
            rewind: true,
            arrows: true,
            pagination: false
          } }>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
              <SplideSlide>
                <CardGirl/>
              </SplideSlide>
          </Splide>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
