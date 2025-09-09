import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Nature from './pages/Nature'
import Science from './pages/Science'
import Computer from './pages/Computer'
import Sports from './pages/Sports'
import Food from './pages/Food'

function App() {

  return (
    <div className=''>
      <Navbar/>
      <Routes>
      <Route path="/nature" element={<Nature/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/science" element={<Science/>}></Route>
      <Route path="/computer" element={<Computer/>}></Route>
      <Route path="/sports" element={<Sports/>}></Route>
      <Route path="/food" element={<Food/>}></Route>
      </Routes>
    </div>
  )
}

export default App
