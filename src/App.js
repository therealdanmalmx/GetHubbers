import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Navbar from "./components/layout/Navbar";
import Langsearch from "./components/search/LanguageSearch";
import Textsearch from "./components/search/TextSearch";
import Frameworksearch from "./components/search/FrameworkSearch";
import Search from "./components/search/Search";
import Alert from "./components/layout/Alert";

function App(props) {
const [users, setUsers] = useState([]);    
const [alert, setAlert] = useState(null);    
// const [text, setText] = useState('');
const tatOrter = ['Stockholm', 'Malmö', 'Göteborg'];

const searchRegion = async (langCheck, region) => {
    console.log(langCheck);
    console.log(region)

    if(tatOrter.includes(region) || region === '') {
            const res = await axios.get(`https://api.github.com/search/users?q=language:${langCheck}+location:${region ? region : 'sweden'}&client_id=${process.env.REACT_APP_GH_CID}&client_secret=${process.env.REACT_APP_GH_CSC}`)
            setUsers(res.data.items)
            console.log(res.data.items)
        } else {
        console.log(`${region} är inte en svensk tätort. Eller misstavat`)
    }
}

const showAlert = (msg, type) => {
    setAlert({msg: msg, type: type});
    setTimeout(() => setAlert(null), 3000);
}

    return ( 
        <div className = "App" >
            <Navbar />

            <div className="container">
                <Alert alert={alert}/>
                <Search searchRegion={searchRegion} showAlert={showAlert}/>
                {/* <Langsearch searchLanguage={searchRegion}/>
                <Frameworksearch />
                <Textsearch searchRegion={searchRegion} /> */}
            </div>            
        </div >
        
    );


}

export default App;