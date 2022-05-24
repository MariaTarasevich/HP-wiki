import React from "react"
import { HeaderNav } from './../headerNav/HeaderNav'

export const Fav = () => {
    return (
        <div className='char__wrap'>
            <HeaderNav />
            <div className="fav">
                <div className="fav_items">
                    <div className="fav__item">
                        <img src="" alt="character" />
                        <div className="card__desc">
                            <h3 className="card__name"></h3>
                            <p className="card__house"></p>
                            <p className="card__actor">PLayed by </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}