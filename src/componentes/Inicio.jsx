import React from 'react'
import logoLinkedin from '../img/linkedin.png'
import logoCV from '../img/cv.png';
import logoGit from '../img/git.png';
import logoEmail from '../img/email.png';
import avatar from '../img/avatar.png'
import laptop from '../img/laptop.png'

function Inicio() {
  return (
    <> 
      <h1 id='texto-inicio'>Inicio</h1>

      <div className="inicio contenedor">       
      
            <div className="textos-inicio">
              <h1>Richard Rodriguez</h1>
              <div className="linea"></div> 
              <span>Desarrollador </span>
              <span id='frontend'>Frontend</span>
              <a href="" ><img id='cv'  src={logoCV} alt="CV" /></a>
              <a href=""><img id='linkedin' src={logoLinkedin} alt="Linkedin" /></a>
              <a href=""><img id='git' src={logoGit} alt="GitHub" /></a>
              <a href=""><img id='email' src={logoEmail} alt="Email" /></a>
              <div className='avatar'>
    <img id='avatar' src={avatar} alt="avatar" />
    </div>
            </div>
         
          <div className="textos-inicio">
          <h1>Hola! Bienvenido a mi Portafolio</h1>
           <p>Desarrollador Frontend de Santiago de Chile. Que se formo en Udemy y de forma autodidacta. Soy una persona que jamas
            quiere dejar de aprender para formamarme de la mejor manera como desarrollador.
           </p>
          </div>
           <img id='laptop' src={laptop} alt="laptop" />

       </div>
    
    </>
  )
}

export default Inicio