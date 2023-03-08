import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { path, URL } from '../../utils'
import { apiCinemaRead } from '../../services'

function Cinemas() {
    const [cinema, setCinemas] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiCinemaRead()
        setCinemas(res.data.cinema)
    }

    return (
        <div className="list-cinemas-wrapper">
            {cinema && cinema.map(item =>
                <div key={item._id} className="item-card">
                    <div className="item">
                        <img src={`${URL.SERVER}/${item.image}`} alt="" />
                        <div className="title">
                            {item.location}
                        </div>
                        <div className="feature">
                            <Link to={`/${path.CINEMAS}/${item._id}`} state={item._id}>Xem thêm</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Cinemas;