import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { URL, path } from '../../../utils'
import { apiMovieRead, apiMovieDelete } from '../../../services'

function MovieRead() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let res = await apiMovieRead()
        setMovies(res.data.movie)
    }

    const deleteMovie = async id => {
        await apiMovieDelete(id)
        alert('Delete success')
        fetchData()
    }

    return (
        <div className='admin-movie-read'>
            <div className='read-container'>
                <div className='title'>
                    Danh sách phim
                </div>
                <div className='list-movies'>
                    {movies && movies.map(item =>
                        <div key={item._id} className='item'>
                            <div className='film'>
                                <img src={`${URL.SERVER}/${item.image}`} alt="" />
                            </div>
                            <div className='film'>
                                {item.title}
                            </div>
                            <div className='feature'>
                                <Link to={`${path.ADMIN}/${path.UPDATE_MOVIE}`} state={item}>
                                    <i className="fa-solid fa-pen"></i>
                                </Link>
                                <i onClick={() => deleteMovie(item._id)} className="fa-solid fa-trash"></i>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieRead;