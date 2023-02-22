import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoHeader, iconFacebook, iconApp } from '../../assets/img'
import { path } from '../../utils'

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
                <div className='item'>
                    <NavLink to={path.HOME}>
                        Trang chủ
                    </NavLink>
                </div>
                <div className='item'>
                    <NavLink to={path.MOVIES}>
                        Phim
                    </NavLink>
                </div>
                <div className='item'>
                    <NavLink to={path.CINEMAS}>
                        Rạp chiếu phim
                    </NavLink>
                </div>
                <div className='item'>
                    <NavLink to={path.INTRO}>
                        Giới thiệu
                    </NavLink>
                </div>
                <div className='item'>
                    <NavLink to={path.CONTACT}>
                        Liên hệ
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
