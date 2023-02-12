import { useState } from "react";
import { Link } from 'react-router-dom'
import { path } from '../../../utils'

function AdminSidebar() {
    const [subItem, setSubItem] = useState(0)

    return (
        <div className='admin-sidebar'>
            <Link className="link" to={path.ADMIN}>
                <div className="item">
                    <div>
                        <i className="fa-solid fa-grip"></i>
                        Dashboard
                    </div>
                </div>
            </Link>
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
                    <Link className="link" to={path.CREATE_ACCOUNT}>
                        <div className="feature">
                            <i className="fa-regular fa-circle"></i>
                            Tạo tài khoản
                        </div>
                    </Link>
                    <Link className="link" to={path.READ_ACCOUNT}>
                        <div className="feature">
                            <i className="fa-regular fa-circle"></i>
                            Danh sách tài khoản
                        </div>
                    </Link>
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
                    <Link className="link" to={path.CREATE_MOVIE}>
                        <div className="feature">
                            <i className="fa-regular fa-circle"></i>
                            Thêm phim mới
                        </div>
                    </Link>
                    <Link className="link" to={path.READ_MOVIE}>
                        <div className="feature">
                            <i className="fa-regular fa-circle"></i>
                            Danh sách phim
                        </div>
                    </Link>
                </div>
            }
        </div>
    );
}

export default AdminSidebar;