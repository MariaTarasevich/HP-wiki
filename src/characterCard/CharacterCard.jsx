import defChar from './../img/defChar.png'
import heart from './../img/heart.svg'

export const CharacterCard = ({character}) => {
    const {name, image} = character

    return (
        <div className="card__item">
            {image ? <img className="cart__img" src={image} alt='character' /> : <img className="cart__img" src={defChar} alt='character' />}
            <div className="card__desc">
                <h3 className="card__name">{name}</h3>
                <img src={heart} alt='add to fav' className="card__add" />
            </div>
        </div>
    )
}