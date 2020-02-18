import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Navbar from "./components/layout/Navbar";
import Langsearch from "./components/search/LanguageSearch";
import Textsearch from "./components/search/TextSearch";
import Frameworksearch from "./components/search/FrameworkSearch";
import Search from "./components/search/Search";
import Alert from "./components/layout/Alert";
import tatOrter from '../src/tatOrter'

function App(props) {
const [users, setUsers] = useState([]);    
const [alert, setAlert] = useState(null);    

const searchRegion = async (langCheck, frameCheck, region) => {
    console.log(region);
    console.log(langCheck);
    console.log(frameCheck);

    if(tatOrter.includes(region) || region === '') {
            const res = await axios.get(`https://api.github.com/search/users?q=language:${langCheck && frameCheck ? `${langCheck}+${frameCheck}` : langCheck }+location:${region ? region : 'sweden'}&client_id=${process.env.REACT_APP_GH_CID}&client_secret=${process.env.REACT_APP_GH_CSC}`)
            setUsers(res.data.items)
            console.log(res.data.items)
        } 
}

const showAlert = (msg) => {
    setAlert({msg});
    setTimeout(() => setAlert(null), 10000);
}

const closeAlert = () => {
    setAlert(null);
}

    return ( 
        <div className = "App" >
            <Navbar />
            <Alert alert={alert} closeAlert={closeAlert}/>

            <div className="container">
                <Search searchRegion={searchRegion} showAlert={showAlert} />
                {/* <Langsearch searchLanguage={searchRegion}/>
                <Frameworksearch />
                <Textsearch searchRegion={searchRegion} /> */}
            </div>            
        </div >
        
    );


}

export default App;