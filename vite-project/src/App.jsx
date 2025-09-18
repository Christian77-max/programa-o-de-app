import { Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import Serviços from './pages/Serviços'
import './App.css' 

function App() {
  return (
    <>
       <div className="App">
        <Header/>
        <main className='container'>
          <Routes>
            <Route path='/' element={<h1>Home</h1>}/>
            <Route path='/Serviços' element={<h1>Serviços</h1>}/>
            <Route path='/Sobre-nos' element={<h1>SobreNos</h1>}/>
            <Route path='/Fale-conosco' element={<h1>FaleConosco</h1>}/>
          </Routes>
        </main>
        </div>

    </>
  )
}

export default App

      




