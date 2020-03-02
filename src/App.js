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

const searchRegion = async (langList, frameList, region) => {

    if(tatOrter.includes(region) || region === '') {
            const res = await axios.get(`https://api.github.com/search/users?q=language:${langList && frameList ? `${langList}+${frameList}` : langList}+location:${region ? region : 'sweden'}&client_id=${process.env.REACT_APP_GH_CID}&client_secret=${process.env.REACT_APP_GH_CSC}`)
            setProfiles(res.data.items);
            console.log(res.data.items)
        } 
}

const getProfile = async (login) => {
    const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GH_CID}&client_secret=${process.env.REACT_APP_GH_CSC}`)
    setProfiler(res.data);
}

const showAlert = (msg) => {
    setAlert({msg});
    setTimeout(() => [setAlert(null), window.location.reload()], 10000);
    
}

const closeAlert = () => {
    setAlert(null);
    window.location.reload();
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