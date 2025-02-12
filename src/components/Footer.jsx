import Icons18 from '../assets/icons/18+.svg'
import Chat from '../assets/icons/footer__chat.svg'
import Lotos from '../assets/icons/lotoc.svg'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__body-wrap">
          <div className="footer__body-left">
            <img className='desk' src={Icons18} alt="" />
            <div className="footer__body-left-info">
              <span>ДАННЫЙ САЙТ ПРЕДНАЗНАЧЕН ДЛЯ ОБЩЕНИЯ И ПОИСКА ЛЮДЕЙ ПО ИНТЕРЕСАМ, <br />
И ТОЛЬКО ДЛЯ ЛИЧ ДОСТИГШИХ СОВЕРШЕННОЛЕТИЯ! </span>
              <p>Администрация сайта не размещает анкеты и ответственности за их содержание не несет!</p>
            </div>
          </div>
          <div className="footer__body-right">
            <div className="footer__body-right-chat">
              <div className="footer__body-right-chat-wrap">
                <img src={Chat} alt="" />
                <span>ЧАТ</span>
              </div>
              <a href="">
                Техподдержка
              </a>
            </div>
            <a href="" className='footer__body-right-array'>
              Архив анкет
            </a>
          </div>
          </div>
          <div className="footer__body-name">
            <img src={Lotos} alt="" />
            www.eskortplus.one
          </div>
        </div>
      </div>
    </footer>
  )
}
