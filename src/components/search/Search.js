import React, {useState} from 'react'
import PropTypes from 'prop-types'
import tatOrter from '../../tatOrter'
import LangSearch from '../search/LanguageSearch'
import FrameSearch from '../search/FrameworkSearch'
import TextSearch from '../search/TextSearch'

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
        } else if (region && !tatOrter.includes(region)) {
            props.showAlert(`${region} är inte en svensk tätort. Eller så är det misstavat.`);
        } else {
            props.searchRegion(langCheck, frameCheck, region);
            setRegion('');
        }

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="choiceChange">
                <LangSearch onChangeLang={onChangeLang} />
                <FrameSearch onChangeFrame={onChangeFrame} />
                </div>
                <div className="container">
                <TextSearch onType={onType} />
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

