const CardHabilidades = (props) =>{
    const{titulo,img,alt,parrafo} = props

    return <div>
        <h2>{titulo}</h2>
        <div className="card">
            <img src={img} alt={alt}></img>
            <p>{parrafo}</p>
        </div>
    </div>
}

export default CardHabilidades