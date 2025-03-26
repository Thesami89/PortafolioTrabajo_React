import NavBar from "./components/navbar/navbar";
import Presentacion from "./components/Presentacion/presentacion";
import SobreMi from "./components/SobreMi/SobreMi";
import HabilidadeSection from "./components/Habilidades/habilidades";


function App() {
  return (
    <div className="estilizacion">
      <NavBar menu1={'Sobre Mi'} menu2={'Skills'} menu3={'Hobbies'} menu4={'Formacion'} menu5={'Proyectos'} menu6={'Orozcos881@gmail.com'}/>
      <Presentacion/>
      <SobreMi/>
      <HabilidadeSection/>
    </div>
  )
}

export default App;
