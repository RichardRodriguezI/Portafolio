import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Header = () => {
    return(
         <>

         <div className="contenedor header">
            <ul>
                <li>
                <Link to="#texto-inicio" smooth={true} spy={true} offset={50} duration={500}>Inicio</Link> 
                </li>
                <li>
                <Link to="#habilidades"smooth={true} spy={true} offset={50} duration={500} >Habilidades</Link>
                </li>
            <li>
            <Link to="#proyectos"smooth={true} spy={true} offset={50} duration={500}>Proyectos</Link> 
            </li>
            <li>
            <Link to="#contacto" smooth={true} spy={true} offset={50} duration={500} >Contacto</Link>  
            </li>
            </ul>  
        </div>  
        
         </>
    )
}

export default Header
