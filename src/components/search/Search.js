import React, {useState} from 'react'
import PropTypes from 'prop-types'
import tatOrter from '../../tatOrter'
import LangSearch from '../search/LanguageSearch'
import FrameSearch from '../search/FrameworkSearch'

function Search(props) {
    const [region, setRegion] = useState('');
    let [langCheck, setLangCheck] = useState('');
    let [frameCheck, setFrameCheck] = useState('');
    const [langList,setlangList] = useState([]);


    const onChangeLang = (e) => {
        langCheck = e.target;
        console.log(langCheck.checked)
        if(langCheck.checked) {
            setLangCheck(e.target.name);
        } else {
            setLangCheck('');
        }
    }

    // const addToList = (e) => {
    //     langList.forEach(x => {
    //         langList.push(e.target.name);             
    //     });
    //     langList.splice(', ')
    // }

    const onChangeFrame = (e) => {
        frameCheck = e.target;
        console.log(frameCheck.checked)
        if(frameCheck.checked) {
            setFrameCheck(e.target.name);
        } else {
            setFrameCheck('');
        }
    }

    const onType = (e) => {
        setRegion(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (langCheck === '') {
            props.showAlert('Välj minst ett programmeringspråk');
        } else if (tatOrter.includes(!region)) {
            props.showAlert(`${region} är inte en svensk tätort. Eller så är det misstavat.`);
        } else {
            props.searchRegion(langCheck, frameCheck, region);
            setRegion('');
        }
    }

    return (
        <div style={{marginTop: '1rem'}}>
            <form onSubmit={onSubmit}>
                <LangSearch onChangeLang={onChangeLang} />
                <FrameSearch onChangeFrame={onChangeFrame} />
                {/* <div className="frameCheck">
                    <h3 style={{marginTop: '1rem', marginBottom: '1rem'}}>Välj ramverk</h3>
                    <div style={boxStyle}>
                        <input type="checkbox" value='angular' onChange={onChangeFrame} name="angular" id="angular" style={{display: 'none'}}/>
                        <label htmlFor="angular" className="devicon-angularjs-plain colored text-lg" style={{cursor: 'pointer', hover:'JavaScript'}} /> 
                        <input type="checkbox" value='react' onChange={onChangeFrame} name='react' id="react" style={{display: 'none'}}/>
                        <label htmlFor="react" className="devicon-react-original colored text-lg" style={{cursor: 'pointer'}} /> 
                        <input type="checkbox" value='.net' onChange={onChangeFrame} name="dotnet" id="dotnet" style={{display: 'none'}}/>
                        <label htmlFor="dotnet" className="devicon-dot-net-plain colored text-lg" style={{cursor: 'pointer'}} /> 
                        <input type="checkbox" value='nodejs' onChange={onChangeFrame} name="nodejs" id="nodejs" style={{display: 'none'}}/>
                        <label htmlFor="nodejs" className="devicon-nodejs-plain colored text-lg" style={{cursor: 'pointer'}} />
                    </div>

                </div> */}
                <div className="search"> 
                    <h3 style={{marginTop: '1.5rem', marginBottom: '1rem'}}>Leta efter kodare</h3>
                    <input className="searchBox" type="text" value={region} onChange={onType} placeholder="Ort i Sverige (eller lämna tomt för hela landet)"/>
                    <input className="btn btn-block" type="submit" value="Sök" style={{fontWeight: 'bold'}}/>
                </div>
            </form>
        </div>
    )
}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired,
    searchRegion: PropTypes.func.isRequired,

}
const boxStyle = {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto'
}

export default Search

