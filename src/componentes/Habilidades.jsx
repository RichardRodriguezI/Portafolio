import html from '../img/html.png';
import css from '../img/css.png';
import react from '../img/react.png';
import js from '../img/js.png';
import tailwind from '../img/tailwind.png';

function Habilidades() {
  return (
     <>
       <div className="habilidades contenedor">
       <h1>Habilidades</h1> 
       <div className="logo-html-css">
            <img src={html} alt="logo Html" />
            <img src={css} alt="logo Css" />
            </div>
          <div className="logos-skills">     
            <img  id='react-logo' src={react} alt="logo React JS" />
            <img id='js-logo' src={js} alt="logo JavaScript" />
            <img id="tailwind-logo" src={tailwind} alt="logo Tailwind" />
          </div>
       </div>
       <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <div className="circle-5"></div>
     </>
  )
}

export default Habilidades