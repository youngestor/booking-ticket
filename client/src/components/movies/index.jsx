import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { path, URL } from '../../utils'
import { apiMovieRead } from '../../services'

function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiMovieRead()
        setMovies(res.data.movie)
    }

    return (
        <div className="list-movies-wrapper">
            {movies && movies.map(item =>
                <div key={item._id} className="item-card">
                    <div className="item">
                        <div className="img">
                            <img src={`${URL.SERVER}/${item.image}`} alt="" />
                            <div className="coating">
                                <div className="feature">
                                    <Link to={`/${path.MOVIES}/${item._id}`} state={item._id}>Xem thêm</Link>
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

export default Movies;