import './style.css'
import './../../styles/button.css'

export function Navbar() {
    return (
        <nav className="navbar px-2 flex items-center justify-between">
        <ul className="flex">
            <li><a href="">Home</a></li>
            <li><a href="">Info</a></li>
            <li><a href="">Sobre</a></li>
        </ul>
        <button className="btn">Entrar</button>
        </nav>
    )
}