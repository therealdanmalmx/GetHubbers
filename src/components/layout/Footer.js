import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n'



const Footer = () => {
    const [countryName, setCountryName] = useState('');
    
    // useEffect(() =>{
    //     localStorage.setItem('countryName', country)
    // })
    const { t } = useTranslation();
    
    const changeCountry = (e) => {

        let hiddenInput = document.querySelector('.input-hidden');
        if (hiddenInput.checked === true) {
            hiddenInput.disabled = true;
        } else {
            hiddenInput.disabled = false;
        }
     
        i18n.changeLanguage(e.target.value);
        setCountryName(localStorage.setItem('countryName', e.target.id)) ;
    }
    return (
        <div id="footer">
            <div className="flags">
                <h4 style={{color: 'white'}}>{t('chooseCountry')}:</h4>
                <div>
                    <input 
                        type="radio" 
                        name="country" 
                        id="United Kingdom" 
                        className="input-hidden" 
                        onClick={changeCountry} 
                        value="en"
                    />
                    <label for="United Kingdom">
                    <img 
                        src="https://hatscripts.github.io/circle-flags/flags/gb.svg" 
                        alt="United Kongdom's flag as a cirlcle" />
                    </label>
                </div>
                <input 
                    type="radio" 
                    name="country" 
                    id="Portugal" 
                    className="input-hidden" 
                    onClick={changeCountry} 
                    value="pt"
                />
                <label for="Portugal">
                <img 
                    src="https://hatscripts.github.io/circle-flags/flags/pt.svg" 
                    alt="Portugal's flag as a cirlcle" />
                </label>
                <input 
                    type="radio" 
                    name="country" 
                    id="Sweden" 
                    className="input-hidden" 
                    value="se"
                    onClick={changeCountry} 
                />
                <label for="Sweden">
                <img 
                    src="https://hatscripts.github.io/circle-flags/flags/se.svg" 
                    alt="Sweden's flag as a cirlcle" />
                </label>
            </div>
        </div>
    )
}

export default Footer
