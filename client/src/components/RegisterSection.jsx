import React from 'react'
import FormUser from '../components/FormUser'
import FormCompany from './FormCompany'
export default function RegisterSection() {

  const HandleUser = () => {
    document.querySelector('.user__reg').classList.remove('none')
    document.querySelector('.register__block-body').classList.add('none')
  }
  const HandleCompany = () => {
    document.querySelector('.company__reg').classList.remove('none')
    document.querySelector('.register__block-body').classList.add('none')
  }
  const HandleAuth = () => {
    document.querySelector('.user__auth').classList.remove('none')
    document.querySelector('.register__block-body').classList.add('none')
  }

  return (
    <div className='register__block sc-0'>
        <div className="register__block-body">
            <div className="register__block-body-buttons">
                <button onClick={HandleCompany}>
                Для рекламодателей
                </button>
                <button onClick={HandleUser}>
                Для гостей 
                </button>
            </div>
            <div className="register__block-body-text">
                <span>Внимание!</span>
                <p>Не зарегистрированным пользователям доступен только просмотр сайта. </p>
            </div>
        </div>
        <FormUser/>
        <FormCompany/>
    </div>
  )
}
