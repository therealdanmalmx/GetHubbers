
const getCountry = () => {
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=bfbc4a6b5ce64f489ec7d7073fcca80e', {
        method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {
            localStorage.setItem('countryName', json.country_name)
            // use the json
        });
}

export default getCountry


