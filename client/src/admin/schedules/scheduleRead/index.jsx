import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../../utils'
import { apiScheduleRead, apiScheduleDelete } from '../../../services'

function ScheduleRead() {
    const [schedules, setSchedules] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiScheduleRead()
        const data = res.data.schedule
        setSchedules(data)
    }

    const deleteSchedule = async id => {
        if (window.confirm("Xóa vĩnh viễn?")) {
            await apiScheduleDelete(id)
            fetchData()
        }
    }

    return (
        <div className='admin-movie-read'>
            <div className='read-container'>
                <div className='title'>
                    Danh sách rạp chiếu
                </div>
                <div className='list-movies'>
                    {schedules && schedules.map(item =>
                        <div key={item._id} className='item'>
                            <div className='film'>
                                {item.movie.title}
                            </div>
                            <div className='film'>
                                {item.cinema.location}
                            </div>
                            <div className='film'>
                                {item.datetime}
                            </div>
                            <div className='film'>
                                {item.remaining}/{item.number}
                            </div>
                            <div className='feature'>
                                <Link to={`${path.ADMIN}/${path.UPDATE_SCHEDULE}`} state={item}>
                                    <i className="fa-solid fa-pen"></i>
                                </Link>
                                <i onClick={() => deleteSchedule(item._id)} className="fa-solid fa-trash"></i>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default ScheduleRead;