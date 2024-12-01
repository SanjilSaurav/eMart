import React from 'react'
import { FaStar,FaRegStar, FaStarHalfAlt } from 'react-icons/fa'

const Rating = ({value,text}) => {
  return (
    <div>
        <span className='rating'>
            {value >= 1 ? <FaStar/> : value>=0.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
        </span>
        <span className='rating'>
            {value >= 2 ? <FaStar/> : value>=1.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
        </span>
        <span className='rating'>
            {value >= 3 ? <FaStar/> : value>=2.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
        </span>
        <span className='rating'>
            {value >= 4 ? <FaStar/> : value>=3.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
        </span>
        <span className='rating'>
            {value >= 5 ? <FaStar/> : value>=4.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
        </span>
        <span className='rating-text'>{text && text}</span>
    </div>
  )
}

export default Rating