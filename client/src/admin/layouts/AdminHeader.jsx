import { useState } from 'react';
import { logoAdminHeader, avatarUser } from '../../assets/img/admin'

function AdminHeader() {
    const [user, setUser] = useState(false)

    return (
        <div className='admin-header'>
            <div className="logo-header">
                <img src={logoAdminHeader} alt='' />
                <div>Dashboard</div>
            </div>
            <div className='user'>
                <div onClick={() => setUser(!user)} className='user-header'>
                    <img src={avatarUser} alt='' />
                    <div>K.Anderson</div>
                    <i className='fa-sharp fa-solid fa-caret-down'></i>
                </div>
                {user &&
                    <div className='user-action'>
                        <div className='name'>Kevin Anderson</div>
                        <div className='item'>
                            <i className="fa-regular fa-user"></i>
                            My Profile
                        </div>
                        <div className='item'>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            Sign Out
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default AdminHeader;