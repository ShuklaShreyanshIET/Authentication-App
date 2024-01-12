import React from 'react'
import {useHistory} from 'react-router-dom';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
const BackButton = () => {
    return (
        <div>
            <p onClick={useHistory().goBack} className="back-p"> <KeyboardReturnIcon  className="back"/> Go to previous</p>
        </div>
    )
}

export default BackButton
