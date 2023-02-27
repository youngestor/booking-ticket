import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm, } from 'react-hook-form'
import { apiAccountUpdate } from '../../../services'
import { path } from '../../../utils'

function AccountUpdate() {
    const { register, handleSubmit } = useForm()

    const location = useLocation()
    const account = location.state

    const navigate = useNavigate()

    const onSubmit = async data => {
        data._id = account._id
        await apiAccountUpdate(data)
        alert('Update success')
        return navigate(`${path.ADMIN}/${path.READ_ACCOUNT}`)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='admin-create-movie'>
            <div className='create-container'>
                <div className='title'>
                    Sửa tài khoản
                </div>
                <div className='form-control'>
                    <span>Tên đầy đủ</span>
                    <input defaultValue={account.fullname} {...register('fullname', { required: true })} type='text' />
                </div>
                <div className='form-control'>
                    <span>Tài khoản</span>
                    <input defaultValue={account.username} {...register('username', { required: true })} type='text' />
                </div>
                <button type='submit'>
                    Sửa
                </button>
            </div>
        </form>
    );
}

export default AccountUpdate;