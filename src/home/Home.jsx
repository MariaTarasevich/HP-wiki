import React from "react"
import { NavLink } from 'react-router-dom'
import welcomePromo from './../img/welcomePromo.webp'

import { HeaderNav } from './../headerNav/HeaderNav'

export const Home = () => {
    return (
        <div className='container'>
            <section className="home__promo">
                <HeaderNav />
                <div className="home__promo-content">
                    <div className="home__promo-wrap">
                        <img className="home__promo-pic" src={welcomePromo} />
                        <h2 className="home__promo-subtitle">Find any character from the Harry Potter universe</h2>
                    </div>
                </div>
            </section>
            <section className="info__wrap">
                <h3 className="info__title">What you can do on our website</h3>
                <p className="info__subtitle">Feel free to explore</p>
                <div className="info__items">
                    <div className="info__item">
                        <img className="info__item-img" />
                        <p className="info__item-number">01</p>
                        <p className="info__item-title">Get acquainted with the Houses</p>
                        <p className="info__item-desc">Get to know everything about the Houses of Hogwarts, uncover all the mysteries of old school of witchcraft and wizardy.</p>
                    </div>
                </div>
                <div className="info__items">
                    <div className="info__item">
                        <img className="info__item-img" />
                        <p className="info__item-number">02</p>
                        <p className="info__item-title">Discover any character from the HP universe</p>
                        <p className="info__item-desc">We provide full library with all needed info about all characters from books and films.</p>
                    </div>
                </div>
                <div className="info__items">
                    <div className="info__item">
                        <img className="info__item-img" />
                        <p className="info__item-number">03</p>
                        <p className="info__item-title">Find out your House in  Hogwarts</p>
                        <p className="info__item-desc">Ask Sorting Hat whish House would fit you most of all.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}