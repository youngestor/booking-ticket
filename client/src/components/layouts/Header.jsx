import React from 'react'
import { logoHeader, iconFacebook, iconApp } from '../../assets/img'

export default function Header() {
    return (
        <div className='header'>
            <div className='header-top'>
                <div className='top-container'>
                    <div className='item-left'>
                        <div className='left-item'>
                            <img src={iconApp} alt='' />
                            Lotte Cinema APP
                        </div>
                        <div className='left-item'>
                            <img src={iconFacebook} alt='' />
                            Lotte Cinema Facebook
                        </div>
                    </div>
                    <div className='item-right'>
                        <div className='right-item'>Đăng nhập</div>
                        <div className='right-item'>Thẻ thành viên</div>
                        <div className='right-item'>Hỗ trợ khách hàng</div>
                    </div>
                </div>
            </div>
            <div className='header-logo'>
                <img src={logoHeader} alt='' />
            </div>
            <div className='header-main'>
                <div className='item'>Shop quà tặng</div>
                <div className='item'>Mua vé</div>
                <div className='item'>Phim</div>
                <div className='item'>Rạp chiếu phim</div>
                <div className='item'>Khuyến mãi</div>
            </div>
        </div>
    )
}
