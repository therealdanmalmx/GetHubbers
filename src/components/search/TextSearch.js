import React, { useState } from 'react'

function TextSearch(props) {

    return (
    <span className="search"> 
        <h3 style={textSearchStyle}>Leta efter kodare</h3>
        <input className="searchBox" type="text" value={props.region} onChange={props.onType} placeholder=" En av Sveriges 20 största städer. Eller lämna tomt för hela landet"/>
        <input className="btn" type="submit" value="Sök" style={{fontWeight: 'bold'}}/>
    </span>
    )
}

const textSearchStyle = {
    verticalAlign: 'middle', 
    paddingTop: '3rem', 
    color: '#F7F9F9',  
    marginBottom: '3rem', 
    textTransform: 'uppercase', 
    textShadow: '1px 1px 5px black', 
    fontSize: '2rem'
}


export default TextSearch

