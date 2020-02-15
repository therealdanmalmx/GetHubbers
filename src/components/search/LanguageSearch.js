import React, {useState} from 'react'
import PropTypes from 'prop-types'

function Languagesearch(props) {
    const [langCheck, setLangCheck] = useState('');
    const [langList,setlangList] = useState([]);

    const onChangeLang = (e) => {
        const cb = e.target.checked;
        const cn = e.target.name;
        console.log(cb, cn)
    }

    
    // const addToList = (e) => {
    //     langList.forEach(x => {
    //         langList.push(e.target.name);             
    //     });
    //     langList.splice(', ')

    // }

 
    return (
    <div className="text-center">
        <form>
            <h3 style={{marginBottom: '1rem'}}>Välj språk</h3>
            <div style={boxStyle}>
                <label htmlFor="javascript">JavaScript: 
                    <input className="cbox" type="checkbox" value={langCheck} onChange={onChangeLang} name="javascript" id="js"/>
                </label>
                <label htmlFor="c#">C#: 
                    <input className="cbox" type="checkbox" value={langCheck} onChange={onChangeLang} name="c#" id="csharp"/>
                </label>
                <label htmlFor="java">Java: 
                    <input className="cbox" type="checkbox" value={langCheck} onChange={onChangeLang} name="java" id="java"/>
                </label>
                <label htmlFor="kotlin">Kotlin: 
                    <input className="cbox" type="checkbox" value={langCheck} onChange={onChangeLang} name="kotlin" id="kotlin"/>
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

Languagesearch.propTypes = {

}

export default Languagesearch

