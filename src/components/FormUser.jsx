import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from "axios";
const validationSchema = yup.object({
    login: yup.string().required('Введите логин'),
    password: yup.string().required('Введите пароль'),
    passwordConfirmation: yup.string().required('Повторите пароль').oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
    name: yup.string().required('Введите Имя'),
    phone: yup.string().required('Введите телефон'),
    email: yup.string().required('Введите Email').email('Неправильный формат Email'),
}).required()

export default function FormUser() {

    const {register, handleSubmit , formState:{errors} , setError} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            login: '',
            password : '',
            passwordConfirmation: '',
            name: '',
            phone: '',
            email : '',
        }
    })
    const onSubmit = date => {
        console.log('data', date)
        axios.post('http://users.bugred.ru/tasks/rest/doregister' , {user: date}).then(Response =>{
            console.log('succ' , Response)
        }).catch(err => {
            console.log('er' , err)
            if (err.Response.date.errors.login){
                setError('login' , {type: 'server' , message : err.Response.date.errors.login[0]})
            }
            
            if (err.Response.date.errors.password){
                setError('password' , {type: 'server' , message : err.Response.date.errors.password[0]})
            }
            if (err.Response.date.errors.passwordConfirmation){
                setError('passwordConfirmation' , {type: 'server' , message : err.Response.date.errors.passwordConfirmation[0]})
            }
            if (err.Response.date.errors.name){
                setError('name' , {type: 'server' , message : err.Response.date.errors.name[0]})
            }
            if (err.Response.date.errors.phone){
                setError('phone' , {type: 'server' , message : err.Response.date.errors.phone[0]})
            }
            if (err.Response.date.errors.email){
                setError('email' , {type: 'server' , message : err.Response.date.errors.email[0]})
            }
        })
    }



  return (
    <div className='form__user user__reg none'>
        <span className="form__user-title">
        Регистрация:
        </span>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="form__user-main">
            <div className="form__user-main-info">
                <div className="form__user-main-info-item">
                    <p>Логин: <span>*</span></p>
                    <input {...register('login')} type="text" name="login" id="" />
                </div>
                {errors.login && (
                        <span className="text-errorValid text-base my-2 text-center min-w-full flex">{errors.login.message}</span>
                    )}
                <div className="form__user-main-info-item">
                    <p>Пароль:<span>*</span></p>
                    <input {...register('password')} type="text" name="password" id="" />
                </div>
                {errors.password && (
                        <span className="text-errorValid text-base my-2 text-center min-w-full flex">{errors.password.message}</span>
                    )}
                <div className="form__user-main-info-item">
                    <p>Повторить пароль:<span>*</span></p>
                    <input {...register('passwordConfirmation')} type="text" name="passwordConfirmation" id="" />
                </div>
                {errors.passwordConfirmation && (
                        <span className="text-errorValid text-base my-2 text-center min-w-full flex">{errors.passwordConfirmation.message}</span>
                    )}
                <div className="form__user-main-info-item">
                    <p>Имя:<span>*</span></p>
                    <input {...register('name')} type="text" name="name" id="" />
                </div>
                {errors.name && (
                        <span className="text-errorValid text-base my-2 text-center min-w-full flex">{errors.name.message}</span>
                    )}
            </div>
            <div className="form__user-main-info">
                <div className="form__user-main-info-item">
                    <p>Телефон: <span>*</span></p>
                    <input {...register('phone')} type="text" name="phone" id="" />
                </div>
                {errors.phone && (
                        <span className="text-errorValid text-base my-2 text-center min-w-full flex">{errors.phone.message}</span>
                    )}
                <p className='form__user-main-info-desc'>На него придет SMS с кодом подтверждения.</p>
                <div className="form__user-main-info-item">
                    <p>E-mail:<span>*</span></p>
                    <input {...register('email')} type="text" name="email" id="" />
                </div>
                {errors.email && (
                        <span className="text-errorValid text-base my-2 text-center min-w-full flex">{errors.email.message}</span>
                    )}
                <p className='form__user-main-info-desc'>Для востановления доступа,</p>
            </div>
            <button type="submit">
                ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
        </form>
    </div>
  )
}
