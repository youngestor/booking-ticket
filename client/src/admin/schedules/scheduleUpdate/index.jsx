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
        data.movie = JSON.parse(data.movie)
        data.cinema = JSON.parse(data.cinema)
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
                    <select {...register('movie', { required: true })}>
                        {movies && movies.map(item =>
                            <option selected={schedule.movie.title === item.title ? true : false}
                                key={item._id} value={JSON.stringify(item)} >
                                {item.title}
                            </option>
                        )}
                    </select>
                </div>
                <div className='form-control'>
                    <span>Vị trí</span>
                    <select {...register('cinema', { required: true })}>
                        {cinemas && cinemas.map(item =>
                            <option selected={schedule.cinema.location === item.location ? true : false}
                                key={item._id} value={JSON.stringify(item)} >
                                {item.location}
                            </option>
                        )}
                    </select>
                </div>
                <div className='form-control'>
                    <span>Lịch chiếu</span>
                    <input defaultValue={schedule.datetime} {...register('datetime', { required: true })} type='datetime-local' />
                </div>
                <div className='form-control'>
                    <span>Số lượng</span>
                    <input defaultValue={schedule.number} {...register('number', { required: true })} type='number' />
                </div>
                <button type='submit'>
                    Sửa
                </button>
            </div>
        </form >
    );
}

export default ScheduleUpdate;