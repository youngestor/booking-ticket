import React from 'react'
import { logoFooter } from '../../assets/img'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src={logoFooter} alt='' />
                </div>
                <div className='footer-link'>
                    <div>Chính Sách Khách Hàng Thường Xuyên</div>
                    <div>Chính Sách Bảo Mật Thông Tin</div>
                    <div>Điều Khoản Sử Dụng</div>
                </div>
                <div className='company-info'>
                    <p>CÔNG TY TNHH LOTTE CINEMA VIỆT NAM</p>
                    <p>Giấy CNĐKDN: 0302575928, đăng ký lần đầu ngày 02/05/2008, đăng ký thay đổi lần thứ 10 ngày 30/03/2018, cấp bởi Sở KHĐT Thành phố Hồ Chí Minh</p>
                    <p>Địa chỉ: Tầng 3, TTTM Lotte, số 469 đường Nguyễn Hữu Thọ, Phường Tân Hưng, Quận 7, TPHCM, Việt Nam</p>
                    <p>Hotline: (028) 3775 2524</p>
                </div>
                <div className='coppy'>
                    COPYRIGHT © LOTTECINEMAVN.COM - ALL RIGHTS RESERVED.
                </div>
            </div>
        </div>
    )
}
