import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n'


const changeCountry = (e) => {

    const country = e.target.value.split(",")[0]
    const language = e.target.value.split(",")[1].replace(" ", "");

    i18n.changeLanguage(language);
    localStorage.setItem('countryName', country);
    console.log('name',  country);

}

const Footer = () => {

    useState((language) => {
        i18n.changeLanguage(language);

    })
    const { t } = useTranslation();
    return (
        <div id="footer">
            <select
                className="choose-country"
                value={localStorage.getItem('i18nextLang')}
                id="country"
                size="1"
                onChange={changeCountry}
            >
                <option value="United Kingdom, en">{t('uk')}</option>
                <option value="Portugal, pt">{t('portugal')}</option>
                <option value="Sweden, se">{t('sweden')}</option>
            </select>
        </div>
    )
}

export default Footer
