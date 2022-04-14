
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TYPE } from 'react-toastify/dist/utils'
import { list } from '../../api/category'


type Props = {}

type CATEGORY = {
    _id: string,
    name: string
}


const Header = (props: Props) => {

    const [category, setCategory] = useState<CATEGORY[]>([]);

    const handleGetCategory = async () => {
        const response = await list();
        setCategory(response.data);
    }

    useEffect(() => {
        handleGetCategory();
    }, []);

  return (
    <div >
         <div>
        <div className="header-top">
        <div className="hotline">
            <p>HOTLINE: 089.887.5522</p>
        </div>
        <div className="icon-1">
            <a href=""><i className="fab fa-facebook"></i></a>
            <a href=""><i className="fab fa-youtube"></i></a>
            <a href=""><i className="fab fa-instagram"></i></a>
        </div>
    </div>
    <div className="container">
        <header className="header">
            <div className="header-main">
                <div className="nav-menu">
                    <label htmlFor="nav_input" className="togen"><i className="fas fa-bars"></i></label>
                    <ul className="menu">
                        <li className="li"><a href="giay.html">Sản phẩm </a>
                            <ul className="sub-menu">
                                {
                                    category.map(category => (
                                        <li><a href="">{category.name}</a></li>
                                    ))
                                }
                                {/* <li><a href="">Iphone</a></li>
                                <li><a href="">Samsung</a></li>
                                <li><a href="">Oppo</a></li>
                                <li><a href="">Xiaomi</a></li> */}
                            </ul></li>
                        <li className="li"><Link to={'/contact'}>Liên hệ</Link></li>
                    </ul>
                </div>
                
               
                <div className="logo">
                    {/* <a href="index.html"> */}
                    <Link to={''}>
                        <img height={'60px'} src="https://hcmfpt.vn/vnt_upload/about/FPT_Telecom_logo.svg" alt="" />
                    </Link>
                </div>
                <div className="nav-icon">
                    <ul className="icon">
                        <li> <label htmlFor="nav_search"><i className="fas fa-search"></i></label></li>
                        <li><i className="fas fa-user"></i> 
                            <ul className="sub2-menu">
                                <li><Link to={'/signin'}>Đăng Nhập</Link></li>
                                <li><Link to={'/signup'}>Đăng Ký</Link></li>
                            </ul></li>
                        <li><a href="cart.html"><i className="fas fa-shopping-bag"></i></a>       </li>
                    </ul>                    
                </div>
               
            </div> 
        </header>
    </div>
    </div>
    </div>
  )
}

export default Header