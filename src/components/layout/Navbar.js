import React from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div style={navbarStyle}>
            <div>
            <h1 style={logoText}>GetHubbers</h1>
            <p style={logoText}>Hitta kodare där kodare är</p> 
            </div>
            <div>
                {/* <Link to='/'><i class="fas fa-laptop-code"></i></Link>  */}
                <Link to='/'> <img src={require('../../assets/gethubberslogo_s.png')} alt="Logo for the Kotlin language" /></Link> 
            </div>
        </div>
    )
}

const navbarStyle = {
    position: 'fixed',
    top: '0',
    width: '100%',
    backgroundColor: '#212F3D',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:' .5rem 2rem',
    zIndex: '1',
}

const logoText = {
    color: '#D7DBDD',
    margin: '0',
    padding: '0',
    textTransform: 'uppercase',
    textAlign:'left'
}

export default Navbar

    
