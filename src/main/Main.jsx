import React from 'react'
import { NavLink } from 'react-router-dom'
import welcomeToHogwarts from './../img/welcomeToHogwarts.png'
import huff from './../img/huff.png'
import gryf from './../img/gryf.png'
import slyth from './../img/slyth.png'
import rav from './../img/rav.png'

export const Main = () => {
    return (
        <div className='main__wrap'>
            <div className='main__container'>
                <div className='main__content'>
                    <NavLink className='main__title-pic' to='/home'>
                        <img src={welcomeToHogwarts} />
                    </NavLink>
                    <div className='main__houses-container'>
                        <div className='main__houses-wrap'>
                            <NavLink className='main__link' to='/'><img className='main__pic' src={gryf} /></NavLink>
                            <NavLink className='main__link' to='/'><img className='main__pic' src={slyth} /></NavLink>
                            <NavLink className='main__link' to='/'><img className='main__pic' src={huff} /></NavLink>
                            <NavLink className='main__link' to='/'><img className='main__pic' src={rav} /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}