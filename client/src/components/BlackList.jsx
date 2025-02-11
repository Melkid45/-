import React from 'react'
import Comments from '../components/Comments'
export default function BlackList() {

    const OpenCLient = () => {
        document.querySelector('.account__body-block-black').classList.add('none')
        document.querySelector('.account__body-block-black-client').classList.remove('none')
    }

  return (
    <>
    <div className='account__body-block-black none'>
        <h1>
        Черный список клиентов: 
        </h1>
        <p className='desc'>
        Если у Вас есть подозрительный номер, то обязательно добавьте его в нашу базу. Помогайте друг другу. 
        Ваша безопасность в ваших руках. 
        </p>
        <div className="account__body-block-black-imp">
            <p>Примечание:</p>
            <span>Уважаемый рекламодатель, перед занесением клиента в черный список, сначала проверяйте его данные на наличие в базе. </span>
        </div>
        <form className='account__body-block-black-form' action="">
            <div className="account__body-block-black-form-wrap">
                <span>Телефон: </span>
                <input type="tel" />
            </div>
            <div className="account__body-block-black-form-wrap">
                <span>Адрес: </span>
                <input type="text" />
            </div>
            <button>ИСКАТЬ</button>
            <button>ДОБАВИТЬ</button>
        </form>
        <div className="account__body-block-black-items">
            <div className="account__body-block-black-items-item">
                <div>
                    <span>Имя клиента</span>
                    <p>Артур</p>
                    <button className='comm'>
                        Комментарии (0)
                    </button>
                </div>
                <div>
                    <span>Телефон клиента</span>
                    <p>8(909)752 32 45</p>
                </div>
                <div>
                    <span>Адрес клиента</span>
                    <div className='wrap'>
                        <p>ул. Муравьева-Амурского д.45 подъез..</p>
                        <button onClick={OpenCLient}>
                            ПОДРОБНО
                        </button>
                    </div>
                </div>
            </div>
            <div className="account__body-block-black-items-item">
                <div>
                    <span>Имя клиента</span>
                    <p>Артур</p>
                    <button className='comm'>
                        Комментарии (0)
                    </button>
                </div>
                <div>
                    <span>Телефон клиента</span>
                    <p>8(909)752 32 45</p>
                </div>
                <div>
                    <span>Адрес клиента</span>
                    <div className='wrap'>
                        <p>ул. Муравьева-Амурского д.45 подъез..</p>
                        <button onClick={OpenCLient}>
                            ПОДРОБНО
                        </button>
                    </div>
                </div>
            </div>
            <div className="account__body-block-black-items-item">
                <div>
                    <span>Имя клиента</span>
                    <p>Артур</p>
                    <button className='comm'>
                        Комментарии (0)
                    </button>
                </div>
                <div>
                    <span>Телефон клиента</span>
                    <p>8(909)752 32 45</p>
                </div>
                <div>
                    <span>Адрес клиента</span>
                    <div className='wrap'>
                        <p>ул. Муравьева-Амурского д.45 подъез..</p>
                        <button onClick={OpenCLient}>
                            ПОДРОБНО
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="account__body-block-black-client none">
        <h2>Добавить клиента в черный список</h2>
        <ul>
            <li>Добавил рекламодатель: (Имя) </li>
            <li>Время добавления:    12 марта   2022 г.   14:02</li>
        </ul>
        <p>Информация о клиенте.</p>
        <ul>
            <li>
                <span>Имя:</span>
            </li>
            <li>
                <span>Адрес:</span>
            </li>
            <li>
                <span>Телефон:</span>
            </li>
        </ul>
        <p>Причина занесения в базу</p>
        <div className="account__body-block-black-client-wrap">
            <textarea></textarea>
            <button>
            Оставить комментарий
            </button>
        </div>
        <Comments/>
    </div>
    </>
  )
}
