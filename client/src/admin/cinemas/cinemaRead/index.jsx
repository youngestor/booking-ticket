import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { URL, path } from '../../../utils'
import { apiCinemaRead, apiCinemaDelete } from '../../../services'

function CinemaRead() {
    const [cinemas, setCinemas] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let res = await apiCinemaRead()
        setCinemas(res.data.cinema)
    }

    const deleteMovie = async id => {
        await apiCinemaDelete(id)
        alert('Delete success')
        fetchData()
    }

    return (
        <div className='admin-movie-read'>
            <div className='read-container'>
                <div className='title'>
                    Danh sách rạp chiếu
                </div>
                <div className='list-movies'>
                    {cinemas && cinemas.map(item =>
                        <div key={item._id} className='item'>
                            <div className='film'>
                                <img src={`${URL.SERVER}/${item.image}`} alt="" />
                                {item.name}
                            </div>
                            <div className='feature'>
                                <Link to={`${path.ADMIN}/${path.UPDATE_CINEMA}`} state={item}>
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

export default CinemaRead;