import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextSearch(props) {

    return (
    <span className="search"> 
        <h3 style={{verticalAlign: 'middle', paddingTop: '3rem', color: '#F7F9F9',  marginBottom: '3rem', textTransform: 'uppercase', textShadow: '1px 1px 5px black', fontSize: '2rem'}}>Leta efter kodare</h3>
        <input className="searchBox" type="text" value={props.region} onChange={props.onType} placeholder=" En av Sveriges 20 största städer. Eller lämna tomt för hela landet"/>
        <input className="btn" type="submit" value="Sök" style={{fontWeight: 'bold'}}/>
    </span>

)
}


export default TextSearch

