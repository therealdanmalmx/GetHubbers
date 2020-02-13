import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App(prps) {
const [users, setUsers] = useState([]);    
const [text, setText] = useState('');    

const onChange = (e) => {
    setText(e.target.value)
}

    return ( 
        <div className = "App" >
            <h1 style={{margin: 0, textTransform: 'uppercase', textAlign: 'center' }}>GetHubber</h1>
            <p style={{margin: 0, textTransform: 'uppercase', textAlign: 'center'  }}>Hitta kodare där kodare är</p> 
            <div className="max">
                <i className="fab fa-github"></i>
            </div>
            <div className="alignCenter">
                <h3>Välj ett eller flera programmeringspråk</h3>
                <label className="label"  htmlFor="JavaScript">JavaScript: </label>
                <input className="cbox" type="checkbox" name="JavaScript" id="js"/>
                <label className="label"  htmlFor="csharp">C#: </label>
                <input className="cbox" type="checkbox" name="C#" id="csharp"/>
                <label className="label"  htmlFor="java">Java: </label>
                <input className="cbox" type="checkbox" name="Java" id="java"/>
                <label className="label"  htmlFor="kotlin">Kotlin: </label>
                <input className="cbox" type="checkbox" name="Kotlin" id="kotlin"/>
                <label className="label"  htmlFor="dotnet">.NET: </label>
                <input className="cbox" type="checkbox" name=".NET" id="dotnet"/>
            </div>
            <form className="form">
                <input className= "searchForm" type="text" value={text} onChange={onChange} placeholder="Skriv en ort att söka på (eller lämna tomt för hela sverige)"/>
            </form>
            
        </div >

        
    );

    useEffect = async (text) => {
        const res = await axios.get(`https://api.github.com/users?${text}&client_id=${process.env.REACT_APP_GH_CID}&client_secret=${process.env.RACT_APP_GH_CSC}`)
        setUsers(res.data.items)
    }  


}

export default App;