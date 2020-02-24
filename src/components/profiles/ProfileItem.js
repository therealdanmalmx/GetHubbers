import React from 'react'
import PropTypes from 'prop-types'
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
        // <div className="card">
        //     <img src={avatar_url} alt="" style={{width: '60px', borderRadius: '50%'}}/>
        //     <h3>{login}</h3>
        //     <div  style={{marginTop: '1.5rem', textAlign: 'center'}}>
        //         <a href={`/profile/${login}`} className="btn">More</a>
        //     </div>  
        // </div>
    )
}

ProfileItem.propTypes = {   

}

const loginStyle = {
    position: 'absolute',
    top: 'auto',
    margin: '0 0 0 5.5rem',
    color: '#D7DBDD', 
    fontSize: '2rem', 
}



export default ProfileItem
