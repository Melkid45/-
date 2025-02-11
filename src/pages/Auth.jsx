import Footer from "../components/Footer";
import Head from "../components/Head";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from "axios";
const validationSchema = yup.object({
    email: yup.string().required('Missing email').email('Invalid email format'),
    password: yup.string().required('Missing password')
}).required()

export default function Auth() {
    const {register, handleSubmit , formState:{errors} , setError} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email : '',
            password : ''
        }
    })
    const onSubmit = date => {
        console.log('data', date)
        axios.post('http://users.bugred.ru/tasks/rest/doregister' , {user: date}).then(Response =>{
            console.log('succ' , Response)
        }).catch(err => {
            console.log('er' , err)
            if (err.Response.date.errors.email){
                setError('email' , {type: 'server' , message : err.Response.date.errors.email[0]})
            }
            if (err.Response.date.errors.password){
                setError('password' , {type: 'server' , message : err.Response.date.errors.password[0]})
            }
        })
    }
    return (
        <>
        <Head/>
        <section className="auth m-auto w-72 my-28">
            <div className="flex flex-col items-center">
                <img src={RayLogo} alt="" />
                <span className="text-2xl font-semibold mt-10">Log in to Raycast</span>
                <div className="flex items-center w-full justify-between mt-10">
                    <button className="border border-whiteButton flex items-center justify-center bg-whiteButton rounded-lg px-8 py-3">
                        <img src={Apple} alt="" />
                    </button>
                    <button className="border border-whiteButton flex items-center justify-center bg-whiteButton rounded-lg px-8 py-3">
                        <img src={Git} alt="" />
                    </button>
                    <button className="border border-whiteButton flex items-center justify-center bg-whiteButton rounded-lg px-8 py-3">
                        <img src={Google} alt="" />
                    </button>
                </div>
                <span className="text-base opacity-40 my-4">or</span>
                <form className="min-w-full" onSubmit={handleSubmit(onSubmit)}>
                    <input autoComplete="off" {...register('email')} className="border border-whiteButton min-w-full px-4 py-3 bg-whiteButton rounded-lg placeholder:whiteTwenty" type="email" placeholder="Email address"/>
                    {errors.email && (
                        <span className="text-errorValid text-base my-2 text-center min-w-full flex">{errors.email.message}</span>
                    )}
                    <input {...register('password')}  className="my-3.5 border border-whiteButton min-w-full px-4 py-3 bg-whiteButton rounded-lg placeholder:whiteTwenty" type="password" placeholder="Password (optional)"/>
                    {errors.password && (
                        <span className="text-errorValid mb-2 text-base  text-center min-w-full flex">{errors.password.message}</span>
                    )}
                    <button type="submit" className=" rounded-lg min-w-full bg-white h-11 flex items-center justify-center text-black text-base font-medium">Send Magic Link</button>
                    <button  className="min-w-full mt-9 rounded-lg h-11 border border-whiteButton text-base font-medium">Don’t have an account? Sign up</button>
                </form>
            </div>
        </section>
        <Footer/>
        </>
        
    )
}
