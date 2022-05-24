import React, { useState, useEffect } from "react"
import { HeaderNav } from '../headerNav/HeaderNav'
//import { Context } from '../context/context'
import { useParams } from "react-router-dom"

export const CharacterPage = () => {
//console.log(charData+'TTTTTT')
//const { charData } = useContext(Context)
    const [charactersList, setCharactersList] = useState([])
    useEffect(() => {
        fetch(`https://hp-api.herokuapp.com/api/characters`)
            .then(res => res.json())
            .then(json => {
                setCharactersList([...json])
            })
    }, [])

    const params = useParams()
    console.log(params)
    return (
        <div className='char__wrap'>
            <HeaderNav />
            <div className="charpage">
                {charactersList.filter(({name}) => name == params.name).map(({name, image, gender, house, dateOfBirth,ancestry, eyeColour, actor, wand, patronus})=>{
                return (<div className="charpage__item">
                    {image ? <img src={image} alt="character" /> : ''}
                    <div className="card__desc">
                        <h3 className="card__name">{name}</h3>
                        {house ? <p className="card__house">{house}</p> : ''}
                        {gender ? <p className="card__gender">{gender}</p> : ''}
                        {dateOfBirth ? <p className="card__dateOfBirth">{dateOfBirth}</p> : ''}
                        {ancestry ? <p className="card__ancestry">{ancestry}</p> : ''}
                        {eyeColour ? <p className="card__eyeColour">{eyeColour}</p> : ''}
                        {patronus ? <p className="card__patronus">{patronus}</p> : ''}
                        {wand ? <div className="card__wand">
                            <h3 className="card__wand-title">Wand:</h3>
                            <p className="card__wand-row">{wand.wood}</p>
                            <p className="card__wand-row">{wand.core}</p>
                            <p className="card__wand-row">{wand.length}</p>
                        </div> : ''}
                        {actor ? <p className="card__actor">PLayed by {actor}</p> : ''}
                    </div>
                </div>)})}
            </div>
        </div>
    )
}