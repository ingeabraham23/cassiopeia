import { Link } from 'react-router-dom';
import "./Navbar.css"
import {
    faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigationItems = [
    { path: '/', icon: faClock, label: 'Gifs' },
    { path: '/escalas', icon: faClock, label: 'Escalas' },
    { path: '/guia', icon: faClock, label: 'Guía' },

];

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {navigationItems.map((item) => (
                    <li className="nav-item" key={item.path}>
                        <Link to={item.path} className="nav-link">
                            <FontAwesomeIcon icon={item.icon} size="2x" style={{ fontSize: '24px' }} /> {/* Renderiza el icono de Font Awesome */}
                            <span className="nav-label">{item.label}</span> {/* Agrega el span para mostrar la etiqueta */}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;