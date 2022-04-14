import React from 'react'
import { SubmitHandler, useForm} from 'react-hook-form';
import { ProductType } from '../types/product';
import { signin, signup } from '../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../utils/localStorage';

type FormInputs = {
    email: string,
    password: string | number
}

const Signin = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSumbit: SubmitHandler<FormInputs> = async (user) => {
        const { data } = await signin(user);
        if(data){
            toast.success("Đăng nhập thành công");
            authenticate(user, ()=>{
                if(user){
                        
                }
            })
            setTimeout(() => {
                navigate('/admin');
                localStorage.setItem("user",JSON.stringify(data))
            }, 1000)
        }
    }
  return (
    <div className='container'>
         <div style={{margin: '20px 0px 20px 0px', textAlign: 'center'}}>
                <h1>Đăng nhập</h1>
            </div>
        <form onSubmit={handleSubmit(onSumbit)} className="form-login">
            <div className="mb-3">
                <input type="email" className="ip-login" placeholder='Email' {...register('email', {required: true})}  />
            </div>
            <div className="mb-3">
                <input type="password" className="ip-login" placeholder='Password' {...register('password', {required: true})} />
            </div>
            <button className="bt-login">Đăng nhập</button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Signin