import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './main/Main';
import { Home } from './home/Home'

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
