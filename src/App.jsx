import { useState } from 'react'
import CodathonComponent from './assets/components/Register'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CodathonComponent/>
    </>
  )
}

export default App
