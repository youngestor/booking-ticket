import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import { apiScheduleSearchMovies } from '../../services'

function MoviesDetail() {
    const [schedules, setSchedules] = useState([])

    const location = useLocation()
    const _id = location.state

    useEffect(() => {
        fetchData(_id)
    }, [_id])

    const fetchData = async id => {
        const res = await apiScheduleSearchMovies(id)
        const data = res.data.schedules
        data.map(item => item.datetime
            = moment(item.datetime).format('MM/DD/YYYY h:mm A'))
        setSchedules(data)
    }

    return (
        <div className="list-schedules-wrapper">
            {schedules && schedules.map(item =>
                <div key={item._id} className="item-card">
                    <div className="item">
                        <div className="row">
                            Phim:
                            <h5>
                                {item.movie.title}
                            </h5>
                        </div>
                        <div className="row">
                            Rạp:
                            <h5>
                                {item.cinema.location}
                            </h5>
                        </div>
                        <div className="row">
                            Thời gian:
                            <h5>
                                {item.datetime}
                            </h5>
                        </div>
                        <div className="row">
                            Số vé:
                            <h5>
                                {item.remaining} / {item.number}
                            </h5>
                        </div>
                        <div className="feature">
                            <a href="/">Đặt vé</a>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default MoviesDetail;