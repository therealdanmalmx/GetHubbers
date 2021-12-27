import React, { useState } from 'react'
import citiesSweden from '../../citiesSweden'
import CodeSearch from '../search/CodeSearch'
import TextSearch from '../search/TextSearch'
import { useHistory } from 'react-router-dom'
import { useTranslation} from 'react-i18next'


function Search(props) {

    const { t } = useTranslation();

    let [region, setRegion] = useState('');
    let [codeCheck, setCodeCheck] = useState('');
    let [codeList] = useState([]);

    let history = useHistory();

    let countryName = localStorage.getItem("countryName");

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

    const onType = (e) => {
        setRegion(e.target.value)
    }

    const onSubmit = async (e) => {

        console.log(e.target.value)
        e.preventDefault();
        if (!codeCheck || codeList === undefined || codeList.length === 0) {
            props.showAlert(t('showAlertCode'));
        } else if (region && !citiesSweden.includes(region)) {
            props.showAlert(`${region} ${t('showAlertRegion_1')} ${countryName === "United Kingdom" ? `the ${countryName}` : countryName}. ${t('showAlertRegion_2')}`);
        } else {
            console.log('props.searchRegion', await props.searchRegion());
            props.searchRegion(codeList.join('+'), region);
            history.push('/profiles')
        }

    }

    return (

        <div>
            <form onSubmit={onSubmit}>
                <div className="searchBar">
                    <CodeSearch onChangeCode={onChangeCode} />
                </div>
                <div>
                    <TextSearch onType={onType} />
                </div>
            </form>
        </div>
    )
}

export default Search

