import React, {useEffect, Fragment} from 'react'
import { Link } from "react-router-dom";
import { useTranslation} from 'react-i18next'

function Profile(props) {
    const { t } = useTranslation();

    useEffect(() => {
        props.getProfile(props.match.params.login)
    }, [])

    const {avatar_url, html_url, name, hireable, blog, bio, location, company, email} = props.profiler;

    return (

        <Fragment>
            <Link to="/profiles"><i className="fas fa-arrow-circle-left backBtn"></i></Link>
            <div id="profile">
                <img className="profile-image" src={avatar_url} alt="github avatar" />
                <div className="profile-information">
                    <div>
                        {name && <div className="profile-information-name">{name}</div>}
                        {location && <div className="profile-information-location">{location}</div>}
                        {email && <div className="profile-information-email">Email: {email}</div>}
                        {bio && <div className="profile-information-presentation">{bio}</div>}
                    </div>
                    <div>
                        <div className="profile-information-employer">{company && (`${t('worksat')}: ${company}`)}</div>
                    </div>
                </div>
                <div className="profile-icons">
                    <div className="profile-icons-git" alt="Version controll tool">
                        <a href={html_url} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github fa-4x"></i>
                        </a>
                    </div>
                    <div className="profile-icons-website">
                        <a href={blog} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-chrome fa-4x"></i>
                        </a>
                    </div>
                    {hireable && (<div className="profile-icons-available">
                        <i className="fas fa-briefcase fa-2x"></i>
                    </div>)}
                </div>
            </div>
        </Fragment>
    )
}


export default Profile

