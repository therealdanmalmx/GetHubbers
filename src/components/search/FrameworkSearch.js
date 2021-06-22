import React from 'react'

function FrameworkSearch(props) {

    return (
        <span>
            <span className="sideBox">
                <input type="text" id="lang" style={{display: 'none'}}/>
                <label htmlFor="lang">Ramverk
                </label>
            </span>
            <span className='logoStyle'>
                <input type="checkbox" value='angular' onChange={props.onChangeFrame} name="angular js" id="angular" style={{display: 'none'}}/>
                <label htmlFor="angular" className="devicon-angularjs-plain text-lg" style={{cursor: 'pointer', hover:'JavaScript'}}>
                    <p className="logoFontSize">Angular</p>
                </label>
                    <input type="checkbox" value='django' onChange={props.onChangeFrame} name="django" id="django" style={{display: 'none'}}/>
                    <label htmlFor="django" className="devicon-django-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Django</p>
                </label>
                {/* <input type="checkbox" value='electron' onChange={props.onChangeFrame} name="electron" id="electron" style={{display: 'none'}}/>
                    <label htmlFor="electron" className="devicon-electron-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Electron</p>
                </label> */}
                <input type="checkbox" value='express' onChange={props.onChangeFrame} name="express node" id="express" style={{display: 'none'}}/>
                    <label htmlFor="express" className="devicon-express-original text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Express</p>
                </label>
                <input type="checkbox" value='laravel' onChange={props.onChangeFrame} name="laravel" id="laravel" style={{display: 'none'}}/>
                <label htmlFor="laravel" className="devicon-laravel-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Laravel</p>
                </label>
                <input type="checkbox" value='.net' onChange={props.onChangeFrame} name="asp" id="dotnet" style={{display: 'none'}}/>
                <label htmlFor="dotnet" className="devicon-dot-net-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">.NET</p>
                </label>
                <input type="checkbox" value='rails' onChange={props.onChangeFrame} name="ruby on rails" id="rails" style={{display: 'none'}}/>
                    <label htmlFor="rails" className="devicon-rails-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Rails</p>
                </label>
                <input type="checkbox" value='react' onChange={props.onChangeFrame} name='react js' id="react" style={{display: 'none'}}/>
                <label htmlFor="react" className="devicon-react-original text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">React</p>
                </label>
                <input type="checkbox" value='spring' onChange={props.onChangeFrame} name="spring boot" id="spring" style={{display: 'none'}}/>
                <label htmlFor="spring" style={{cursor: 'pointer'}} >
                    <img src={require('../../assets/SpringLogo.png')} alt="Logo for the Spring framework" style={{height: '30px'}}/>
                    <p style={{ margin: '.05rem 0', fontSize: '1rem', opacity: '0.7' }}>Spring</p>
                </label>
                <input type="checkbox" value='vue' onChange={props.onChangeFrame} name="vue" id="vue" style={{display: 'none'}}/>
                <label htmlFor="vue" className="devicon-vuejs-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Vue</p>
                </label>
            </span>
        </span>
    )
}

// const boxStyle = {
//     padding: '1rem 0',
//     width: '80%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     textAlign: 'center',
//     margin: 'auto'
// }

export default FrameworkSearch