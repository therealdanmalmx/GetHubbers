import React, {useState} from 'react'

function FrameworkSearch(props) {

    return (
        <div className="frameCheck">
        <h3 style={{marginTop: '1rem', marginBottom: '1rem'}}>Välj ramverk</h3>
        <div style={boxStyle}>
            <input type="checkbox" value='angular' onChange={props.onChangeFrame} name="angular" id="angular" style={{display: 'none'}}/>
            <label htmlFor="angular" className="devicon-angularjs-plain colored text-lg" style={{cursor: 'pointer', hover:'JavaScript'}} /> 
            <input type="checkbox" value='react' onChange={props.onChangeFrame} name='react' id="react" style={{display: 'none'}}/>
            <label htmlFor="react" className="devicon-react-original colored text-lg" style={{cursor: 'pointer'}} /> 
            <input type="checkbox" value='.net' onChange={props.onChangeFrame} name="dotnet" id="dotnet" style={{display: 'none'}}/>
            <label htmlFor="dotnet" className="devicon-dot-net-plain colored text-lg" style={{cursor: 'pointer'}} /> 
            <input type="checkbox" value='nodejs' onChange={props.onChangeFrame} name="nodejs" id="nodejs" style={{display: 'none'}}/>
            <label htmlFor="nodejs" className="devicon-nodejs-plain colored text-lg" style={{cursor: 'pointer'}} />
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


export default FrameworkSearch

