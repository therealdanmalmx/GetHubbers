import React from 'react'
import ProfileItem from './ProfileItem'
import { Link } from "react-router-dom";

function Profiles(props) {

    return (
        
        <div className="container">
            <Link to="/"><i className="fas fa-arrow-circle-left backBtn"></i></Link>
            <div style={profileStyle}>
                {props.profiles.map(profile => (
                    <ProfileItem key={profile.id} profile={profile} />
                ))}

            </div>

        </div>
    )
}

const profileStyle = {
    position: 'relative',
    top: '8rem',
    width: '100%',
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '.8rem', 
}

export default Profiles

