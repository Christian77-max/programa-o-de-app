import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Infocliente from './assets/components/infoCreate'
import logo from './assets/images/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={logo} alt="Logo" className='cliente-logo' />
    <Infocliente />
      
    </>
  )
}

export default App
