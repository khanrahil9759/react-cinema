import React, { useState, useEffect, Fragment, useRef } from 'react'
import './Rating.scss'

const Rating = ({ rating, totalStars, className }) => {
    const [numStars, setStars] = useState(0)
    const ratingRef = useRef()

    useEffect(() => {
        const starsArray = [...Array(totalStars).keys()].map((i) => i + 1)
        setStars(starsArray)
        let percentage;
        if (rating <= 5) {
            percentage = (rating / 5) * 100
        } else {
            percentage = (rating / 10) * 100
        }
        const starPercentage = `${Math.floor(percentage)}%`
        ratingRef.current.style.width = starPercentage
    }, [rating, totalStars])

    return (
        <div className="star-rating">
            <div className={`back-stars ${className}`}>
                {numStars && numStars.map((i) => (
                    <Fragment key={i} > <i className="fa fa-star" aria-hidden="true" />
                    </Fragment>
                ))}

                <div className="front-stars" ref={ratingRef}>
                    {numStars && numStars.map((i) => (
                        <Fragment key={i} > <i className="fa fa-star" aria-hidden="true" />
                        </Fragment>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Rating
