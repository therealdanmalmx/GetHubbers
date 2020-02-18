import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <div style={navbarStyle}>
            <div className="logoText">
            <h1 style={logoText}>GetHubbers</h1>
            <p style={logoText}>Hitta kodare där kodare är</p> 
            </div>
            <div style={ghLogo}>
                <i className="fab fa-github"></i>
            </div>
        </div>
    )
}

const navbarStyle = {
    overflow: 'hidden',
    backgroundColor: '#1000FF',
    backgroundImage: 'URL(src/assets/coder.jpg) center/center',
    opacity: '.6',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:' 0rem 2rem',
    zIndex: '1',
    width: '100vw',
}

const logoText = {
    color: '#F1C40F',
    margin: '0',
    padding: '0',
    textTransform: 'uppercase',
    textAlign:'left'
}

const ghLogo = {
    color: '#F1C40F',
    fontSize: '5rem'
}

Navbar.propTypes = {

}

export default Navbar

    
