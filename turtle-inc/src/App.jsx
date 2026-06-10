import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './paginas/inicio'
import Contacto from './paginas/contacto'
import Registro from './paginas/registros'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/registro" element={<Registro/>} />
      </Routes>
    </Router>
    
  )
  
}

export default App
