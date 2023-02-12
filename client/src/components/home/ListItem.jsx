import React, { useState, useEffect } from 'react'
import { URL } from '../../utils'
import axios from 'axios'

function ListItem() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`${URL.SERVER}/api/movie/read`)
            .then(res => {
                setMovies(res.data.movie)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="list-item">
            {movies && movies.map(item =>
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
                            {item.title}
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default ListItem;