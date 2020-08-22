import React, { useState, useEffect, Fragment } from 'react';
import './App.scss';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Search from "./components/search/Search";
import Alert from "./components/layout/Alert";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profiles/Profile";
import tatOrter from '../src/tatOrter'

function App(props) {
    const [alert, setAlert] = useState(null);    
    const [profiles, setProfiles] = useState([]);
    const [profiler, setProfiler] = useState({});    

const searchRegion = async (langList, frameList, region, setAlert) => {

    if(tatOrter.includes(region) || region === '') {
        // const res = await axios.get(`https://api.github.com/search/users?q=language:${langList && frameList ? `${langList}+${frameList}` : langList ? `${langList}` : frameList ? `${frameList}` : `${langList}+${frameList}`}+location:${region ? region : 'sweden'}&client_id=${process.env.REACT_APP_GH_CID}&client_secret=${process.env.REACT_APP_GH_CSC}`)
        const res = await axios.get(`https://api.github.com/search/users?q=language:${langList ? langList : frameList ? frameList : {langList, frameList}}+location:${region ? region : 'sweden'}&client_id=${process.env.REACT_APP_GH_CID}&client_secret=${process.env.REACT_APP_GH_CSC}`)
            if(!res) {
                let msg = 'Inga profiler hittade baserat på dina val'
                console.log('No profiles')
                setAlert(msg);

            } else {
                setProfiles(res.data.items);
            }
        } 
}

const getProfile = async (login) => {
    const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GH_CID}&client_secret=${process.env.REACT_APP_GH_CSC}`)
    setProfiler(res.data);
}

const showAlert = (msg) => {
    setAlert({msg});
    setTimeout(() => [setAlert(null)], 5000);
    
}

const closeAlert = () => {
    setAlert(null);
}


    return ( 
        <Router>
            <div className = "App" >
                <Navbar />
                <Alert alert={alert} closeAlert={closeAlert}/>
                <Switch>
                    <Route exact path='/' render={props => (
                        <Fragment>
                            <Search searchRegion={searchRegion} showAlert={showAlert} profile={profiles} />
                        </Fragment>
                    )}/>
                    <Route exact path='/profiles' render={props => (
                        <Profiles {...props} profiles={profiles }/>
                    )} />
                    <Route exact path='/profile/:login' render={props => (
                        <Profile {...props} getProfile={getProfile} profiler={profiler}/>
                    )}/>
                </Switch>
            </div >
        </Router>        
    );
}

export default App;