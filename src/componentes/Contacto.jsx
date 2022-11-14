import React from 'react'

function Contacto() {
  return (
   <>
      <h1>Contacto</h1>
      <form action="">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id='nombre' placeholder='Tu Nombre'/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder='Tu Email' />
        <label htmlFor="mensaje">Mensaje</label>
        <textarea name="mensaje" id="mensaje">Deja Tu Mensaje</textarea>
      </form>

      <div className="contenedor footer">

          <nav>
            <a href="">Inicio</a> 
            <a href="">Habilidades</a>
            <a href="">Proyectos</a>
            <a href="">Contacto</a>
        </nav>      
        </div>
   </>
  )
}

export default Contacto