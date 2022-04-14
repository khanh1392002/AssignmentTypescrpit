import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../../api/product';
import { ProductManagerProps } from './ProductManager';



function ProductDetailAD(){
  const { id } = useParams();
  const [product, setProduct] = useState<ProductManagerProps[]>([]);
  const handleGetProduct = async () => {
    const response = await read(id);
    setProduct(response.data);
  }

  useEffect(() => {
    handleGetProduct();
  }, [id]);
  return (
    <div>
      <div className="products">
            <div className="row-pr">
                <div className="image-pr">
                    <div className="image-right">
                        <div className="right-pr">
                            <img src={product?.img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="cart">
                    <div className="top">
                        <h3>{product?.name}</h3>
                        <span>{product?.price}</span> <br />
                        <span style={{color: 'red'}}>{product?.status? 'Còn hàng' : 'Hết hàng'}</span>
                    </div>                                   
                    <div className="botbot">
                        <a href="">Thêm vào giỏ hàng</a>
                    </div>
                </div>
                <div className="div">
                    <div className="information" id="infor">
                        <p>{product.desc}</p>
                    </div>
               </div>
            </div>
       </div>
    </div>   
  )
}

export default ProductDetailAD