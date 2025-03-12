import './presentacion.css'
const Presentacion = () =>{
    return <section className="presentacion">
        <div className="presentacion_descripcion">
            <h1> Hola, mi nombre es Fulana de Tal y construyo paginas web</h1>
            <p>
                Soy formado en .... lorem ipsum sit amet consectetur y actualmente estoy participando
                del proyecto Oracle ONE en Alura Latam.
            </p>
        </div>
        
        <img src="\img\Samuel.jpg" alt="Foto de presentacion"></img>

        <div className="presentacion_redes">
            <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Curriculum</a></li>
            </ul>
        </div>

    </section>
}

export default Presentacion