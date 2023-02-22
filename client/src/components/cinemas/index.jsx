import React, { useState, useEffect } from 'react'
import { URL } from '../../utils'
import { apiCinemaRead } from '../../services'

function Cinemas() {
    const [cinema, setCinemas] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let res = await apiCinemaRead()
        setCinemas(res.data.cinema)
    }

    return (
        <div className="list-movies-wrapper">
            {cinema && cinema.map(item =>
                <div key={item._id} className="item-card">
                    <div className="item">
                        <div className="img">
                            <img src={`${URL.SERVER}/${item.image}`} alt="" />
                            <div className="coating">
                                <div className="feature">
                                    <a href="/">Đặt vé</a>
                                </div>
                                <div className="feature">
                                    <a href="/">Chi tiết</a>
                                </div>
                            </div>
                        </div>
                        <div className="title">
                            {item.name}
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Cinemas;