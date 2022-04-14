import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams, Link} from "react-router-dom";
import { add, read, update } from "../../api/product";
import { TypeCategories } from "../../types/category";


export type PRODUCT = {
    // _id: number | string,
    name: string,
    price: number,
    desc: string,
    img: string,
    status: number

}

export function FromAdd (){
    const navigate = useNavigate();
    const {id} = useParams();
    const [imageBase64, setImageBase64] = useState<any>('');
    

    const [ category, setCategory] = useState<TypeCategories[]>([]);

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: {
            name: '',
            price: 0,
            desc: '',
            img: '',
            status: 0
        }
    })

    const handleSubmitForm = async (data: PRODUCT) => {

        const response = await add(data);
        if(response.status === 200){
            navigate('/admin/products')
        }
    }

    const handleGetProduct = async(id: string) => {
        const response = await read(id);
        if(response.status === 200){
            reset({
                ...response.data,
                status: `${response.data.status}`
            })
        }
        return null;
    }   

    const gtEventResult = (event: any) => {
        if(event && event.target && typeof event.target.result == 'string'){
            return event.target.result;
        }
        return '';
    }
    const handleUpdateProduct = async(  data: PRODUCT) => {
        const response = await update(id, data);
        if(response.status === 200){
             navigate('/admin/products')
         }
    }

    const onSubmit: SubmitHandler<PRODUCT> = (data) => {
        const submitData = {
            ...data,
            img: imageBase64,
            status: +data.status
        }
        if(id){
            return handleUpdateProduct(submitData);
        }
        return handleSubmitForm(submitData);
    }

    const handleChangeFile = (event: any) => {
        // const acceptImageType = ['image/png', 'image/jpg'];
        const file = event.target.files[0];
        if(!file){
            console.log("Không có file");
            return
        }else if(file.size > 500000){
            alert("File quá lớn")
            return
        }
        // else if(!acceptImageType.includes(file.type)){
        //     console.log("File không đúng định dạng");
        //     return
        // }

        const reader = new FileReader();
        reader.onload = (e) => {
            const image = new Image();
            if(e && e.target){
                image.src = gtEventResult(e);
                setImageBase64(gtEventResult(e));
            }
            
        }
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        if(id){
            handleGetProduct(id);
        }
    }, [id]);

    
    return(
        <div className="container">
            <form action="" onSubmit={handleSubmit(onSubmit)} className="form-login">
                <div>
                    <input type="text" placeholder="Name" {...register('name', {required: true})} className="ip-login"/>    
                </div>
                <div>
                    <input type="number" placeholder="Price"   {...register('price',{valueAsNumber:true})} className="ip-login"/>    
                </div>
                <div>
                    <input type="text" placeholder="Desc"   {...register('desc', {required: true})} className="ip-login"/>    
                </div>
                <div>
                    <input type="file" placeholder="Img"   onChange={(event) => handleChangeFile(event)}  className="ip-login"/>  
                    
                </div>
                <div>
                    <label htmlFor="">Status</label><br />
                    <input type="radio" value={0}  {...register('status')} />Hết hàng
                    <input type="radio" value={1}   {...register('status')} />Còn hàng
                </div>
                <img src={imageBase64} width={100} alt="" />  <br/>
                <button className="btn btn-info">
                    Add
                </button>
                <Link to={'/admin/products'}>
                <button className="btn btn-dark">Back</button>
            </Link>
            </form>
            
        </div>
    )
}
