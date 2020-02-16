import React from 'react'
import PropTypes from 'prop-types'

function Alert({alert}) {
    return (
    alert && alert != null && (
        <div className={`alert alert-${alert.type}`} style={{margin:'auto'}}>
            <i className="fas fa-info-circle" /> <b>{alert.msg}</b>
        </div>
    )
    )
}

Alert.propTypes = {

}

export default Alert

