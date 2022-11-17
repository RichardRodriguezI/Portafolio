import logoLinkedin from '../img/linkedin.png'
import logoCV from '../img/cv.png';
import logoGit from '../img/git.png';
import logoEmail from '../img/email.png';


function Contacto() {
  return (
   <>
      <div className="formulario">
      <h1>Contacto</h1>
      <form action="">
        <label htmlFor="nombre">Nombre:</label>
        <input className='input' type="text" id='nombre' placeholder='Tu Nombre'/>
        <label htmlFor="mail">Email:</label>
        <input className='input' type="email" id="mail" placeholder='Tu Email' />
        <label htmlFor="mensaje">Mensaje</label>
        <textarea className='input' name="mensaje" id="mensaje" placeholder='Deja Un Mensaje'></textarea>

        <button>Enviar</button>
      </form>
      </div>

      <div className="contenedor footer">       
        <div className="list">
          <a href="" ><img id='cv'  src={logoCV} alt="CV" /></a>
          <a href=""><img  id="linkedin" src={logoLinkedin} alt="Linkedin" /></a>
          <a href=""><img  id="git" src={logoGit} alt="GitHub" /></a>
          <a href=""><img id='email' src={logoEmail} alt="Email" /></a>
        </div>
        <p>&copy; 2022 Richard Rodriguez</p>
        </div>
   </>
  )
}

export default Contacto