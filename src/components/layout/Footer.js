import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n'


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
            <select
                className="choose-country"
                style={{border: 'none', overflow: 'hidden'}}
                value={ localStorage.getItem('i18nextLang') }
                id="country"
                size="3"
                onChange={changeCountry}
            >
                <option style={{marginTop: '10px'}} value="United Kingdom, en">{t('uk')}</option>
                <option style={{marginTop: '10px'}} value="Portugal, pt">{t('portugal')}</option>
                <option style={{marginTop: '10px'}} value="Sweden, se">{t('sweden')}</option>
            </select>
        </div>
    )
}

export default Footer
