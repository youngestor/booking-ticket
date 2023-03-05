import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { apiCinemaRead, apiMovieRead, apiScheduleCreate } from '../../../services'

function ScheduleCreate() {
    const { register, handleSubmit } = useForm()
    const [cinemas, setCinemas] = useState([])
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const resCinemas = await apiCinemaRead()
        const resMovies = await apiMovieRead()
        setCinemas(resCinemas.data.cinema)
        setMovies(resMovies.data.movie)
    }

    const onSubmit = async (data, e) => {
        data.movie = JSON.parse(data.movie)
        data.cinema = JSON.parse(data.cinema)
        await apiScheduleCreate(data)
        alert('Create success')
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='admin-create-movie'>
            <div className='create-container'>
                <div className='title'>
                    Thêm rạp chiếu
                </div>
                <div className='form-control'>
                    <span>Tên phim</span>
                    <select {...register('movie', { required: true })}>
                        {movies && movies.map(item =>
                            <option key={item._id} value={JSON.stringify(item)}>
                                {item.title}
                            </option>
                        )}
                    </select>
                </div>
                <div className='form-control'>
                    <span>Vị trí</span>
                    <select {...register('cinema', { required: true })}>
                        {cinemas && cinemas.map(item =>
                            <option key={item._id} value={JSON.stringify(item)} >
                                {item.location}
                            </option>
                        )}
                    </select>
                </div>
                <div className='form-control'>
                    <span>Lịch chiếu</span>
                    <input {...register('datetime', { required: true })} type='datetime-local' />
                </div>
                <div className='form-control'>
                    <span>Số lượng</span>
                    <input {...register('number', { required: true })} type='number' />
                </div>
                <button type='submit'>
                    Thêm
                </button>
            </div>
        </form >
    );
}

export default ScheduleCreate;
