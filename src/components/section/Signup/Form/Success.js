import React from 'react';
import {Link} from 'react-router-dom';

const Success = (props) => {
  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
      <div className='page-detail'>
      <div className="sectionText">
        <h1 className="sectionHeader">Welcome, {props.displayName}!</h1>
        <p className="sectionDescriptionPrivacy">You are now able to create listings and have more features available. </p>
      </div>
      <div className='page-detail'>
              <p className="nextOne">1. Your Details</p> <p className="lastOne"> 2. Privacy </p> <p className="highlighted">3. Finish</p>  
            </div>
      </div>
        <p>We are happy to have you on our team and wish you good luck. Now you can also report individuals and help keep our community clean.</p>
        <h3 className='success-msg'>Feel free to login in with your new account. </h3>
        <Link to="/login"><button type="submit" className="logdeginn">Login</button></Link>
      </div>
    </div> 
  )
};

export default Success;