import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import { FaSearch ,FaList} from "react-icons/fa";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='navbar'>
            <div className='nav-menu'>
                <div className='menu' id={showMenu ? "hidden" : ""}>
                    <Link className='links' to='/'>ACCEUIL</Link>
                    <Link className='links' to='/formation'>FORMATION</Link>
                    <Link className='links' to='/projet'>MES PROJETS</Link>
                    <Link className='links' to='/resolution'>RESOLUTION</Link>
                    <Link className='links' to='/connexion'>CONNEXION</Link>
                </div>
                <button onClick={()=> setShowMenu(!showMenu) }>
                <FaList/>
                </button>
            </div>    
            <div className='nav-logo'>
                <input type="text" placeholder='Search...' />
                <button><FaSearch /></button>
            </div>    
        </nav>
    )
}

export default Navbar
