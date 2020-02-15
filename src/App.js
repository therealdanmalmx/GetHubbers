import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Navbar from "./components/layout/Navbar";
import Langsearch from "./components/search/LanguageSearch";
import Textsearch from "./components/search/TextSearch";
import Frameworksearch from "./components/search/FrameworkSearch";
import Search from "./components/search/Search";

function App(props) {
const [users, setUsers] = useState([]);    
// const [text, setText] = useState('');
const tatOrter = ['Stockholm', 'Malmö', 'Göteborg'];

const searchRegion = async (region, langCheck) => {
    console.log(langCheck);
    console.log(region);

    if(tatOrter.includes(region) || region === '') {
            const res = await axios.get(`https://api.github.com/search/users?q=location:${region ? region : 'sweden'}&language:${langCheck}&client_id=${process.env.REACT_APP_GH_CID}&client_secret=${process.env.REACT_APP_GH_CSC}`)
            setUsers(res.data.items)
            console.log(res.data.items)
        } else {
        console.log(`${region} är inte en svensk tätort. Eller misstavat`)
    }
}

    return ( 
        <div className = "App" >
            <Navbar />
            <div className="bgImage">
            </div>

            <div className="container">
                <Search searchRegion={searchRegion}/>
                {/* <Langsearch searchLanguage={searchRegion}/>
                <Frameworksearch />
                <Textsearch searchRegion={searchRegion} /> */}
            </div>            
        </div >
        
    );


}

export default App;