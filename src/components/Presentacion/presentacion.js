import './presentacion.css'
import { FiExternalLink } from "react-icons/fi";
const Presentacion = () =>{
    return <div className="presentacion">
        <div className='presentacion-orden'> 

        
            <div className="presentacion_descripcion">
                <h1> Hola, mi nombre es Samuel <br></br> Orozco y construyo paginas web</h1>
                <p>
                    Soy formado en Lura Latam donde me especialice como desarrollador Front-End<br></br>
                    aplicando las ultimass tecnologias en la actualidad.
                </p>
                <div className="presentacion_redes">
                    <ul className='presentacion_redes-lista'> 
                        <li><a href="#">Instagram <FiExternalLink /></a></li>
                        <li><a href="#">GitHub <FiExternalLink /></a></li>
                        <li><a href="#">Curriculum <FiExternalLink /></a></li>
                    </ul>
                </div>
            </div>

            <div className='presentacion_img'>
                <img src="\img\Samuel.jpg" alt="Foto de presentacion"></img>
            </div>

        </div>
        

    </div>
}

export default Presentacion