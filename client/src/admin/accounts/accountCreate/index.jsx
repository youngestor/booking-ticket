import React from 'react'
import { useForm } from 'react-hook-form'
import { apiAccountCreate } from '../../../services'

function AccountCreate() {
    const { register, handleSubmit, getValues } = useForm()

    const onSubmit = async (data, e) => {
        await apiAccountCreate(data)
        alert('Create success')
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='admin-create-movie'>
            <div className='create-container'>
                <div className='title'>
                    Thêm tài khoản
                </div>
                <div className='form-control'>
                    <span>Tên đầy đủ</span>
                    <input {...register('fullname', { required: true })} type='text' />
                </div>
                <div className='form-control'>
                    <span>Tài khoản</span>
                    <input {...register('username', { required: true })} type='text' />
                </div>
                <div className='form-control'>
                    <span>Mật khẩu</span>
                    <input {...register('password', { required: true })} type='text' />
                </div>
                <div className='form-control'>
                    <span>Nhập lại mật khẩu</span>
                    <input type='text' {...register("cpassword", { validate: value => value === getValues("password") })} />
                </div>
                <button type='submit'>
                    Thêm
                </button>
            </div>
        </form>
    );
}

export default AccountCreate;