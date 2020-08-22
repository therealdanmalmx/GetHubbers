import React, {useState} from 'react'
import tatOrter from '../../tatOrter'
import LangSearch from '../search/LanguageSearch'
import FrameSearch from '../search/FrameworkSearch'
import TextSearch from '../search/TextSearch'
import { useHistory } from 'react-router-dom'

function Search(props) {
    let [region, setRegion] = useState('');
    let [langCheck, setLangCheck] = useState('');
    let [frameCheck, setFrameCheck] = useState('');
    let [langList, setLangList] = useState([]);
    let [frameList, setframeList] = useState([]);

    let history = useHistory();

    
    const onChangeLang = (e) => {
        langCheck = e.target;
        if(langCheck.checked && !langList.includes(e.target.name)) {
            setLangCheck(langList.push(e.target.name));
            console.log(langList);
        } else if(!langCheck.checked) {
            console.log(langList);
            switch (e.target.name) {
                case e.target.name: 
                    const removeLang = langList.indexOf(e.target.name)
                    langList.splice(removeLang, 1)
                    console.log(langList);
                    break;
            
                default:
                    break;
            }
        }
    }

    const onChangeFrame = (e) => {
        frameCheck = e.target;
        if(frameCheck.checked && !frameList.includes(e.target.name)) {
            setFrameCheck(frameList.push(e.target.name));
            console.log(frameList);
        }  else if(!frameCheck.checked) {
            switch (e.target.name) {
                case e.target.name: 
                    const removeFrame = frameList.indexOf(e.target.name)
                    frameList.splice(removeFrame, 1)
                    console.log(frameList);
                    break;
            
                default:
                    break;
            }
        }
    }

    const onType = (e) => {
        setRegion(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!langCheck && !frameCheck || langList === undefined && frameList === undefined || langList.length === 0 && frameList.length === 0 ) { 
            props.showAlert('Välj minst ett programmeringspråk och / eller ramverk');
        } else if (region && !tatOrter.includes(region)) {
            props.showAlert(`${region} är inte en av Sveriges 20 största städer. Eller så är det misstavat.`);
        } 
        // else if(!res) {
        //     props.showAlert('Hittade inga profiler, Gör ett nytt val');
        // }
        else {
            props.searchRegion(langList.join('+'), frameList.join('+'), region);
            history.push('/profiles')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="searchBar">
                <LangSearch onChangeLang={onChangeLang} />
                <FrameSearch onChangeFrame={onChangeFrame} />
                </div>
                <div>
                <TextSearch onType={onType} />
                </div>
            </form>
        </div>
    )
}

export default Search

