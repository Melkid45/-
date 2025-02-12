import './assets/css/main.scss'
import {Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll';
import Head from './components/Head';
import Footer from './components/Footer';
import { publicRoutes } from './routes';
import Home from './pages/Home';
import Girl from './pages/Girl';
import Girls from './pages/Girls';
function App() {

  return (
    <>
    <Head/>
    
          <Routes>
            {publicRoutes.map(({path , Component}) => 
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Home />} />
        </Routes>
    <Footer/>
    </>
  )
}

export default App
