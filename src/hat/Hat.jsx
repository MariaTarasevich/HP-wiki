import React, { useEffect, useState } from 'react'
import { HeaderNav } from './../headerNav/HeaderNav'
import sortHat from './../img/sortHat.png'
import huff from './../img/huff.png'
import gryf from './../img/gryf.png'
import slyth from './../img/slyth.png'
import rav from './../img/rav.png'
import { NavLink } from 'react-router-dom'

export const Hat = () => {
    const [chosen, setChosen] = useState(false)
    const [randomNum, setRandomNum] = useState(0)
    const [house, setHouse] = useState('')
    const getRandom = () => {
        return setRandomNum(Math.floor(Math.random() * 4));
    }

    useEffect(() => {
        switch (randomNum) {
            case 0:
                setHouse('Gryffindor');
                break;
            case 1:
                setHouse('Slytherin');
                break; 
            case 2:
                setHouse('Hufflepuff');
                break; 
            case 3:
                setHouse('Ravenclaw');
                break;
        }
    }, [randomNum])
    return (
        <div className='char__wrap'>
            <HeaderNav />
            <div className='hat'>
                <h3 className='hat__title'>Find out your House now!</h3>
                {chosen ? 
                <div className='hat__chosen'>
                    {house == 'Gryffindor' || house == 'Slytherin' ? 
                        <div className='hat__gr-sl'>
                            {house == 'Slytherin' ? 
                                <div className='hat__res-wrap'><h3 className='hat__congrats'>Congratulations! Your House is Gryffindor!</h3><img src={gryf} className="hat__img-house"/></div>
                            : <div className='hat__res-wrap'><h3 className='hat__congrats'>Congratulations! Your House is Slytherin!</h3><img src={slyth} className="hat__img-house"/></div>}</div> 
                        : <div className='hat__hf-rv'>
                            {house == 'Hufflepuff' ? 
                            <div className='hat__res-wrap'><h3 className='hat__congrats'>Congratulations! Your House is Hufflepuff!</h3><img src={huff} className="hat__img-house"/></div> 
                        : <div className='hat__res-wrap'><h3 className='hat__congrats'>Congratulations! Your House is Ravenclaw!</h3><img src={rav} className="hat__img-house"/></div>}</div>}<button className='hat__restart-btn' onClick={()=>setChosen(false)}>Try again</button></div> 
                : <div className='hat__wrap'><img src={sortHat} onClick={() => { getRandom(); setChosen(true); console.log(house) }} className="hat__img"/></div>}
            </div>
        </div>
    )
}