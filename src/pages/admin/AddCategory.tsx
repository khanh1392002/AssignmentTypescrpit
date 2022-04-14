import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { add } from "../../api/category";


export type CATEGORY = {
    name: string
}

export function FormAddCt (){
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: ''
        }
    })

    const handleSubmitForm = async (data: CATEGORY) => {
        const response = await add(data);
        if(response.status === 200){
            navigate('/admin/category')
        }
    }


    const onSubmit: SubmitHandler<CATEGORY> = (data) => {
        const submitData = {
            ...data
        }
        return handleSubmitForm(data);
    }

    return(
        <div className="container">
            <form action="" onSubmit={handleSubmit(onSubmit)} className="form-login">
                <div>
                    <input type="text" placeholder="Name" {...register('name')} className="ip-login"/>    
                </div> 
                <button className="btn btn-info">
                    Add
                </button>
                <Link to={'/admin/category'}>
                <button className="btn btn-dark">Back</button>
            </Link>
            </form>
            
        </div>
    )
}