import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n'
import { CircleFlag } from 'react-circle-flags'
const changeCountry = (e) => {

    const country = e.target.value.split(",")[0]
    const language = e.target.value.split(",")[1].replace(" ", "");

    i18n.changeLanguage(language);
    localStorage.setItem('countryName', country);

}


const Footer = () => {
    const { t } = useTranslation();

    return (
        <div id="footer">
            <div className="flags">
                <h4 style={{color: 'white'}}>{t('chooseCountry')}:</h4>
                <input type="image" src="https://hatscripts.github.io/circle-flags/flags/gb.svg" title={t('uk')} width="30" style={{marginLeft: '10px'}} onClick={changeCountry} value="United Kingdom, en" />
                <input type="image" src="https://hatscripts.github.io/circle-flags/flags/pt.svg" title={t('portugal')} width="30" style={{marginLeft: '10px'}} onClick={changeCountry} value="Portugal, pt" />
                <input type="image" src="https://hatscripts.github.io/circle-flags/flags/se.svg" title={t('sweden')} width="30" style={{marginLeft: '10px'}} onClick={changeCountry} value="Sweden, se" />

            </div>
            {/* <span class="fib fi-pt"><button onClick={changeCountry} value="Portugal, pt">{t('portugal')}</button></span> 
            <span class="fib fi-se"><button onClick={changeCountry} value="Sweden, se">{t('sweden')}</button></span>  */}
            {/* <button onClick={changeCountry} class="fib fi-pt" value="Portugal, pt">{t('portugal')}</button>
            <button onClick={changeCountry} class="fib fi-se" value="Sweden, se">{t('sweden')}</button> */}

            {/* <select
                className="choose-country"
                style={{border: 'none', overflow: 'hidden'}}
                value={ localStorage.getItem('i18nextLang') }
                id="country"
                size="3"
                onChange={changeCountry}
            >
                <option data-imgagesrc={pt} style={{marginTop: '10px'}} value="United Kingdom, en">{t('uk')}</option>
                <option style={{marginTop: '10px'}} value="Portugal, pt">{t('portugal')}</option>
                <option style={{marginTop: '10px'}} value="Sweden, se">{t('sweden')}</option>
            </select> */}
        </div>
    )
}

export default Footer
