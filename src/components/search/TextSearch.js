import React, { useState } from 'react';
import { useTranslation} from 'react-i18next';

function TextSearch(props) {
    const [countryName, setCountryName] = useState({})
    const { t } = useTranslation();

    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=bfbc4a6b5ce64f489ec7d7073fcca80e&lang=de', {
        method: 'GET'
      })
      .then(function(response) { return response.json(); })
      .then(function(json) {
        // use the json
        setCountryName(json.country_name);
        console.log('country', countryName);
      });
    return (

    <span className="search">
        <h3 style={textSearchStyle}>{t('searchCoders').toLowerCase}</h3>
        <input className="searchBox" type="text" value={props.region} onChange={props.onType} placeholder={`${t('citiesList_1')} ${countryName === "United Kingdom" ? `the ${countryName}` : countryName}. ${t('citiesList_2')}`} />
        <input className="btn" type="submit" value={t('searchButton')} style={{fontWeight: 'bold'}}/>
    </span>
    )
}

const textSearchStyle = {
    verticalAlign: 'middle',
    paddingTop: '3rem',
    color: '#F7F9F9',
    marginBottom: '3rem',
    textTransform: 'uppercase',
    textShadow: '1px 1px 5px black',
    fontSize: '2rem'
}


export default TextSearch

