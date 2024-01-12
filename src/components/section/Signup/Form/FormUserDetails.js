import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import "react-datepicker/dist/react-datepicker.css";
import '../../../../scss/modules/_authFormSignup.scss';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { Link } from "react-router-dom";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CakeIcon from '@material-ui/icons/Cake';
import PhoneIcon from '@material-ui/icons/Phone';

const FormUserDetails = ( {values, handleChange, handleChangeArea, nextStep, handleChangeDate, handleChangePhone, area} ) => {



  return (
    
    <div className="styleContainerSignup">
      <div className="masterContainer">
        <div className="login">
          <div className="sectionText">
            <h1 className="sectionHeader">Welcome.</h1>
            <p className="sectionDescription">Information will not be publicy available. Signup or login to continue.</p>
          </div>
            <div className='page-detail'>
              <p className="highlighted">1. Your Details</p> <p className="nextOne"> 2. Privacy </p> <p className="lastOne">3. Finish</p>  
            </div>
        <form noValidate className="form go-bottom">
                <div className="name inputAvatar">
                  <PermIdentityIcon/>
                  <label htmlFor="" style={{display: "none"}}>hidden label to mislead chrome autocomplete</label>
                  <input
                      id="input-form-name"
                      autoComplete="cc-name"
                      className={values.formErrorsMessages.user_name.length > 0 ? "error" : "correct"}
                      placeholder="Name *"
                      type="text"
                      name="user_name"
                      noValidate
                      onChange={handleChange}
                      defaultValue={values.user_name}
                    />
                    <label className="label">Screen Name</label>
                    {values.formErrorsMessages.user_name.length > 0 && (
                      <span className="errorMessage">{values.formErrorsMessages.user_name}</span>
                    )}
                </div>
                <div className="areaCode inputAvatar">
                  <LocationCityIcon/>
                  <select
                    id="areaSlc"
                    placeholder="Postcode *"
                    onChange={handleChangeArea}
                  >
                  <option value="Copenhagen">Copenhagen</option>
                  <option value="Jylland">Jylland</option>
                  <option value="Sjælland">Sjælland</option>
                  <option value="Fyn">Fyn</option>
                  <option value="Lolland">Lolland</option>
                  <option value="Falster">Falster</option>
                  <option value="Bornholm">Bornholm</option>
                  
                  </select>
                  <label className="postcodeLabel">Postcode</label>
                  {values.formErrorsMessages.postal_code.length > 0 && (
                    <span className="errorMessage">{values.formErrorsMessages.postal_code}</span>
                  )}
                </div>
                <div className="email inputAvatar">
                  <AlternateEmailIcon/>
                  <input
                    id="input-form-email"
                    className={values.formErrorsMessages.email.length > 0 ? "error" : "correct"}
                    placeholder="Email *"
                    autoComplete="current-email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    defaultValue={values.email}
                  />
                  <label className="label">Email</label>
                  {values.formErrorsMessages.email.length > 0 && (
                    <span className="errorMessage">{values.formErrorsMessages.email}</span>
                  )}
                </div>
                <div className="password inputAvatar">
                  <VpnKeyIcon/>
                  <input
                    id="input-form-password"
                    className={values.formErrorsMessages.password.length > 0 ? "error" : "correct"}
                    placeholder="Password *"
                    autoComplete="current-password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    defaultValue={values.password}
                  />
                  <label className="label">Password</label>
                  {values.formErrorsMessages.password.length > 0 && (
                    <span className="errorMessage">{values.formErrorsMessages.password}</span>
                  )}
                </div>
                <div className="birth_date inputAvatar">
                  <CakeIcon/>
                  <DatePicker
                      showYearPicker={true}
                      selected={values.birthdate}
                      id="input-form-birthdate"
                      placeholder="Birthday"
                      autoComplete="birthdate"
                      type="date"
                      name="birthdate"
                      onChange={handleChangeDate}
                      defaultValue={values.birthdate}
                      showYearDropdown={true}
                      showMonthDropdown={true}
                      scrollableYearDropdown={true}
                      minDate={new Date(1920, 1, 1)}
                      
                  />
                  <label className="label">Birthday</label>

                  {values.formErrorsMessages.birthdate.length > 0 && (
                  console.log(values.formErrorsMessages.birthdate),
                    <span className="errorMessage">{values.formErrorsMessages.birthdate}</span>
                  )}
                </div>
                <div className="phoneNumber inputAvatar">
                  <PhoneIcon/>
                  <PhoneInput
                    flags={flags}
                    defaultCountry="DK"
                    className={isValidPhoneNumber(values.phone_extension + values.phone_number)? "correct":"error"}
                    id="input-form-phoneNumber"
                    placeholder="Phone Number *"
                    autoComplete="current-phone"
                    type="text"
                    name="phone_number"
                    onChange={handleChangePhone}
                    value={values.phone_extension + values.phone_number}
                  />
                  <label className="label">Phone Number</label>
                </div>
          <small><i>Fields marked with * are required</i></small>
          <small><i>All information provided will be private.</i></small>
          <button 
            type="submit" 
            className="formbutton"
            id='btn-next' 
            onClick={nextStep}
          >
            Continue
          </button>
          <Link to="/login"><button type="submit" className="formbutton">Login</button></Link>
          
        </form>

        </div>
        <br/>
        
      </div>
    </div>  
  )
};
    

export default FormUserDetails;