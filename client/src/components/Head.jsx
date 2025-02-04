import Logo from '../assets/images/logo__header.svg';
import AuthImg from '../assets/icons/auth.svg'
import HomeImg from '../assets/icons/home.svg'
import CartImg from '../assets/icons/card.svg'
import RegImg from '../assets/icons/reg.svg'

export default function Head() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <div className="header__body-top">
                        <a href="/">
                            <img src={Logo} alt="" />
                        </a>
                        <div className="header__body-top-btns">
                            <button>
                                <img src={RegImg} alt="" />
                                <span>Регистрация</span>
                            </button>
                            <button>
                                <img src={AuthImg} alt="" />
                                <span>Войти</span>
                            </button>
                        </div>
                    </div>
                    <div className="header__body-bot">
                        <a className='header__body-bot-icons' href="/">
                            <img src={HomeImg} alt="" />
                        </a>
                        <nav>
                            <ul>
                                <li>
                                    <a href="/girls">
                                        Девушки
                                    </a>
                                </li>
                                <li>
                                <a href="/guys">
                                        Парни
                                    </a>
                                </li>
                                    <li>
                                    <a href="/firma">
                                        Фирмы,салоны
                                    </a>
                                    </li>
                                    <li className='vip'>
                                    <a  href="">
                                        Vip
                                    </a>
                                    </li>
                                    <li className='top'>
                                    <a  href="">
                                        Top
                                    </a>
                                    </li>
                                    
                                    <li>
                                    <a href="">
                                        Баннеры
                                    </a>
                                    </li>
                                    
                                    <li>
                                    <a href="">
                                        Объявления
                                    </a>
                                    </li>
                                    
                                
                            </ul>
                        </nav>
                        <a className='header__body-bot-icons' href="/">
                            <img src={CartImg} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
