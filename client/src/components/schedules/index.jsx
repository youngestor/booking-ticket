import React, { useState, useEffect } from 'react'
import { apiScheduleRead } from '../../services'

function Schedules() {
    const [schedules, setSchedules] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiScheduleRead()
        setSchedules(res.data.schedule)
    }

    return (
        <div className="list-movies-wrapper">
            {schedules && schedules.map(item =>
                <div key={item._id} className="item-card">
                    <div className="item">
                        <div className="title">
                            {item.movie.title}
                        </div>
                        <div className="title">
                            {item.cinema.location}
                        </div>
                        <div className="title">
                            {item.datetime}
                        </div>
                        <div className="title">
                            {item.number}
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Schedules;