import './assets/css/main.scss'
import {Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll';
import Head from './components/Head';
import Footer from './components/Footer';
import { publicRoutes } from './routes';
import Home from './pages/Home';
function App() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      wrapper: window,
      content: document.documentElement,
      lerp: 0.1,
      duration: 3,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 2,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  },
  });

  return (
    <>
    <Head/>
    <BrowserRouter>
            <Routes>
            {publicRoutes.map(({path , Component}) => 
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
