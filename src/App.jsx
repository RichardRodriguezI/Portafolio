import { useState } from 'react'
import  Header from './componentes/Header'
import Inicio from './componentes/Inicio'
import Proyectos from './componentes/Proyectos'
import Habilidades from './componentes/Habilidades';

function App() {
 
  return (
     <>
      <Header />
      <Inicio />
      <Habilidades />
      <Proyectos />
     </>
  ) 
}

export default App
