import React, { useEffect, useState, Fragment } from 'react';
import './App.scss';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Alert from "./components/layout/Alert";
import Footer from './components/layout/Footer';
import getCountry from './components/utilities/getCountry';
import Navbar from "./components/layout/Navbar";
import Profile from "./components/profiles/Profile";
import Profiles from "./components/profiles/Profiles";
import Search from "./components/search/Search";

// import citiesSweden from '../src/citiesSweden'
import './i18n'

function App() {
    const [alert, setAlert] = useState(null);
    const [profiles, setProfiles] = useState([]);
    const [profiler, setProfiler] = useState({});
    const [countryName, setCountryName] = useState('');  
    
    useEffect(() => {
        getCountry();

        setCountryName(localStorage.getItem('countryName'));
    }, [countryName]);

    
    const searchRegion = async (codeList, region, setAlert) => {
        if (region || region === '') {
            // const res = await axios.get(`https://api.github.com/search/users?q=language:${langList && frameList ? `${langList}+${frameList}` : langList ? `${langList}` : frameList ? `${frameList}` : `${langList}+${frameList}`}+location:${region ? region : 'sweden'}&client_id=${process.env.REACT_APP_GH_CID}&client_secret=${process.env.REACT_APP_GH_CSC}`)
            const res = await axios.get(`https://api.github.com/search/users?q=language:${codeList ?? codeList}+location:${region ? region : countryName}&client_id=${process.env.REACT_APP_GH_CID}&client_secret=${process.env.REACT_APP_GH_CSC}`)
            if (res.data.items < 1) {
                showAlert('Inga profiler hittades baserat på dina val');
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
        setAlert({ msg });
        setTimeout(() => [setAlert(null)], 5000);

    }

    const closeAlert = () => {
        setAlert(null);
    }

    return (
        <Router>
            <div className="App" >
                <Navbar />
                <Alert alert={alert} closeAlert={closeAlert} />
                <Switch>
                    <Route exact path='/' render={() => (
                        <Fragment>
                            <Search searchRegion={searchRegion} showAlert={showAlert} profile={profiles} />
                        </Fragment>
                    )} />
                    <Route exact path='/profiles' render={props => (
                        <Profiles {...props} profiles={profiles} />
                    )} />
                    <Route exact path='/profile/:login' render={props => (
                        <Profile {...props} getProfile={getProfile} profiler={profiler} />
                    )} />
                </Switch>
                <Footer />
            </div >
        </Router>
    );
}

export default App;
