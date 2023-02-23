import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm, } from 'react-hook-form'
import { apiCinemaUpdate } from '../../../services'
import { path } from '../../../utils'

function CinemaUpdate() {
    const { register, handleSubmit } = useForm()

    const location = useLocation()
    const cinema = location.state

    let navigate = useNavigate()

    const onSubmit = async (data, e) => {
        const formData = new FormData()
        formData.append('file', data.file[0])
        formData.append('area', data.area)
        formData.append('name', data.name)
        formData.append('location', data.location)
        formData.append('_id', cinema._id)
        await apiCinemaUpdate(formData)
        alert('Update success')
        return navigate(`${path.ADMIN}/${path.READ_CINEMA}`)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='admin-create-movie'>
            <div className='create-container'>
                <div className='title'>
                    Sửa rạp
                </div>
                <div className='form-control'>
                    <span>Khu vực</span>
                    <input defaultValue={cinema.area} {...register('area', { required: true })} type='text' />
                </div>
                <div className='form-control'>
                    <span>Tên rạp</span>
                    <input defaultValue={cinema.name} {...register('name', { required: true })} type='text' />
                </div>
                <div className='form-control'>
                    <span>Vị trí</span>
                    <input defaultValue={cinema.location} {...register('location', { required: true })} type='text' />
                </div>
                <div className='form-control'>
                    <span>Hình ảnh</span>
                    <input {...register('file', { required: true })} type='file' />
                </div>
                <button type='submit'>
                    Sửa
                </button>
            </div>
        </form>
    );
}

export default CinemaUpdate;