import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import PrivacyDetails from './PrivacyDetails';
import Success from './Success';
import * as Constants from '../../../../constants';
import isValidBirthdate from 'is-valid-birthdate';
import { isValidPhoneNumber, formatPhoneNumberIntl} from 'react-phone-number-input'
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';


export class UserForm extends Component {

  state = {
    step: Constants.LOGIN_PAGE,
    birthdate: new Date(2000, 0, 1),
    user_name: null,
    email: null,
    password: null,
    phone_number: "",
    phone_extension: "+45", 
    area: "Copenhagen",
    formErrorsMessages: {
      user_name: "",
      email: "",
      password: "",
      birthdate: "",
      phone_number: "",
      postal_code: ""
    },
    redirect: null,
  };

  // Proceed to the next step  
  nextStep = (e) => {
    e.preventDefault()
    if (this.state.step === 1) {
      if (isValidBirthdate(this.state.birthdate, { minAge: 18, maxAge: 100 })) {
          const date = this.state.birthdate
          const newBirthday = (date.toLocaleDateString().split("T")[0])
          console.log(date.toLocaleDateString(), newBirthday)
          this.setState({
            birthdate: newBirthday
          })

      } else {
          return(
            // eslint-disable-next-line
            this.state.formErrorsMessages.birthdate = "Not a correct date."
              );
      }
    }
// eslint-disable-next-line
    this.state.formErrorsMessages.phone_number = "";
      const { step } = this.state
      if (Constants.FORM_VALID(this.state)) {
        this.setState({
          step: step + 1,
        })

    }

    else {
      // eslint-disable-next-line
      swal("Couldn't continue. Please check all fields for errors.")
  }
    
  };

  // Proceed to the previous step on back button 
  prevStep = (e) => {
    e.preventDefault()
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  };

  // Handle user details with validation
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrorsMessages = { ...this.state.formErrorsMessages };

    switch (name) {
      case "user_name":
        formErrorsMessages.user_name = Constants.NAME_CHECK(value) ? "" : "minimum 2 characters required" 
        break;
      case "email":
        formErrorsMessages.email = Constants.EMAIL_REGEX.test(value) ? "" : "invalid email address";
        break;
      case "password":
        formErrorsMessages.password = Constants.PASSWORD_CHECK.test(value) 
          ? "" 
          : "minimum 9 characters required, at least 1 digit, 1 uppercase and 1 lowercase"
        break;
        /*
      case "post_code":
        formErrorsMessages.postal_code = Constants.POSTAL_CHECK.test(value)
        ? ""
        : "You have to provide your 4-digit postal code"
        break;*/
      default:
    }   
    this.setState({ formErrorsMessages, [name]: value });
  };

  handleChangeDate = date => {
    if (date) {
      if (isValidBirthdate(date, { minAge: 18, maxAge: 100 })) {
        // eslint-disable-next-line
        this.state.formErrorsMessages.birthdate = "";
        this.setState({
            birthdate: date
        
        });
        console.log("Valid")
      }

      else {
        // eslint-disable-next-line
          this.state.formErrorsMessages.birthdate = "Wrong birthday";
          console.log("Not valid")
      }
    }
  };

  handleChangePhone = number => {
    const newNumber = number;

    if (isValidPhoneNumber(newNumber)) {
      console.log(newNumber)
      // eslint-disable-next-line
        this.state.formErrorsMessages.phone_number = "";


        const formattedNum = formatPhoneNumberIntl(newNumber);
        console.log(formattedNum)
        const numExt = formattedNum.substr(0,formattedNum.indexOf(' ')); // "72"
        const numPhone = formattedNum.substr(formattedNum.indexOf(' ')+1); // "tocirah sneab"
        this.setState({
            phone_number: numPhone,
            phone_extension: numExt
        });
        console.log(newNumber + "is valid!!")
    }


      else {
        console.log(newNumber + "Is not valid..");
        // eslint-disable-next-line
        this.state.formErrorsMessages.phone_number = "Number not valid";
      }

  };

  // Handle Area Change to state
  handleChangeArea = e => {
    e.preventDefault();
    let selectedTown = e.target.value;

    this.setState({
      area: selectedTown
    })
  }

  // Handle user privacy details
  handlePrivacy = name => e => {
    this.setState({ ...this.state, [name]: e.target.checked})
  };

  handleSignup = () => {
    //API CALL HERE
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    const { step, user_name, area, phone_number, phone_extension, birthdate, email, password, formErrorsMessages } = this.state
    const values = { user_name, area, phone_number, phone_extension, birthdate, email, password, formErrorsMessages}
    const { handleChangeArea, handleChange, handlePrivacy, nextStep, prevStep} = this
    // eslint-disable-next-line default-case
    switch(step) {
      case Constants.LOGIN_PAGE: 
        return (
          <div>
            <FormUserDetails 
              nextStep = {this.nextStep}
              handleChange = {handleChange}
              handleChangeDate = {this.handleChangeDate}
              handleChangePhone = {this.handleChangePhone}
              handleChangeArea = {this.handleChangeArea}
              values = {values}
            />
          </div>
        )
      case Constants.PRIVACY_PAGE:
        return (
          <div>
          <PrivacyDetails 
            nextStep = {nextStep}
            prevStep = {prevStep}
            handlePrivacy = {handlePrivacy}
          />
          </div>
        )     
      case Constants.SUCCESS_PAGE:
        return (
          <div>
            { console.log(`
              --SUBMITTING--
              ${JSON.stringify(this.state, 0, 2)}`) 
            }
            <Success
              prevStep = {prevStep} displayName={this.state.user_name}
            /> 
            {console.log("this is where the api is getting called.")}

            {this.handleSignup()}
          </div>
        )
      default:
    } 
  };
}

export default UserForm;