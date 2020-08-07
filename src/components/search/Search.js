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
        console.log(langCheck.checked)
        if(langCheck.checked) {
            setLangCheck(langList.push(e.target.name));
        } else if(!langCheck.checked) {
            switch (e.target.name) {
                case "c": 
                    langList.splice("c", 1)
                    break;
                case "javascript": 
                    langList.splice("javascript", 1)
                    break;
                case "csharp": 
                    langList.splice("csharp", 1)
                    break;
                case "c++": 
                    langList.splice("c++", 1)
                    break;
                case "java": 
                    langList.splice("java", 1)
                    break;
                case "python": 
                    langList.splice("python", 1)
                    break;
                case "php": 
                    langList.splice("php", 1)
                    break;
                case "go": 
                    langList.splice("go", 1)
                    break;
                case "kotlin": 
                    langList.splice("kotlin", 1)
                    break;
                case "ruby": 
                    langList.splice("ruby", 1)
                    break;
                case "swift": 
                    langList.splice("swift", 1)
                    break;
            
                default:
                    break;
            }
        }
    }

    const onChangeFrame = (e) => {
        frameCheck = e.target;
        console.log(frameCheck.checked)
        if(frameCheck.checked) {
            setFrameCheck(frameList.push(e.target.name));
        }  else if(!frameCheck.checked) {
            switch (e.target.name) {
                case "angular": 
                    langList.splice("angular", 1)
                    break;
                case "react": 
                    langList.splice("react", 1)
                    break;
                case "vue": 
                    langList.splice("vue", 1)
                    break;
                case "express": 
                    langList.splice("express", 1)
                    break;
                case "asp": 
                    langList.splice("asp", 1)
                    break;
                case "laravel": 
                    langList.splice("laravel", 1)
                    break;
                case "django": 
                    langList.splice("django", 1)
                    break;
                case "rails": 
                    langList.splice("rails", 1)
                    break;
                case "springs": 
                    langList.splice("springs", 1)
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
        if (!langCheck && !frameCheck) { 
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
                <div className="choiceChange">
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

