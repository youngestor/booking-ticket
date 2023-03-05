import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { apiScheduleRead } from '../../services'

function Schedules() {
    const [schedules, setSchedules] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiScheduleRead()
        const data = res.data.schedule
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

export default Schedules;