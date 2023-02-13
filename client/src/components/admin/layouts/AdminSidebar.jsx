import { useState } from "react";
import { NavLink } from 'react-router-dom'
import { path } from '../../../utils'

function AdminSidebar() {
    const [subItem, setSubItem] = useState(0)

    return (
        <div className='admin-sidebar'>
            <NavLink className="link" to={path.ADMIN}>
                <div className="item">
                    <div>
                        <i className="fa-solid fa-grip"></i>
                        Dashboard
                    </div>
                </div>
            </NavLink>
            <div onClick={() => {
                subItem === 1 ? setSubItem(0) : setSubItem(1)
            }} className="item">
                <div>
                    <i className="fa-regular fa-user"></i>
                    Accounts
                </div>
                <i className="fa-solid fa-angle-down"></i>
            </div>
            {subItem === 1 &&
                <div className="sub-item">
                    <NavLink className="link" to={path.CREATE_ACCOUNT}>
                        <div className="feature">
                            <i className="fa-regular fa-circle"></i>
                            Tạo tài khoản
                        </div>
                    </NavLink>
                    <NavLink className="link" to={path.READ_ACCOUNT}>
                        <div className="feature">
                            <i className="fa-regular fa-circle"></i>
                            Danh sách tài khoản
                        </div>
                    </NavLink>
                </div>
            }
            <div onClick={() => {
                subItem === 2 ? setSubItem(0) : setSubItem(2)
            }} className="item">
                <div>
                    <i className="fa-solid fa-film"></i>
                    Movies
                </div>
                <i className="fa-solid fa-angle-down"></i>
            </div>
            {subItem === 2 &&
                <div className="sub-item">
                    <NavLink className="link" to={path.CREATE_MOVIE}>
                        <div className="feature">
                            <i className="fa-regular fa-circle"></i>
                            Thêm phim mới
                        </div>
                    </NavLink>
                    <NavLink className="link" to={path.READ_MOVIE}>
                        <div className="feature">
                            <i className="fa-regular fa-circle"></i>
                            Danh sách phim
                        </div>
                    </NavLink>
                </div>
            }
        </div>
    );
}

export default AdminSidebar;