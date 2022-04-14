
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='container'> 
        <div className="bot">
            <h1>Liên hệ </h1>
        </div>
        <div className="row-lh">
            <div className="contact">
                <form action="" className="form-lh">
                    <div>
                        <input  type="text" placeholder="Tên của bạn" className="ip"/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className="ip"/>
                    </div>
                    <div>
                        <input type="number" placeholder="Số điện thoại" className='ip'/>
                    </div>
                    <div>
                        <textarea  name="" id="noidung"  placeholder="Nội dung" className="ip"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bt-login">Gửi</button>
                    </div>                   
                </form>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638558814037!2d105.74459841440749!3d21.038132792835356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1637376664219!5m2!1svi!2s"
                 width="600" height="450"  loading="lazy"></iframe>
                 
            </div>
        </div>
    </div>
    
  )
}

export default Contact