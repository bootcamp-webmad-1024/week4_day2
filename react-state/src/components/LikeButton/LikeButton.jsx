import './LikeButton.css'

import notLikedImage from './../../assets/heart-off.svg'
import likedImage from './../../assets/heart-on.svg'

import { useState } from 'react'


const LikeButton = () => {

    const [doesLike, setDoesLike] = useState(true)

    const handleLikeClick = () => {
        setDoesLike(!doesLike)
    }

    return (
        <div className="LikeButton">

            <img onClick={handleLikeClick} src={doesLike ? likedImage : notLikedImage} alt="Heart" />

            <h2>{doesLike ? 'Le gusto :3' : 'No le gusto D:'}</h2>

        </div >
    )
}

export default LikeButton