import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { apiCinemaRead, apiMovieRead, apiScheduleUpdate } from '../../../services'
import { path } from '../../../utils'

function ScheduleUpdate() {
    const { register, handleSubmit } = useForm()
    const [cinemas, setCinemas] = useState([])
    const [movies, setMovies] = useState([])

    const location = useLocation()
    const schedule = location.state

    let navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const resCinemas = await apiCinemaRead()
        const resMovies = await apiMovieRead()
        setCinemas(resCinemas.data.cinema)
        setMovies(resMovies.data.movie)
    }

    const onSubmit = async data => {
        data._id = schedule._id
        await apiScheduleUpdate(data)
        alert('Update success')
        return navigate(`${path.ADMIN}/${path.READ_SCHEDULE}`)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='admin-create-movie'>
            <div className='create-container'>
                <div className='title'>
                    Sửa lịch chiếu
                </div>
                <div className='form-control'>
                    <span>Tên phim</span>
                    <select  {...register('movie.title', { required: true })}>
                        {movies && movies.map(item =>
                            <option key={item._id} value={item.title}>
                                {item.title}
                            </option>
                        )}
                    </select>
                    <select {...register('movie.image', { required: true })}>
                        {movies && movies.map(item =>
                            <option key={item._id} value={item.image}>
                                {item.title}
                            </option>
                        )}
                    </select>
                </div>
                <div className='form-control'>
                    <span>Vị trí</span>
                    <select {...register('cinema.location', { required: true })}>
                        {cinemas && cinemas.map(item =>
                            <option key={item._id} value={item.location} >
                                {item.location}
                            </option>
                        )}
                    </select>
                    <select {...register('cinema.image', { required: true })}>
                        {cinemas && cinemas.map(item =>
                            <option key={item._id} value={item.image} >
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
                    <input defaultValue='100' {...register('number', { required: true })} type='number' />
                </div>
                <button type='submit'>
                    Sửa
                </button>
            </div>
        </form>
    );
}

export default ScheduleUpdate;