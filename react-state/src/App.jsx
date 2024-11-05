import { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'

import LikeButton from "./components/LikeButton/LikeButton"

const App = () => {

  const [theme, setTheme] = useState('contrast')

  const handleTheme = evt => {
    const { value } = evt.target
    setTheme(value)
  }

  return (
    <div className={`App ${theme}`}>

      <select onChange={handleTheme}>
        <option value="light">Modo claro</option>
        <option value="dark">Modo oscuro</option>
        <option value="contrast">Modo AC</option>
      </select>

      <Counter />
      <LikeButton />
    </div>
  )
}

export default App