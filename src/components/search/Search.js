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
        if(langCheck.checked && !langList.includes(e.target.name)) {
            setLangCheck(langList.push(e.target.name));
            console.log(langList)
        } else if(!langCheck.checked) {
            switch (e.target.name) {
                case "c": 
                    const c = langList.indexOf('c')
                    langList.splice(c, 1)
                    break;
                case "javascript": 
                    const javascript = langList.indexOf('javascript')
                    langList.splice(javascript, 1)
                    break;
                case "csharp": 
                    const csharp = langList.indexOf('csharp')
                    langList.splice(csharp, 1)
                    break;
                case "c++": 
                    const cplusplus = langList.indexOf('c++')
                    langList.splice(cplusplus, 1)
                    break;
                case "java": 
                    const java = langList.indexOf('java')
                    langList.splice(java, 1)   
                    break;
                case "python": 
                    const python = langList.indexOf('python')
                    langList.splice(python, 1)
                    break;
                case "php": 
                    const php = langList.indexOf('php')
                    langList.splice(php, 1)
                    break;
                case "go": 
                    const go = langList.indexOf('go')
                    langList.splice(go, 1)
                    break;
                case "kotlin": 
                    const kotlin = langList.indexOf('kotlin')
                    langList.splice(kotlin, 1)
                    break;
                case "ruby": 
                    const ruby = langList.indexOf('ruby')
                    langList.splice(ruby, 1)
                    break;
                case "swift": 
                    const swift = langList.indexOf('swift')
                    langList.splice(swift, 1)
                    break;
            
                default:
                    break;
            }
        }
    }

    const onChangeFrame = (e) => {
        frameCheck = e.target;
        console.log(frameCheck.checked)
        if(frameCheck.checked && !frameList.includes(e.target.name)) {
            setFrameCheck(frameList.push(e.target.name));
            console.log(frameList)
        }  else if(!frameCheck.checked) {
            switch (e.target.name) {
                case "angular js": 
                    const angular = langList.indexOf('angular js')
                    frameList.splice(angular, 1)
                    break;
                case "django": 
                    const django = frameList.indexOf('django')
                    frameList.splice(django, 1)
                    break;
                case "express node": 
                    const express = frameList.indexOf('express node')
                    console.log(express)
                    frameList.splice(express, 1)
                    break;
                case "laravel": 
                    const laravel = frameList.indexOf('laravel')
                    frameList.splice(laravel, 1)
                    break;
                    case "asp": 
                    const asp = frameList.indexOf('asp')
                    frameList.splice(asp, 1)
                    break;
                    case "ruby on rails": 
                    const rails = frameList.indexOf('ruby on rails')
                    frameList.splice(rails, 1)
                    break;
                case "react js": 
                    const react = frameList.indexOf('react js')
                    frameList.splice(react, 1)
                    break;
                case "spring boot": 
                    const springs = frameList.indexOf('spring boot')
                    frameList.splice(springs, 1)
                    break;
                case "vue": 
                    const vue = frameList.indexOf('vue')
                    frameList.splice(vue, 1)
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

