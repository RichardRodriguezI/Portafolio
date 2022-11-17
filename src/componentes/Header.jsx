import imagen from '../img/banner.jpg'
import { Link, Router } from 'react-router-dom'


const Header = () => {
    return(
         <>

         <div className="contenedor header">
          
          <nav>
            <a href='#inicio'>Inicio</a> 
            <a href='#'>Habilidades</a> 
            <a href='#'>Proyectos</a> 
            <a href='#'>Contacto</a> 
        </nav>      
        </div>  
        
         </>
    )
}

export default Header
