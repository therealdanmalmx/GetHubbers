import React from 'react'

function Languagesearch(props) {

    return (
        <span>
            <span className="sideBox">
                <input type="text" id="lang" style={{display: 'none'}}/>
                <label htmlFor="lang">Språk
                </label>
            </span>
            <span className='logoStyle'>
                <input type="checkbox" value="c" onChange={props.onChangeLang} name="c" id="c" style={{display: 'none'}}/>
                <label htmlFor="c" className="devicon-c-plain  text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">C</p>
                </label>
                <input type="checkbox" value="c++" onChange={props.onChangeLang} name="c++" id="c++" style={{display: 'none'}}/>
                <label htmlFor="c++" className="devicon-cplusplus-plain text-lg" style={{cursor: 'pointer'}}>
                    <p className="logoFontSize">C++</p>
                </label>
                <input type="checkbox" value="c#" onChange={props.onChangeLang} name="csharp" id="csharp" style={{display: 'none'}}/>
                <label htmlFor="csharp"className="devicon-csharp-plain  text-lg" style={{cursor: 'pointer'}}>
                    <p className="logoFontSize">C#</p>
                </label>
                <input type="checkbox" value="go" onChange={props.onChangeLang} name="go" id="go" style={{display: 'none'}}/>
                <label htmlFor="go" className="devicon-go-plain  text-lg" style={{cursor: 'pointer'}}>
                    <p className="logoFontSize">Go</p>
                </label>
                <input type="checkbox" value="java" onChange={props.onChangeLang} name="java" id="java" style={{display: 'none'}}/>
                <label htmlFor="java" className="devicon-java-plain  text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Java</p>
                </label>
                <input type="checkbox" value="javascript" onChange={props.onChangeLang} name="javascript" id="js" style={{display: 'none'}}/>
                <label htmlFor="js" className="devicon-javascript-plain  text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">JavaScript</p>
                </label>
                <input type="checkbox" value="kotlin" onChange={props.onChangeLang} name="kotlin" id="kotlin" style={{display: 'none'}}/>
                <label htmlFor="kotlin" style={{cursor: 'pointer'}}>
                    <img src={require('../../assets/Kotlin.png')} alt="Logo for the Kotlin language" style={{height:' 30px'}}/>
                    <p style={{ margin: '.05rem 0', fontSize: '1rem', opacity: '0.7' }}>Kotlin</p>
                </label>
                <input type="checkbox" value="php" onChange={props.onChangeLang} name="php" id="php" style={{display: 'none'}}/>
                <label htmlFor="php" className="devicon-php-plain text-lg" style={{cursor: 'pointer'}}>
                    <p className="logoFontSize">PHP</p>
                </label>
                <input type="checkbox" value="python" onChange={props.onChangeLang} name="python" id="python" style={{display: 'none'}}/>
                <label htmlFor="python" className="devicon-python-plain text-lg" style={{cursor: 'pointer'}}>
                    <p className="logoFontSize">Python</p>
                </label>
                <input type="checkbox" value="ruby" onChange={props.onChangeLang} name="ruby" id="ruby" style={{display: 'none'}}/>
                <label htmlFor="ruby" className="devicon-ruby-plain text-lg" style={{cursor: 'pointer'}}>
                    <p className="logoFontSize">Ruby</p>
                </label>
                <input type="checkbox" value="swift" onChange={props.onChangeLang} name="swift" id="swift" style={{display: 'none'}}/>
                <label htmlFor="swift" className="devicon-swift-plain text-lg" style={{cursor: 'pointer'}}>
                    <p className="logoFontSize">Swift</p>
                </label>
            </span>
        </span>
    )
}

// const boxStyle = {
//     padding: '.8rem 0',
//     // paddingTop: '.5rem',
//     width: '80%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     textAlign: 'center',
//     margin: 'auto',

// }



export default Languagesearch

