import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextSearch(props) {


    return (
        <div className="search"> 
        <h3 style={{marginTop: '1.5rem', marginBottom: '1rem'}}>Leta efter kodare i</h3>
        <input className="searchBox" type="text" value={props.region} onChange={props.onType} placeholder="Ort i Sverige (eller lämna tomt för hela landet)"/>
        <input className="btn btn-block" type="submit" value="Sök" style={{fontWeight: 'bold'}}/>
    </div>

)
}


export default TextSearch

