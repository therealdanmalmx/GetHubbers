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
                <div class="social twitter">
                    <a href="https://twitter.com/tamer_aka_remat" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            
                <div class="social linkedin">
                    <a href="https://www.linkedin.com/in/amtamer/?locale=en_US" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            
                <div class="social codepen">
                    <a href="https://codepen.io/tamer_aka_remat/" target="_blank">
                        <i class="fab fa-codepen"></i>
                    </a>
                </div>
        </div>

            {/* <Link to="/profiles"><i className="fas fa-arrow-circle-left backBtn"></i></Link>
            <div style={profileStyle}>
                {name}
            </div>
            <div>
                {hireable === true ? <h4 className="hireable">Öppen för nya möjligheter, eller freelancer.</h4> : null}
            </div>
            <div>
                <img src={avatar_url} alt="" style={avatarStyle}/>
            </div>
            <div style={locationStyle}>
                {location}
            </div >
            <div >
                {bio && (
                    <div style={bioStyle}>
                        <h3>Bio: </h3>
                        <span>{bio}</span>
                    </div>
                )}
                <span style={htmlStyle}>
                    <a href={html_url} target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /><h5 style={htmlStyle.profileText}>GitHub Profil</h5> </a>
                </span>
                <ul style={divStyle}>
                        {email && <Fragment>
                            <li><strong>Email: </strong> {email}</li> 
                        </Fragment> }
                        {company && <Fragment>
                            <li><strong>Företag: </strong> {company}</li>
                        </Fragment> }
                        {blog && <Fragment>
                            <li><strong><a href={blog} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Webbsida</a></strong></li>
                        </Fragment> }
                </ul>
            </div> */}
        </Fragment>
    )
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
    // width: '200px',
    height: '', 
    borderRadius: '50%', 
    marginLeft: '25rem', 
    border: '2px solid #D7DBDD'
}

const bioStyle = {
    width: '50vw', 
    margin: 'auto',
    marginLeft: '30rem', 
    fontSize: '2rem',
    color: '#D7DBDD'
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

const divStyle = {
    marginLeft: '30rem', 
    color: 'white',
    padding: '.8rem',
    fontSize: '1.5rem',

}
export default Profile

