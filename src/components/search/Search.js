import React, {useState} from 'react'
import PropTypes from 'prop-types'

function Search(props) {
    const [region, setRegion] = useState('');
    let [langCheck, setLangCheck] = useState('');
    const [langList,setlangList] = useState([]);

    const onChangeLang = (e) => {
        langCheck = e.target;
        console.log(langCheck.checked)
        if(langCheck.checked) {
            setLangCheck(e.target.value);
        } else if(!langCheck.checked) {
            setLangCheck('');
        }
       
    }

    const onType = (e) => {
        setRegion(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!langCheck.checked) {
            props.showAlert('Välj minst ett språk', 'danger');
            console.log('No candosky');
        } else {
            props.searchRegion(langCheck, region);
            setRegion('');
            setLangCheck('');
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}> 
            <h3 style={{marginBottom: '1rem'}}>Välj språk</h3>
            <div style={boxStyle}>
                <label>JavaScript: 
                    <input className="cbox" type="checkbox" value="javascript" onChange={onChangeLang} name="javascript" id="js"/>
                </label>
                <label>C#: 
                    <input className="cbox" type="checkbox" value="c#" onChange={onChangeLang} name="c#" id="csharp"/>
                </label>
                <label>Java: 
                    <input className="cbox" type="checkbox" value="java" onChange={onChangeLang} name="java" id="java"/>
                </label>
                <label>Kotlin: 
                    <input className="cbox" type="checkbox" value="kotlin" onChange={onChangeLang} name="kotlin" id="kotlin"/>
                </label>
            </div>
            <div>
                <h3 style={{marginTop: '1.5rem', marginBottom: '1rem'}}>Leta efter kodare</h3>
                <input className="searchBox" type="text" value={region} onChange={onType} placeholder="Ort i Sverige (eller lämna tomt för hela landet)"/>
                <input className="btn btn-block" type="submit" value="Leta" style={{fontWeight: 'bold'}}/>
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

