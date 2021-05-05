import React, { useState } from 'react'
import tatOrter from '../../tatOrter'
import LangSearch from '../search/LanguageSearch'
import FrameSearch from '../search/FrameworkSearch'
import CodeSearch from '../search/CodeSearch'
import TextSearch from '../search/TextSearch'
import { useHistory } from 'react-router-dom'

function Search(props) {
    let [region, setRegion] = useState('');
    let [codeCheck, setCodeCheck] = useState('');
    let [codeList, setCodeList] = useState([]);
    let [langCheck, setLangCheck] = useState('');
    let [frameCheck, setFrameCheck] = useState('');
    let [langList, setLangList] = useState([]);
    let [frameList, setframeList] = useState([]);

    let history = useHistory();

    const onChangeCode = (e) => {
        codeCheck = e.target;
        if (codeCheck.checked && !codeList.includes(e.target.name)) {
            setCodeCheck(codeList.push(e.target.name));
            console.log(codeList);
        } else if (!codeCheck.checked) {
            console.log(codeList);
            switch (e.target.name) {
                case e.target.name:
                    const removeCode = codeList.indexOf(e.target.name)
                    codeList.splice(removeCode, 1)
                    console.log(codeList);
                    break;

                default:
                    break;
            }
        }
    }
    // const onChangeLang = (e) => {
    //     langCheck = e.target;
    //     if (langCheck.checked && !langList.includes(e.target.name)) {
    //         setLangCheck(langList.push(e.target.name));
    //         console.log(langList);
    //     } else if (!langCheck.checked) {
    //         console.log(langList);
    //         switch (e.target.name) {
    //             case e.target.name:
    //                 const removeLang = langList.indexOf(e.target.name)
    //                 langList.splice(removeLang, 1)
    //                 console.log(langList);
    //                 break;

    //             default:
    //                 break;
    //         }
    //     }
    // }

    // const onChangeFrame = (e) => {
    //     frameCheck = e.target;
    //     if (frameCheck.checked && !frameList.includes(e.target.name)) {
    //         setFrameCheck(frameList.push(e.target.name));
    //         console.log(frameList);
    //     } else if (!frameCheck.checked) {
    //         switch (e.target.name) {
    //             case e.target.name:
    //                 const removeFrame = frameList.indexOf(e.target.name)
    //                 frameList.splice(removeFrame, 1)
    //                 console.log(frameList);
    //                 break;

    //             default:
    //                 break;
    //         }
    //     }
    // }

    const onType = (e) => {
        setRegion(e.target.value)
    }

    const onSubmit = (e) => {
        console.log(e.target.value)
        e.preventDefault();
        if (!codeCheck || codeList === undefined || codeList.length === 0) {
            props.showAlert('Välj minst ett språk / ramverk');
        } else if (region && !tatOrter.includes(region)) {
            props.showAlert(`${region} är inte en av Sveriges 20 största städer. Eller så är det felstavat.`);
        } else {
            props.searchRegion(codeList.join('+'), region);
            history.push('/profiles')
        }

    }
    // const onSubmit = (e) => {
    //     console.log(e.target.value)
    //     e.preventDefault();
    //     if (!langCheck && !frameCheck || langList === undefined && frameList === undefined || langList.length === 0 && frameList.length === 0) {
    //         props.showAlert('Välj minst ett språk / ramverk');
    //     } else if (region && !tatOrter.includes(region)) {
    //         props.showAlert(`${region} är inte en av Sveriges 20 största städer. Eller så är det felstavat.`);
    //     } else {
    //         props.searchRegion(langList.join('+'), frameList.join('+'), region);
    //         history.push('/profiles')
    //     }

    // }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="searchBar">
                    <CodeSearch onChangeCode={onChangeCode} />
                    {/* <LangSearch onChangeLang={onChangeLang} />
                    <FrameSearch onChangeFrame={onChangeFrame} /> */}
                </div>
                <div>
                    <TextSearch onType={onType} />
                </div>
            </form>
        </div>
    )
}

export default Search

