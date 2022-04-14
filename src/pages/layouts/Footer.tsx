
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <div className="footer">
        <div className="row1">
                <div className="col1">
                    <ul className="menu-1">
                        <h4 className="title-1">CỘNG ĐỒNG CỦA CHÚNG TÔI</h4>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Pinterest</a></li>
                        <li><a href="">Youtube</a></li>
                    </ul>
                </div>
                <div className="col1">
                    <ul className="menu-1">
                        <h4 className="title-1">DỊCH VỤ</h4>
                        <li><a href="">Dịch vụ ký gửi</a></li>
                        <li><a href="">Dịch vụ chăm sóc, bảo hành điện thoại</a></li>
                        <li><a href="">Tạp chí</a></li>
                        <li><a href="">Chương trình Khách Hàng Thân Thiết</a></li>
                    </ul>
                </div>
                <div className="col1">               
                    <ul className="menu-1">
                        <h4 className="title-1">HỖ TRỢ KHÁCH HÀNG</h4>
                        <li><a href="">Chính sách đổi trả</a></li>
                        <li><a href="">Chính sách bảo hành</a></li>
                        <li><a href="">Chính sách vận chuyển</a></li>
                        <li><a href="">Phương thức thanh toán</a></li>
                        <li><a href="">Kiểm tra tình trạng đơn hàng</a></li>
                    </ul>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Footer