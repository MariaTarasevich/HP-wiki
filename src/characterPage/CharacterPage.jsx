import React, { useState, useEffect } from "react"
import { HeaderNav } from '../headerNav/HeaderNav'
import { useParams } from "react-router-dom"

export const CharacterPage = () => {
    const [charactersList, setCharactersList] = useState([])
    useEffect(() => {
        fetch(`https://hp-api.herokuapp.com/api/characters`)
            .then(res => res.json())
            .then(json => {
                setCharactersList([...json])
            })
    }, [])

    const params = useParams()
    return (
        <div className='char__wrap'>
            <HeaderNav />
            <div className="charpage">
                {charactersList.filter(({name}) => name == params.name).map(({name, image, gender, house, dateOfBirth,ancestry, eyeColour, actor, wand, patronus})=>{
                return (<div className="charpage__item">
                    {image ? <img src={image} alt="character"  className="charpage__img"/> : ''}
                    <div className="charpage__desc">
                        <h3 className="card__name">{name}</h3>
                        {house ? <p className="card__house"><span className="house__card-span">House:</span> {house}</p> : ''}
                        {gender ? <p className="card__gender"><span className="house__card-span">Gender:</span> {gender}</p> : ''}
                        {dateOfBirth ? <p className="card__dateOfBirth"><span className="house__card-span">Born:</span> {dateOfBirth}</p> : ''}
                        {ancestry ? <p className="card__ancestry"><span className="house__card-span">Ancestry:</span> {ancestry}</p> : ''}
                        {eyeColour ? <p className="card__eyeColour"><span className="house__card-span">Eye color:</span> {eyeColour}</p> : ''}
                        {patronus ? <p className="card__patronus"><span className="house__card-span">Patronus:</span> {patronus}</p> : ''}
                        {wand ? <div className="card__wand">
                            <h3 className="card__wand-title">Wand:</h3>
                            {wand.wood ? <p className="card__wand-row"><span className="house__card-span">Wood:</span> {wand.wood}</p> : <p className="card__wand-row"><span className="house__card-span">Wood:</span> unknown</p>}
                            {wand.wood ? <p className="card__wand-row"><span className="house__card-span">Core:</span> {wand.core}</p> : <p className="card__wand-row"><span className="house__card-span">Core:</span> unknown</p>}
                            {wand.wood ? <p className="card__wand-row"><span className="house__card-span">Length:</span> {wand.length}dm</p> : <p className="card__wand-row"><span className="house__card-span">Length:</span> unknown</p>}
                        </div> : ''}
                        {actor ? <p className="card__actor"><span className="house__card-span">PLayed by</span> {actor}</p> : <p className="card__actor"><span className="house__card-span">PLayed by</span> unknown</p>}
                    </div>
                </div>)})}
            </div>
        </div>
    )
}