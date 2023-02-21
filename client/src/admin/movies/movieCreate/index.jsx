import React from 'react'
import { useForm } from 'react-hook-form'
import { apiMovieCreate } from '../../../services'

function MovieCreate() {
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data, e) => {
        const formData = new FormData()
        formData.append('file', data.file[0])
        formData.append('title', data.title)
        await apiMovieCreate(formData)
        alert('Create success')
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='admin-create-movie'>
            <div className='create-container'>
                <div className='title'>
                    Thêm phim mới
                </div>
                <div className='form-control'>
                    <span>Tiêu đề</span>
                    <input {...register('title', { required: true })} type='text' />
                </div>
                <div className='form-control'>
                    <span>Hình ảnh</span>
                    <input {...register('file', { required: true })} type='file' />
                </div>
                <button type='submit'>
                    Thêm
                </button>
            </div>
        </form>
    );
}

export default MovieCreate;