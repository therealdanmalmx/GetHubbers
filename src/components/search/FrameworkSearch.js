import React, {useState} from 'react'
import PropTypes from 'prop-types'

function FrameworkSearch(props) {

    const [langCheck, setLangCheck] = useState('');
    const [langList,setlangList] = useState([]);

    const onChangeLang = (e) => {
        const cb = e.target.checked;
        const cn = e.target.name;
        console.log(cb, cn, langList)
    }
    
    const addToList = (e) => {
        langList.forEach(x => {
            langList.push(e.target.name);             
        });
        langList.splice(', ')

    }
    return (
        <div>
            <form style={{marginTop: '1.5rem'}}>
            <h3 style={{marginBottom: '1rem'}}>Välj ramverk</h3>
            <div style={boxStyle}>
                <label htmlFor="angular">Angular: 
                    <input className="cbox" type="checkbox" value={langCheck} onClick={addToList} onChange={onChangeLang} name="angular" id="ng"/>
                </label>
                <label className="label"  htmlFor="react">React: 
                    <input className="cbox" type="checkbox" value={langCheck} onChange={onChangeLang} name="c#" id="csharp"/>
                </label>
                <label className="label"  htmlFor=".NET Core">.NET core: 
                    <input className="cbox" type="checkbox" value={langCheck} onChange={onChangeLang} name="dotnetcore" id="dotnetcore"/>
                </label>
                <label className="label"  htmlFor="Spring">Spring: 
                    <input className="cbox" type="checkbox" value={langCheck} onChange={onChangeLang} name="spring" id="spring"/>
                </label>
            </div>
        </form>
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

FrameworkSearch.propTypes = {

}

export default FrameworkSearch

