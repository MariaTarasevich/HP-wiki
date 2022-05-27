import { NavLink } from 'react-router-dom'
import defChar from './../img/defChar.png'
import heart from './../img/heart.svg'
import heartBlack from './../img/heart-black.svg'
import { Context } from './../context/context'
import { useContext, useState } from 'react'

export const CharacterCard = ({character}) => {
    const { addToFav, favList, deleteFromFav } = useContext(Context)
    const {name, image} = character
    const [ like, setLike ] = useState(false)

    return (
        <div className="card__item">
            {image ? <NavLink to={'/characters/'+name} className='card__img-link charcard__img'> <img className="cart__img" src={image} alt='character' /> </NavLink>: <NavLink to={'/characters/'+name} className='card__img-link'><img className="cart__img" src={defChar} alt='character' /></NavLink>}
            <div className="card__desc">
            <NavLink to={'/characters/'+name} className='card__img-link'><h3 className="card__name">{name}</h3></NavLink>
                {!like ? <img src={heart} alt='add to fav' onClick={()=>{addToFav(character, favList); setLike(true)}} className="card__add" /> : <img src={heartBlack} alt='delete from fav' onClick={()=>{deleteFromFav(name); setLike(false)}} className="card__add" />}
            </div>
        </div>
    )
}