import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n'


const changeCountry = (country, language) => {
    return () => {
        i18n.changeLanguage(language);
        localStorage.setItem('countryName', country);
    }
}

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div id="footer">
            <button onClick={changeCountry('United Kingdom', 'en')}>{t('uk')}</button>
            <button onClick={changeCountry('Portugal', 'pt')}>{t('portugal')}</button>
            <button onClick={changeCountry('Sweden', 'se')}>{t('sweden')}</button>
            {/* <select className="choose-country" id="country" name={t('chooseCountry')} size="1">
                <option value="se">{t('sweden')}</option>
                <option value=>{t('portugal')}</option>
                <option onChange={changeCountry('Sweden', 'se')}>{t('sweden')}</option>
            </select> */}
        </div>
    )
}

export default Footer
