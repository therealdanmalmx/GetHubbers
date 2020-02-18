import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {


    return (
    props.alert && props.alert != null && (
        <div className='alert text-center' style={alertStyle}>
            <div>
               
            </div>
            <div>
                <b>{props.alert.msg}</b>
            </div>
            <div onClick={props.closeAlert} style={{marginRight:'1rem', cursor: 'pointer'}} >
                <span className="fas fa-times"></span>
            </div>
        </div>
    )
    )
}

const alertStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}

Alert.propTypes = {

}

export default Alert

