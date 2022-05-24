import { NavLink } from 'react-router-dom'
import defChar from './../img/defChar.png'
import heart from './../img/heart.svg'

export const CharacterCard = ({character}) => {
    const {name, image} = character

    return (
        <div className="card__item">
            {image ? <NavLink to={'/characters/'+name} className='card__img-link'> <img className="cart__img" src={image} alt='character' /> </NavLink>: <NavLink to={'/characters/'+name} className='card__img-link'><img className="cart__img" src={defChar} alt='character' /></NavLink>}
            <div className="card__desc">
            <NavLink to={'/characters/'+name} className='card__img-link'><h3 className="card__name">{name}</h3></NavLink>
                <img src={heart} alt='add to fav' className="card__add" />
            </div>
        </div>
    )
}