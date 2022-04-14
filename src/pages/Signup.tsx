import React from 'react';
import { SubmitHandler, useForm} from 'react-hook-form';
import { signup } from '../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type USER = {
    name: string,
    email: string,
    password: string | number
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<USER>();
    const navigate = useNavigate();

    const onSumbit: SubmitHandler<USER> = async (user) => {

        const { data } = await signup(user);
        if(data){
            toast.success("Đăng ký thành công");
            setTimeout(() => {
                navigate('/signin')
            }, 1000)
        }
    }
  return (
    <div className='container'>
         <div style={{margin: '20px 0px 20px 0px', textAlign: 'center'}}>
                <h1>Đăng ký</h1>
            </div>
        <form onSubmit={handleSubmit(onSumbit)}>
            <div className="mb-3">
                <input type="text" className="ip-login" placeholder='Name' {...register('name')} />
            </div>
            <div className="mb-3">
                <input type="email" className="ip-login" placeholder='Email'  {...register('email')} />
            </div>
            <div className="mb-3">
                <input type="password" className="ip-login" placeholder='Password'  {...register('password')} />
            </div>
            <button className="bt-login">Đăng ký</button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Signup