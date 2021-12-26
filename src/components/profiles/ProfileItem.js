import React from 'react'
import { Link } from "react-router-dom";


function ProfileItem(props) {
    const { login, avatar_url } = props.profile;

    return (
    // <span  className="card">


    //         <span>
    //             <img src={avatar_url} alt="GitHub avatar" className="sideCard"/>
    //         </span>
    //         <span className='loginStyle'>{login}</span>
    //         <div>
    //             <Link to={`/profile/${login}`} className="profileBtn">Profil</Link>
    //         </div>
    // </span>

<div className="card">
    <div class="card-name">{login}</div>
    <img className="card-image" src={avatar_url} alt="Dude" />
    <Link to={`/profile/${login}`} class="card-profile">Profile</Link>
</div>
    )
}

// const loginStyle = {

//     position: 'absolute',
//     top: '6.5%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',

//     textShadow: '2px 2px 10px #D7DBDD',
//     color: 'black',
//     fontSize: '2rem',
//     backgroundColor: 'white',
//     padding: '.5rem 0',
//     opacity: '.8',
//     width: '100%',
//     borderTopLeftRadius: '10px',
//     borderTopRightRadius: '10px',
// }

export default ProfileItem