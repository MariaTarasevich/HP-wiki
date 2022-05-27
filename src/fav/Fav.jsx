import React from "react"
import { HeaderNav } from './../headerNav/HeaderNav'
import { getFavList } from './../utils/utils'

export const Fav = () => {
    const favChars = getFavList()
    return (
        <div className='char__wrap'>
            <HeaderNav />
            {favChars.map(({ name, house, actor, image }) => {
                return (<div className="fav">
                    <div className="fav_items">
                        <div className="fav__item">
                            <img src={image} alt="character" className="fav__img" />
                            <div className="card__desc">
                                <h3 className="fav__name">{name}</h3>
                                <p className="fav__house">{house}</p>
                                <p className="fav__actor">PLayed by {actor}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            })}
        </div>
    )
}