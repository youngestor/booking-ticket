import { useState } from 'react';
import { logoAdminHeader } from '../../assets/img/admin'
import { connect } from 'react-redux'
import { processLogout } from '../../redux/actions'

function AdminHeader({ processLogout, userInfo }) {
    const [user, setUser] = useState(false)

    return (
        <div className='admin-header'>
            <div className="logo-header">
                <img src={logoAdminHeader} alt='' />
                <div>Dashboard</div>
            </div>
            <div className='user'>
                <div onClick={() => setUser(!user)} className='user-header'>
                    <div>{userInfo && userInfo.fullname}</div>
                    <i className='fa-sharp fa-solid fa-caret-down'></i>
                </div>
                {user &&
                    <div className='user-action'>
                        <div className='name'>{userInfo && userInfo.username}</div>
                        <div className='item' onClick={() => processLogout()}>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            Sign Out
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}


const mapStateToProps = state => ({
    userInfo: state.user.userInfo
})

const mapActionsToProps = {
    processLogout
}

export default connect(mapStateToProps, mapActionsToProps)(AdminHeader)
