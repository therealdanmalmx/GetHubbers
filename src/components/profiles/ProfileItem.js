import React from 'react'
import { Link } from "react-router-dom";


function ProfileItem(props) {
    const {login, avatar_url, html_url} = props.profile;

    return (
    <span  className="card">
            <span>
                <img src={avatar_url} alt="" className="sideCard"/>
            </span>
            <span style={loginStyle}>{login}</span>
            <div>
                <Link to={`/profile/${login}`} className="profileBtn">Se profil</Link>
            </div>  
    </span>
    )
}

const loginStyle = {
    display: 'flex',
    justifyDisplay: 'space-between',
    position: 'relative',
    witth: '10%',
    // margin: '0 0 0 5.5rem',
    color: 'black', 
    fontSize: '2rem', 
    top: '20px'
}



export default ProfileItem
