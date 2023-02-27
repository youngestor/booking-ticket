import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiAccountRead, apiAccountDelete } from '../../../services'
import { path } from '../../../utils'

function AccountRead() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let res = await apiAccountRead()
        setUsers(res.data.user)
    }

    const deleteAccount = async id => {
        await apiAccountDelete(id)
        alert('Delete success')
        fetchData()
    }

    return (
        <div className='admin-movie-read'>
            <div className='read-container'>
                <div className='title'>
                    Danh sách Tài khoản
                </div>
                <div className='list-movies'>
                    {users && users.map(item =>
                        <div key={item._id} className='item'>
                            <div className='film'>
                                {item.fullname}
                            </div>
                            <div className='film'>
                                {item.username}
                            </div>
                            <div className='feature'>
                                <Link to={`${path.ADMIN}/${path.UPDATE_ACCOUNT}`} state={item}>
                                    <i className="fa-solid fa-pen"></i>
                                </Link>
                                <i onClick={() => deleteAccount(item._id)} className="fa-solid fa-trash"></i>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default AccountRead;