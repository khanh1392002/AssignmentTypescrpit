
import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { list } from '../../api/product'


type Props = {}
type PRODUCT = {
    _id: string | number,
    name: string,
    price: number,
    desc: string,
    img: string
}

const Main = (props: Props) => {
    const [product, setProduct] = useState<PRODUCT[]>([]);

    const handleGetProduct = async () => {
        const resposne = await list();
        setProduct(resposne.data);
    };

    useEffect(()=> {
        handleGetProduct();
    }, []);

  return (
    <div>
       <div className="products">
            <div className="row">
                    {
                        product.map(product => (
                            <div className="col">
                               <Link to={`/products/${product._id}`}>
                                    <img src={product.img} alt="" />
                                </Link>                    
                                    <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                            
                        ))
                    }
                       
        
              </div>  
        </div>
    </div>    
  )
}

export default Main