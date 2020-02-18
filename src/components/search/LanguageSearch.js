import React, {useState} from 'react'
import PropTypes from 'prop-types'

function Languagesearch(props) {
 
    return (
        <div className="langCheck">
        <h3 >Välj språk</h3>
        <h6 style={{marginBottom: '1rem', color: '#F1948A'}}>(minst ett är obligatoriskt)</h6>
        <div style={boxStyle}>
            <input type="checkbox" value="javascript" onChange={props.onChangeLang} name="javascript" id="js" style={{display: 'none'}}/>
            <label htmlFor="js" className="devicon-javascript-plain colored text-lg" style={{cursor: 'pointer'}} />
            <input type="checkbox" value="c#" onChange={props.onChangeLang} name="c#" id="csharp" style={{display: 'none'}}/>
            <label htmlFor="csharp"className="devicon-csharp-plain colored text-lg" style={{cursor: 'pointer'}} />
            <input type="checkbox" value="java" onChange={props.onChangeLang} name="java" id="java" style={{display: 'none'}}/>
            <label htmlFor="java" className="devicon-java-plain colored text-lg" style={{cursor: 'pointer'}} />
            <input type="checkbox" value="python" onChange={props.onChangeLang} name="python" id="python" style={{display: 'none'}}/>
            <label htmlFor="python" className="devicon-python-plain colored text-lg" style={{cursor: 'pointer'}}/>
        </div>
    </div>
    )
}

const boxStyle = {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto'
}

Languagesearch.propTypes = {

}

export default Languagesearch

