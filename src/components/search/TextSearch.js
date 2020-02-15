import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextSearch(props) {
    const [region, setRegion] = useState('');


    const onType = (e) => {
        setRegion(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.searchRegion(region);
        setRegion('');
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <h3 style={{marginTop: '1.5rem', marginBottom: '1rem'}}>Leta efter kodare</h3>
                <input className="searchBox" type="text" value={region} onChange={onType} placeholder="Ort i Sverige (eller lämna tomt för hela landet)"/>
                <input className="btn btn-block" type="submit" value="Leta" style={{fontWeight: 'bold'}}/>
            </form>
        </div>
    )
}

TextSearch.propTypes = {

}

export default TextSearch

