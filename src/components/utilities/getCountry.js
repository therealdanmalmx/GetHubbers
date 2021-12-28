// import { useEffect } from 'react';

// const getCountry = () => {
    
    
//     fetch('https://api.ipgeolocation.io/ipgeo?apiKey=bfbc4a6b5ce64f489ec7d7073fcca80e', {
//         method: 'GET'
//     })
//     .then((response) => response.json())
//     .then((json) => {
//         // use the json
//         // useEffect(() => {
//             //     this.getcountry();
//             // }, [getCountry])
            
//             useEffect(() => {
//             localStorage.setItem('countryName', json.country_name)
//         })
//     });

// }





// export default getCountry


import React, { useEffect } from 'react';

function setName(lan) {
    localStorage.setItem('countryName', lan)
}

const getCountry = () => {


    let language = localStorage.getItem('i18nextLng');

    switch (language) {
        case 'se': 
            return setName('Sweden')
            break;
        case 'pt': 
            return setName('Portugal')
            break;
        case 'en': 
            return setName('United Kingdom')
            break;
    }

}

export default getCountry
