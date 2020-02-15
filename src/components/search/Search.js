import React, {useState} from 'react'
import PropTypes from 'prop-types'

function Search(props) {
    const [region, setRegion] = useState('');
    let [langCheck, setLangCheck] = useState('');
    const [langList,setlangList] = useState([]);

    const onChangeLang = (e) => {
        langCheck = e.target;
        if(langCheck.checked) {
            setLangCheck(langCheck.name);
        } else if(!langCheck.checked) {
            langCheck.name = ''
            setLangCheck('');
        }
        // if(e.target.checked) {
        //     langCheck = e.target.name;
        //     console.log(langCheck)
        // } else  {
        //     console.log('Choose a lang')
        // }
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     props.searchLanguage(langCheck);
    //     setLangCheck('')

    // }

    
    // const addToList = (e) => {
    //     langList.forEach(x => {
    //         langList.push(e.target.name);             
    //     });
    //     langList.splice(', ')

    // }



    const onType = (e) => {
        setRegion(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.searchRegion(region, langCheck);
        setRegion('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}> 
            <h3 style={{marginBottom: '1rem'}}>Välj språk</h3>
            <div style={boxStyle}>
                <label htmlFor="javascript">JavaScript: 
                    <input className="cbox" type="checkbox" value={langList.name} onChange={onChangeLang} name="javascript" id="js"/>
                </label>
                <label htmlFor="c#">C#: 
                    <input className="cbox" type="checkbox" value={langList} onChange={onChangeLang} name="c#" id="csharp"/>
                </label>
                <label htmlFor="java">Java: 
                    <input className="cbox" type="checkbox" value={langList} onChange={onChangeLang} name="java" id="java"/>
                </label>
                <label htmlFor="kotlin">Kotlin: 
                    <input className="cbox" type="checkbox" value={langCheck} onChange={onChangeLang} name="kotlin" id="kotlin"/>
                </label>
            </div>
        </form>
        <form onSubmit={onSubmit} className="form">
            <h3 style={{marginTop: '1.5rem', marginBottom: '1rem'}}>Leta efter kodare</h3>
            <input className="searchBox" type="text" value={region} onChange={onType} placeholder="Ort i Sverige (eller lämna tomt för hela landet)"/>
            <input className="btn btn-block" type="submit" value="Leta" style={{fontWeight: 'bold'}}/>
        </form>
        </div>
    )
}

Search.propTypes = {

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

