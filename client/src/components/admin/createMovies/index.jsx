import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { URL } from '../../../utils/constants'

function CreateMovies() {
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data, e) => {
        const formData = new FormData()
        formData.append('file', data.file[0])
        formData.append('title', data.title)


        axios.post(`${URL.SERVER}/api/movie/create`, formData)
            .then(res => {
                console.log(res)
                alert('Success')
            })
            .catch(error => {
                console.log(error)
            })
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-create-movie'>
            <div className='form-container'>
                <div className='title'>
                    Create Movies
                </div>
                <div className='form-control'>
                    <span>Title</span>
                    <input {...register('title', { required: true })} type='text' />
                </div>
                <div className='form-control'>
                    <span>Image</span>
                    <input {...register('file', { required: true })} type='file' />
                </div>
                <button type='submit'>
                    Create
                </button>
            </div>
        </form>
    );
}

export default CreateMovies;