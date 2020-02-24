import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <div style={navbarStyle}>
            <div>
            <h1 style={logoText}>GetHubbers</h1>
            <p style={logoText}>Hitta kodare där kodare är</p> 
            </div>
            <div style={ghLogo}>
               <Link to='/'><i className="fab fa-github"></i></Link> 
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
    padding:' 0rem 2rem',
    zIndex: '1',
}

const logoText = {
    color: '#D7DBDD',
    margin: '0',
    padding: '0',
    textTransform: 'uppercase',
    textAlign:'left'
}

const ghLogo = {
    color: '#D7DBDD',
    fontSize: '5rem'
}

Navbar.propTypes = {

}

export default Navbar

    
