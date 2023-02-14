import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm, } from 'react-hook-form'
import { apiMovieUpdate } from '../../../services'
import { path } from '../../../utils'

function MovieUpdate() {
    const { register, handleSubmit } = useForm()

    const location = useLocation()
    const movie = location.state

    let navigate = useNavigate()

    const onSubmit = async (data, e) => {
        const formData = new FormData()
        formData.append('file', data.file[0])
        formData.append('title', data.title)
        formData.append('_id', movie._id)
        await apiMovieUpdate(formData)
        alert('Success')
        return navigate(`${path.ADMIN}/${path.READ_MOVIE}`)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='admin-create-movie'>
            <div className='create-container'>
                <div className='title'>
                    Sửa phim
                </div>
                <div className='form-control'>
                    <span>Tiêu đề</span>
                    <input defaultValue={movie.title} {...register('title', { required: true })} type='text' />
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

export default MovieUpdate;