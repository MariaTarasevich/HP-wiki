import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './main/Main';
import { Home } from './home/Home'
import { Characters } from './characters/Characters'
import { Houses } from './houses/Houses'
import { Hat } from './hat/Hat'

function App() {
  return (
    <div className="App"> 
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/houses" element={<Houses />} />
      <Route path="/hat" element={<Hat />} />
      </Routes>
    </div>
  );
}

export default App;
