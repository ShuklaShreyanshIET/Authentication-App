import React from 'react'
import UserAuthForm from './../Login/UserAuthForm';
import Signup from './../Signup/Signup';
const Authentication = () => {
    const LoginTab = true;

    return (
        <div>
            {LoginTab ? <UserAuthForm/> : <Signup />}
        </div>
    )
}

export default Authentication;
