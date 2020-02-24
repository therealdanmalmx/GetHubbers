import React from 'react'

function FrameworkSearch(props) {

    return (
    <span  className="langCheck">
        <span>
            <span className="sideBox">
                <input type="text" id="lang" style={{display: 'none'}}/>
                <label htmlFor="lang">Ramverk
                <h6>(tillval)</h6>
                </label>
            </span>
            <span style={boxStyle}>
            <input type="checkbox" value='angular' onChange={props.onChangeFrame} name="angular" id="angular" style={{display: 'none'}}/>
                <label htmlFor="angular" className="devicon-angularjs-plain text-lg" style={{cursor: 'pointer', hover:'JavaScript'}}>
                    <p className="logoFontSize">Angular</p></label>
                <input type="checkbox" value='react' onChange={props.onChangeFrame} name='react' id="react" style={{display: 'none'}}/>
                <label htmlFor="react" className="devicon-react-original text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">React</p></label>
                <input type="checkbox" value='.net' onChange={props.onChangeFrame} name="dotnet" id="dotnet" style={{display: 'none'}}/>
                <label htmlFor="dotnet" className="devicon-dot-net-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">.NET</p>
                </label>
                <input type="checkbox" value='laravel' onChange={props.onChangeFrame} name="laravel" id="laravel" style={{display: 'none'}}/>
                <label htmlFor="laravel" className="devicon-laravel-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Laravel</p>
                </label>
                <input type="checkbox" value='django' onChange={props.onChangeFrame} name="django" id="django" style={{display: 'none'}}/>
                <label htmlFor="django" className="devicon-django-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Django</p>
                </label>
            </span>
        </span>
    </span>
    )
}

const boxStyle = {
    paddingTop: '.5rem',
    width: '65%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto'
}



export default FrameworkSearch

