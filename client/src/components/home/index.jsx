import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'

export default function Home() {
    const [position, setPosition] = useState(3)

    const listSlideImage = [
        'https://media.lottecinemavn.com/Media/WebAdmin/26b687f7c7f747c18e03acb93e3a9b76.png',
        'https://media.lottecinemavn.com/Media/WebAdmin/bbff377d10df46949db98d20b47c108f.jpg',
        'https://media.lottecinemavn.com/Media/WebAdmin/4ed16c51735a4ffab5877e648bfe9c1b.jpg',
        'https://media.lottecinemavn.com/Media/WebAdmin/1525b37ef21a430b8f314025d21d7778.jpg'
    ]

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
            <ListItem />
        </div>
    )
}
