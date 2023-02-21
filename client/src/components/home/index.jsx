import React, { useEffect, useState } from 'react'
import Movies from '../movies'
import { listSlideImage } from '../../assets/img/slider'

export default function Home() {
    const [position, setPosition] = useState(3)

    const prevSlideImage = () => {
        position > 0 ? setPosition(position - 1)
            : setPosition(listSlideImage.length - 1)
    }
    const nextSlideImage = () => {
        position < listSlideImage.length - 1 ? setPosition(position + 1)
            : setPosition(0)
    }

    useEffect(() => {
        const interval = setInterval(updateSlideImage, 2000)
        return () => {
            clearInterval(interval);
        }
    })
    function updateSlideImage() {
        position < listSlideImage.length - 1 ? setPosition(position + 1)
            : setPosition(0)
    }

    return (
        <div className='home-wrapper'>
            <div className='home-title'>
                <span>
                    Phim hot tại rạp
                </span>
            </div>
            <div className='home-container'>
                <i onClick={() => prevSlideImage()} className="fa-solid fa-chevron-left"></i>
                <img src={listSlideImage[position]} alt='' />
                <i onClick={() => nextSlideImage()} className="fa-solid fa-chevron-right"></i>
            </div>
            <Movies />
        </div>
    )
}
