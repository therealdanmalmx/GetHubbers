import React from 'react'
import ProfileItem from './ProfileItem'
import { Link } from "react-router-dom";



function Profiles(props) {
    return (

        <div className="container">
            <Link to="/"><i className="fas fa-arrow-circle-left backBtn"></i></Link>
            <div className="profileStyle">
                {props.profiles.map(profile => (
                    <ProfileItem key={profile.id} profile={profile} />
                ))}

            </div>

        </div>
    )
}


export default Profiles

