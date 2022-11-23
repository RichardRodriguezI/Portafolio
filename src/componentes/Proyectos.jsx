import gastos from '../img/gastos.jpg'
import cotizador from '../img/cotizador.jpg'
import pacientes from '../img/pacientes.jpg'
import git from '../img/git.png'

function Proyectos () {
  return (
    <>
      <div className="proyectos contenedor" id='proyectos'>
                <h1>Proyectos</h1>  
            <div className="proyecto"> 
                <a href="https://control-de-gastos-reactjs.netlify.app"><h2>Control Gastos</h2></a>
                <p>React Js,Css</p>
                <div className="proyecto-img">
                <img src={gastos} alt="control gastos" />
                <a href="https://control-de-gastos-reactjs.netlify.app">Web</a>
                <a href="https://github.com/RichardRodriguezI/cotizador-cripto-react"><img src={git} alt="Git hub de proyecto" /></a>
                </div>
            </div>
            <div className="proyecto">
                <h2>Citas De Veterinaria</h2>
                <p>Tailwind,React Js</p>
                <div className="proyecto-img">
                <img src={pacientes} alt="control gastos" />
                <a href="https://citas-mascotas-react-js.netlify.app">Web</a>
                <a href="https://github.com/RichardRodriguezI/Control-de-Presupuestos"><img src={git} alt="Git hub de proyecto" /></a>
            </div>
            </div>
             <div className="proyecto">
             <h2>Cotizador Criptomonedas</h2>
                <p>React Js,Css</p>
                <div className="proyecto-img">
                <img src={cotizador} alt="control gastos" />
                <a href="https://cotizador-cripto-react-js.netlify.app/">Web</a>
                <a href="https://github.com/RichardRodriguezI/cotizador-cripto-react"><img src={git} alt="Git hub de proyecto" /></a>
            </div>
             </div>
      </div>
    
        </>
  )
}

export default Proyectos 