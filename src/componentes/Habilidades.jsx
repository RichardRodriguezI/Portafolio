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
          
          <div className="circle-1"><img id='html'src={html} alt="logo Html"/></div>
          <div className="circle-2"><img id='css' src={css} alt="logo Css"/></div>
          <div className="circle-3"><img id='react' src={react} alt="logo React JS"/></div>
          <div className="circle-4"><img id='js' src={js} alt="logo JavaScript"/></div>
          <div className="circle-5"><img id="tailwind" src={tailwind} alt="logo Tailwind"/></div>  
      

        </div>
          
     </>
  )
}

export default Habilidades