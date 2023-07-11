import "../Estilos/Menu.css"; 
function Menu() { 

    return ( 
        <div className="Menu-contenedor">
            <ul className="menu-nav">
                <li><a href="#">Login</a></li>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Personajes</a></li>
                <li><a href="#">Respiraciones</a></li>
            </ul>
        </div>
    )
}

export default Menu; 