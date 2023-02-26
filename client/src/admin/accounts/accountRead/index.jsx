import React, { useState, useEffect } from 'react'
import { apiAccountRead } from '../../../services'

function AccountRead() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let res = await apiAccountRead()
        setUsers(res.data.user)
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
                                {item.username}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default AccountRead;