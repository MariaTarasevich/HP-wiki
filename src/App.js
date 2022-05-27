import React, { useContext, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './main/Main'
import { Home } from './home/Home'
import { Characters } from './characters/Characters'
import { Houses } from './houses/Houses'
import { Gryffindor } from './houses/Gryffindor'
import { Slytherin } from './houses/Slytherin'
import { Hufflepuff } from './houses/Hufflepuff'
import { Ravenclaw } from './houses/Ravenclaw'
import { Hat } from './hat/Hat'
import { Fav } from './fav/Fav'
import { CharacterPage } from './characterPage/CharacterPage'
import { Context } from './context/context'
import { addToFav, getFavList, deleteFromFav } from './utils/utils'

function App() {
  const favChars = getFavList();
  const [favList, setFavList] = useState(favChars)

  return (
    <Context.Provider value={{ addToFav, favList, deleteFromFav }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/hat" element={<Hat />} />
          <Route path="/gryffindor" element={<Gryffindor />} />
          <Route path="/slytherin" element={<Slytherin />} />
          <Route path="/hufflepuff" element={<Hufflepuff />} />
          <Route path="/ravenclaw" element={<Ravenclaw />} />
          <Route path="/fav" element={<Fav />} />
          <Route path='/characters/:name' element={<CharacterPage />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
