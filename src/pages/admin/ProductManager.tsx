import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { list, remove } from '../../api/product';

export type ProductManagerProps = {
    _id: string | number,
    name: string,
    price: number,
    desc: string,
    img: string,
    category: object,
    status: number
}
function ProductManager (){

    const [product, setProduct] = useState<ProductManagerProps[]>([]);

    const getProducts = async () => {
        const response = await list();
        setProduct(response.data);
    }

    const handleRemove = async (_id: number | string) => {
        const response = await remove(_id);
        const confirm = window.confirm("Bạn có muốn xoá không");
        if(confirm){
            if(response.status === 200){
                getProducts();
            }
        }
    }

    useEffect(()=>{
        getProducts();
    }, []);

    return(
        <div className='container'>
            <div style={{margin: '20px 0px 20px 0px', textAlign: 'center'}}>
                <h1>Product</h1>
            </div>
            <div>
                <Link to={'create'}> <button className='btn btn-success' style={{margin: '0px 0px 25px 0px'}}>Add new</button> </Link>
            </div>
            <table className="table" style={{margin: '0px 20px 0px 20px'}}>
                    <thead>
                        <tr>
                            <td scope="col">ID</td>
                            <td scope="col">Name</td>
                            <td scope="col">Price</td>
                            <td scope="col"> Desc</td>
                            <td scope="col">Img</td>
                            <td scope="col">Status</td>
                            <td scope="col">Category</td>
                            <td scope="col">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product?.map((products, index) => (
                                <tr key={index}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{products.name}</td>
                                    <td>{products.price}</td>
                                    <td>{products.desc}</td>
                                    <td><img src={products.img} alt="" width={'60px'} /></td>
                                    <td>{products.status ? 'Còn hàng' : 'Hết hàng'}</td>
                                    <td>{products.category}</td>
                                    <td><button className="btn btn-info"> <Link to={`/products/${products._id}`}>Detail</Link> </button></td>
                                    <td><Link to={`edit/${products._id}`}><button className='btn btn-warning'>Edit</button></Link></td>
                                    <td> <button onClick={() => handleRemove(products._id)} className='btn btn-danger'>Delete</button> </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
            <Link to={'/admin'}><button className='btn btn-dark'> Back</button></Link> 
        </div>
    )
}

export default ProductManager