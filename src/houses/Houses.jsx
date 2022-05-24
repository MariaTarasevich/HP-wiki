import React from 'react'
import { HeaderNav } from './../headerNav/HeaderNav'
import { NavLink } from 'react-router-dom'
import huff from './../img/huff.png'
import gryf from './../img/gryf.png'
import slyth from './../img/slyth.png'
import rav from './../img/rav.png'


export const Houses = () => {
    return (
        <div className='char__wrap'>
            <HeaderNav />
            <div className='houses__content'>
                <h3 className='houses__title'>Get to know everything about Houses of Hogwarts!</h3>
                <p className='houses__desc'>We have the biggest library with everything you ever wanted to know about Hogwarts.</p>
                <div className='main__houses-container'>
                    <div className='main__houses-wrap'>
                        <NavLink className='main__link' to='/gryffindor'><img className='main__pic' src={gryf} /></NavLink>
                        <NavLink className='main__link' to='/slytherin'><img className='main__pic' src={slyth} /></NavLink>
                        <NavLink className='main__link' to='/hufflepuff'><img className='main__pic' src={huff} /></NavLink>
                        <NavLink className='main__link' to='/ravenclaw'><img className='main__pic' src={rav} /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}