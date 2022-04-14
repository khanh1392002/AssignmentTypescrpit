import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {  list } from './api/product'
import About from './pages/About'
import Dashboard from './pages/admin/Dashboard'
import ProductManager from './pages/admin/ProductManager'
import HomePage from './pages/HomePage'
import AdminLayout from './pages/layouts/AdminLayout'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import ProductDetail from './pages/ProductDetail'
import { ProductType } from './types/product';
import { ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Header from './pages/layouts/Header'
import Footer from './pages/layouts/Footer'
import Contact from './pages/layouts/Contact'
import { FromAdd } from './pages/admin/FormAdd'
import CategoryManager from './pages/admin/CategoryManager'
import { FormAddCt } from './pages/admin/AddCategory'
import Index from './pages/admin'
import ProductDetailAD from './pages/admin/ProductdeailAd'


function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
      const getProducts = async () => {
          const { data } = await list();
          setProducts(data);
      }
      getProducts();
  }, []);

  return (
    <div>
      
      <Routes>
        
      <Route path='/' element={<WebsiteLayout />}>
          
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='products' >
              <Route path=':id' element={<ProductDetail />}/>
          </Route>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Index />} />
          <Route path='products'>
              <Route index  element={<ProductManager/>}/>
              <Route path='create' element={<FromAdd />}/>
              <Route path='edit/:id' element={<FromAdd />}/>
              <Route path=':id' element={<ProductDetailAD />}/>
          </Route>
          <Route path='category'>
              <Route index element={<CategoryManager/>}/>
              <Route path='create' element={<FormAddCt />}/>
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
      
    </div>
  )
}

export default App
