import React from 'react'
import { Link } from "react-router-dom";


function ProfileItem(props) {
    const { login, avatar_url } = props.profile;

    return (
        <div className="card">
            <div className="card-name">{login}</div>
            <img className="card-image" src={avatar_url} alt="profile" />
            <Link to={`/profile/${login}`} className="card-profile">Profile</Link>
        </div>
    )
}

export default ProfileItem