import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function Profile(props) {
    useEffect(() => {
        props.getProfile(props.match.params.login)
    }, [])

    const {login, avatar_url, html_url, name, hireable, blog, bio, location, followers, following, public_repos, public_gists, company, email} = props.profiler;
    return (

        <Fragment>
            <Link to="/profiles"><i className="fas fa-arrow-circle-left backBtn"></i></Link>
            <div style={profileStyle}>
                {name}
            </div>
            <div>
                {hireable === true ? <h4 className="hireable">Öppen för nya möjligheter</h4> : null}
            </div>
            <div>
                <img src={avatar_url} alt="" style={avatarStyle}/>
            </div>
            <div style={locationStyle}>
                {location}
            </div>


        </Fragment>
    )
}

Profile.propTypes = {

}

const profileStyle = {
    margin: 'auto',
    marginTop: '6rem',
    color: '#D7DBDD',
    textAlign: 'center',
    fontShadow: '2px 2px 20px black',
    fontSize: '5rem',
}

const locationStyle = {
    marginLeft: '22.5rem', 
    fontSize: '2rem',
    color: '#D7DBDD'
}

const avatarStyle = {
    width: '200px', 
    borderRadius: '50%', 
    marginLeft: '25rem', 
    border: '2px solid #D7DBDD'

}

export default Profile

