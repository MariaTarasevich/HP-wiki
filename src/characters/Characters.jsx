import React, { useRef } from 'react'
import { useEffect, useState } from "react"
import { HeaderNav } from './../headerNav/HeaderNav'
import { CharacterCard } from '../characterCard/CharacterCard'

export const Characters = () => {
    const selectChar = useRef(null)
    const searchChar = useRef(null)
    const [charactersList, setCharactersList] = useState([])
    const [defCharactersList, setDefCharactersList] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        fetch(`https://hp-api.herokuapp.com/api/characters`)
            .then(res => res.json())
            .then(json => {

                localStorage.setItem('characters', JSON.stringify(json))
                localStorage.getItem('characters') ? setCharactersList(JSON.parse(localStorage.getItem('characters'))) : setCharactersList([...json])
                setDefCharactersList([...json])
            })
    }, [])

    console.log(JSON.parse(localStorage.getItem('favList')))

    const showHouse = (house) => {
        fetch('https://hp-api.herokuapp.com/api/characters/house/' + house)
            .then((res) => res.json())
            .then((json) => {
                setCharactersList([...json])
            })
    }

    const showType = (type) => {
        fetch('https://hp-api.herokuapp.com/api/characters/' + type)
            .then((res) => res.json())
            .then((json) => {
                setCharactersList([...json])
            })
    }

    const selectShowResult = () => {
        switch (selectChar.current.value) {
            case 'All':
                setCharactersList([...defCharactersList])
                break;
            case 'Gryffindor':
                showHouse('Gryffindor')
                break;
            case 'Slytherin':
                showHouse('Slytherin')
                break;
            case 'Hufflepuff':
                showHouse('Hufflepuff')
                break;
            case 'Ravenclaw':
                showHouse('Ravenclaw')
                break;
            case 'Students':
                showType('Students')
                break;
            case 'Staff':
                showType('Staff')
                break;
            default:
                setCharactersList([...defCharactersList])
                break;
        }
    }

    const showSearchChar = (e) => {
        setSearchValue(e.target.value)
    }

    return (

        <div className='char__wrap'>
            <HeaderNav />
            <section className='char__section'>
                <div className="char__form">
                    <select ref={selectChar} className='char__select' onChange={() => selectShowResult()}>
                        <option>All</option>
                        <option>Gryffindor</option>
                        <option>Slytherin</option>
                        <option>Hufflepuff</option>
                        <option>Ravenclaw</option>
                        <option>Students</option>
                        <option>Staff</option>
                    </select>
                    <input type='search' onChange={(e) => showSearchChar(e)} className='char__search-input' ref={searchChar} placeholder='Dobby' />
                </div>
                <div className='char__content'>
                    {charactersList.length > 0 ? <>{charactersList.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase())).map((character, index) => {
                        return (<CharacterCard key={index} character={character} />)
                    })}</> : <h3>Loading.....</h3>}
                </div>
            </section>
        </div>
    )
}