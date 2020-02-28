import React, {useEffect, Fragment} from 'react'
import { Link } from "react-router-dom";

function Profile(props) {
    useEffect(() => {
        props.getProfile(props.match.params.login)
    }, [])

    const {avatar_url, html_url, name, hireable, blog, bio, location, company, email} = props.profiler;
    return (

        <Fragment>
            <Link to="/profiles"><i className="fas fa-arrow-circle-left backBtn"></i></Link>
        <div class="frame">
            <div class="picture">
                <img src={avatar_url} alt=""/>
            </div>
            <div style={profileStyle}>
                {name}
            </div>
            <div style={hireableStyle}>
                {hireable === true ? <div></div> : null}
            </div>
            <div style={gitHubStyle}>
                <a href={html_url} target="_blank" rel="noopener noreferrer">               
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <div style={locationStyle}>
                {location}
            </div >
                {bio && (
                    <div style={bioStyle}>
                        <span>{bio}</span>
                    </div>
                )}
            <div>
                {company && <div style={companyStyle}>
                    <strong>Jobbar på: </strong> {company}
                </div> }
                {blog && <div style={blogStyle}>
                    <a href={blog} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}><i class="fab fa-internet-explorer"></i></a>
                {email && <div style={emailStyle}>
                    <strong>Email: </strong> {email}
                </div> }
                </div> }
            </div> }
        </div>
        </Fragment>
    )
}


const profileStyle = {
    position:'absolute',
    top: '25px',
    left: '500px',
    color: '#D7DBDD',
    fontSize: '5rem',
}

const hireableStyle = {
    position: 'absolute',
    top: '40px',
    right: '50px',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'green',
    borderRadius: '100px'
}

const gitHubStyle = {
    position: 'absolute',
    top: '170px',
    right: '50px',
    fontSize: '4rem'
}

const locationStyle = {
    position:'absolute',
    top: '120px',
    left: '505px',
    fontSize: '2rem',
    color: '#D7DBDD'
}

const bioStyle = {
    position:'absolute',
    top: '180px',
    left: '505px',
    width: '50vw', 
    fontSize: '2rem',
    color: '#D7DBDD'
}

const companyStyle = {
    position:'absolute',
    top: '280px',
    left: '505px',
    color: '#D7DBDD',
    fontSize: '2rem',
    listStyle: 'none', 
    marginTop: '.8rem'
}

const blogStyle = {
    position:'absolute',
    top: '280px',
    right: '50px',
    color: '#D7DBDD',
    fontSize: '2rem',
    listStyle: 'none', 
    marginTop: '.8rem',
    fontSize: '4rem'
}
const emailStyle = {
    position:'absolute',
    top: '38px',
    left: '505px',
    color: '#D7DBDD',
    fontSize: '2rem',
    listStyle: 'none', 
    marginTop: '.8rem'
}

const htmlStyle = {
    marginLeft: '30rem', 
    color: 'white',
    cursor: 'pointer',
    padding: '.8rem',
    fontSize: '3rem',
    profileText: {
        fontSize: '1rem',
        textDecoration: 'none', 
        marginLeft: '.5rem', 
        display: 'inline-block', 
        verticalAlign: 'middle' 
    }
}

export default Profile

