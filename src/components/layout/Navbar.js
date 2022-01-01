import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation} from 'react-i18next'

function Navbar(props) {
    const { t } = useTranslation();

    return (
        <div style={navbarStyle}>
            <Link to='/' className="navbar">
            <h1 style={logoText}>GetHubbers</h1>
            <p style={logoText}>{t('logoText')}</p>
            </Link>
            <div>
                <Link to='/'> <img className="logo" src={require('../../assets/gethubberslogo_s.png')} alt="GetHubber's logo" /></Link>
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
    height: '150px',
    maxHeight: '130px',
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


