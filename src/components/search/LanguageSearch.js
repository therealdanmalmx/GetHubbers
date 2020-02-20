import React, {useState} from 'react'
import PropTypes from 'prop-types'

function Languagesearch(props) {
 
    return (
        <div className="langCheck" style={{marginLeft: '1rem', marginTop: '0.5rem'}}>
            <h3>Språk <span style={{display: 'inline', fontSize: '.8rem', color: '#F1948A'}}>(obligatoriskt)</span></h3>
        <div style={boxStyle}>
            <input type="checkbox" value="javascript" onChange={props.onChangeLang} name="javascript" id="js" style={{display: 'none'}}/>
            <label htmlFor="js" className="devicon-javascript-plain colored text-lg" style={{cursor: 'pointer'}} >
                <p className="logoFontSize">JavaScript</p>
            </label>
            <input type="checkbox" value="c#" onChange={props.onChangeLang} name="c#" id="csharp" style={{display: 'none'}}/>
            <label htmlFor="csharp"className="devicon-csharp-plain colored text-lg" style={{cursor: 'pointer'}}>
                <p className="logoFontSize">Csharp</p>
            </label>
            <input type="checkbox" value="java" onChange={props.onChangeLang} name="java" id="java" style={{display: 'none'}}/>
            <label htmlFor="java" className="devicon-java-plain colored text-lg" style={{cursor: 'pointer'}} >
                <p className="logoFontSize">Java</p>
            </label>
            <input type="checkbox" value="python" onChange={props.onChangeLang} name="python" id="python" style={{display: 'none'}}/>
            <label htmlFor="python" className="devicon-python-plain colored text-lg" style={{cursor: 'pointer'}}>
                <p className="logoFontSize">Python</p>
            </label>
            <input type="checkbox" value="php" onChange={props.onChangeLang} name="php" id="php" style={{display: 'none'}}/>
            <label htmlFor="php" className="devicon-php-plain colored text-lg" style={{cursor: 'pointer'}}>
                <p className="logoFontSize">PHP</p>
            </label>
        </div>
    </div>
    )
}

const boxStyle = {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto'
}

Languagesearch.propTypes = {

}

export default Languagesearch

