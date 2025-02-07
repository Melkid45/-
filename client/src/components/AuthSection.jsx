import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from "axios";
const validationSchema = yup.object({
    login: yup.string().required('Введите логин'),
    password: yup.string().required('Введите пароль'),
}).required()


export default function AuthSection() {

    const {register, handleSubmit , formState:{errors} , setError} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            login: '',
            password : '',
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
        })
    }


  return (
    <div className='form__user-wrap user__auth sc-0'>
<div className='form__user'>
        <span className="form__user-title">
        Авторизация:
        </span>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="form__user-main">
            <div className="form__user-main-info">
                <div className="form__user-main-info-item">
                    <p>Логин:</p>
                    <input {...register('login')} type="text" name="login" id="" />
                </div>
                {errors.login && (
                        <span className="text-errorValid text-base my-2 text-center min-w-full flex">{errors.login.message}</span>
                    )}
                <div className="form__user-main-info-item">
                    <p>Пароль:</p>
                    <input {...register('password')} type="text" name="password" id="" />
                </div>
                {errors.password && (
                        <span className="text-errorValid text-base my-2 text-center min-w-full flex">{errors.password.message}</span>
                    )}
            </div>
            <button type="submit">
                Войти
            </button>
        </form>
    </div>
    </div>
    
  )
}
