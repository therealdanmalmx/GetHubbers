import { useState } from 'react';
function setName(country) {
    localStorage.setItem('countryName', country)
}

const getCountry = () => {
    // const [countryName, setCountryName] = useState('');


    let language = localStorage.getItem('i18nextLng');

    switch (language) {
        case 'se': 
            return setName('Sweden');
            break;
        case 'pt': 
            return setName('Portugal');
            break;
        case 'en': 
            return setName('United Kingdom');
            break;
    }

}

export default getCountry
