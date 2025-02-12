import React from 'react'
import Answer from '../assets/icons/answer.svg'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from "axios";
const validationSchema = yup.object({
    name: yup.string().required('Введите имя'),
    comment: yup.string().required('Оставьте комментарий')
}).required()
export default function Comments() {
    const {register, handleSubmit , formState:{errors} , setError} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name : '',
            comment : ''
        }
    })
    const onSubmit = date => {
        console.log('data', date)
        axios.post('http://users.bugred.ru/tasks/rest/doregister' , {user: date}).then(Response =>{
            console.log('succ' , Response)
        }).catch(err => {
            console.log('er' , err)
            if (err.Response.date.errors.name){
                setError('name' , {type: 'server' , message : err.Response.date.errors.name[0]})
            }
            if (err.Response.date.errors.comment){
                setError('comment' , {type: 'server' , message : err.Response.date.errors.comment[0]})
            }
        })
    }


  return (
    <div id='comm' className='comment'>
        <span className='comment__title'>
            Комментарии:
        </span>
        <div className="comment__block">
            <div className="comment__block-item">
                <div className="comment__block-item-info">
                    <span>Александр</span>
                    <p>Был в данном заведении , все очень понравилось. </p>
                </div>
                <span className='comment__block-item-date'>
                    23 февраля 2024  18:23
                </span>
            </div>
            <div className="comment__block-item answer">
                <img src={Answer} alt="" />
                <div className="comment__block-item-wrap">
                    <div className="comment__block-item-info">
                        <span>Администрация фирмы</span>
                        <p>Спасибо большое за отзыв.</p>
                    </div>
                    <span className='comment__block-item-date'>
                        23 февраля 2024  18:43
                    </span>
                </div>
            </div>
        </div>
        <div className="comment__main">
            <span className="comment__main-title">
            Добавить комментарий
            </span>
            <form onSubmit={handleSubmit(onSubmit)} action='' className="comment__main-form">
                <input {...register('name')} name='name' placeholder='Ваше имя' type="text" />
                {errors.name && (
                        <span className="text-errorValid mb-2 text-base  text-center min-w-full flex">{errors.name.message}</span>
                    )}
                <textarea {...register('comment')} name='comment' placeholder='Оставляйте отзыв только если пользовались данными услугами!'></textarea>
                {errors.comment && (
                        <span className="text-errorValid mb-2 text-base  text-center min-w-full flex">{errors.comment.message}</span>
                    )}
                <button>
                Оставить отзыв
                </button>
            </form>
        </div>
    </div>
  )
}
