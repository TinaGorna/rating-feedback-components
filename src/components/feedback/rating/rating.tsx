import React, {useState} from "react";
import './rating.css'

type Props = {
    onSelect: (rating: number) => void
}

export function Rating({onSelect}: Props) {
    const handleSelect = () => {
        onSelect(currentState.hovered)
    }
    const [currentState, setState] = useState({
        stars: [1, 2, 3, 4, 5],
        rating: 0,
        hovered: 0,
    })
    const changeRating = (rating: number) => {
        setState(prev => ({
            ...prev,
            rating,
        }))

    }

    const hoverRating = (rating: number) => {
        setState(prev => ({
            ...prev,
            hovered: rating,
        }))
    }

    return (
        <>
            <div className="form">
                <div className="form__label">
                    PLEASE RATE
                    THE GAME
                </div>
                <div data-ajax="true" className="rating rating_set">
                    <div className="rating__body">
                        <div className="rating__active"></div>
                        <div className="rating__items" onClick={handleSelect}>
                            {currentState.stars.map((star) => {
                                const isSelectedIcon = !(currentState.rating < star && currentState.hovered < star)
                                return (
                                    <span
                                        key={star}
                                        onClick={() => {
                                            changeRating(star)
                                        }}
                                        onMouseEnter={() => {
                                            hoverRating(star)
                                        }}
                                        onMouseLeave={() => {
                                            hoverRating(0)
                                        }}
                                        className={`rating__item ${isSelectedIcon ? "is-selected" : "is-deselected"}`}
                                    >★</span>
                                )
                            })}
                        </div>

                    </div>
                    <div className="rating__value"></div>
                </div>

            </div>
        </>
    )
}