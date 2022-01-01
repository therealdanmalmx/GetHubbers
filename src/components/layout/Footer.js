import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import i18n from '../../i18n'



function Footer() {
    const [countryName, setCountryName] = useState('');

    const { t } = useTranslation();
    
    const changeCountry = (e) => {

        // let hiddenInput = document.querySelector('.input-hidden');
        let hiddenInput = document.querySelector('input[type="radio"]:checked');
        console.log('inputType', hiddenInput)
        if (hiddenInput.checked === true) {
            hiddenInput.disabled = true;
            
        } else {
            hiddenInput.disabled = false;
        }
        
        i18n.changeLanguage(e.target.value);
        setCountryName(localStorage.setItem('countryName', e.target.id)) ;
        window.location.reload();
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
                    <label htmlFor="United Kingdom">
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
                <label htmlFor="Portugal">
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
                <label htmlFor="Sweden">
                <img 
                    src="https://hatscripts.github.io/circle-flags/flags/se.svg" 
                    alt="Sweden's flag as a cirlcle" />
                </label>
            </div>
        </div>
    )
}

export default Footer
