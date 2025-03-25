import './NavBar.css'
const NavBar = (props) =>{

    const {menu1,menu2, menu3, menu4, menu5,menu6}=props

    return <div className="bloque_nav">
        <h2 className="nombre_usuario">
            <strong>Samuel Orozco</strong>
        </h2>
        <nav >
            <ul className="nav-bar" >
                <li> <a href="#">{menu1}</a> </li>
                <li> <a href="#">{menu2}</a> </li>
                <li> <a href="#">{menu3}</a> </li>
                <li> <a href="#">{menu4}</a> </li>
                <li> <a href="#">{menu5}</a> </li>
                <li> <a href="#" className='text-black'><strong>{menu6}</strong></a> </li>
                
            </ul>
            <a href="#" className='correo'><strong>{menu6}</strong></a>
        </nav>
        
    </div>
}

export default NavBar