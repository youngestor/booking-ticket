import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoHeader } from '../../assets/img'
import { path } from '../../utils'
import { processLogout } from '../../redux/actions'

function Header({ processLogout, isLoggedIn, userInfo }) {
    const [user, setUser] = useState(false)

    return (
        <div className='header'>
            <div className='header-top'>
                <div className='top-container'>
                    <div className='item-left'>
                        <div className='left-item'>
                            <Link target="_blank" to='https://www.facebook.com/youngestor'>
                                <i className="fa-brands fa-square-facebook"></i>
                                Facebook
                            </Link>
                        </div>
                        <div className='left-item'>

                            <Link target="_blank" to='https://github.com/youngestor'>
                                <i className="fa-brands fa-square-github"></i>
                                GitHub
                            </Link>
                        </div>
                    </div>
                    <div className='item-right'>
                        {!isLoggedIn ?
                            <>
                                <div className='right-item'>
                                    <Link to='login'>
                                        Đăng nhập
                                    </Link>
                                </div>
                                <div className='right-item'>
                                    <Link to='register'>
                                        Đăng ký
                                    </Link>
                                </div>
                            </> :
                            <>
                                <div className='right-item'>
                                    <div onClick={() => setUser(!user)}>
                                        {userInfo && userInfo.fullname}
                                    </div>
                                    {user &&
                                        <div className='user-action'>
                                            {userInfo && userInfo.username === 'admin' &&
                                                <Link to={path.ADMIN} className='item'>Quản lý</Link>
                                            }
                                            <div className='item'>Vỏ hàng</div>
                                        </div>
                                    }
                                </div>
                                <div className='right-item'>
                                    <div className='log-out' onClick={() => processLogout()}>
                                        Đăng xuất
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className='header-logo'>
                <Link to={path.HOME}>
                    <img src={logoHeader} alt='' />
                </Link>
            </div>
            <div className='header-main'>
                <div className='item'>
                    <NavLink to={path.HOME}>
                        Trang chủ
                    </NavLink>
                </div>
                <div className='item'>
                    <NavLink to={path.SCHEDULES}>
                        Mua vé
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
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo
})

const mapActionsToProps = {
    processLogout
}

export default connect(mapStateToProps, mapActionsToProps)(Header)
