import './habilidades.css'
import CardHabilidades from '../CardHabilidades/cardHabilidades'

const datos = [
    {
        foto:'https//github/Thesami89.com',
        parrafo:'html5'   
    },
    {
        foto:'https//',
        parrafo:'JavaScript'
    },
    {
        foto:'https//',
        parrafo:'JavaScript'
    },
    {
        foto:'https//',
        parrafo:'JavaScript'
    },
    {
        foto:'https//',
        parrafo:'JavaScript'
    }

]

console.log(datos)

const HabilidadeSection = () => {
    return <div className="habilidades">
        {datos.filter}

        <CardHabilidades titulo={'Skills'} img={'src'} alt={'imagen de referencia'}/>
        <CardHabilidades titulo={'Hobbies'}/>
    </div>
}

export default HabilidadeSection