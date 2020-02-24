import React from 'react'
import { Link } from "react-router-dom";


function ProfileItem(props) {
    const {login, avatar_url, html_url} = props.profile;

    return (
    <span  className="card">
            <span>
                <img src={avatar_url} alt="" className="sideCard"/>
            </span>
            <div style={loginStyle}>
                <span>{login}</span>
            </div>
            <div>
                <Link to={`/profile/${login}`} className="profileBtn">Se profil</Link>
            </div>  
    </span>
    )
}

const loginStyle = {
    position: 'absolute',
    top: 'auto',
    margin: '0 0 0 5.5rem',
    color: '#D7DBDD', 
    fontSize: '2rem', 
}



export default ProfileItem
