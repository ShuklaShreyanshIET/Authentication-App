import React from 'react';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';
import { useDispatch } from 'react-redux';
import { Redirect, Link } from "react-router-dom";
import { loggedon } from "../../../store/actions/index";
import "../../../scss/modules/_authFormLogin.scss";
import {withRouter} from 'react-router-dom';
import {ReactComponent as LoginAvatar} from './../../../assets/modules/auth.svg'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const UserAuthForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  const dispatch = useDispatch();

  function login() {

      if (errors !== false) {
        return <Redirect to="/"/>;
      }

      else (
        console.log("Tons of errors")
      )
  };

  return (
  <div className="styleContainer">
    <div className="masterContainer">
      <div className="picture">
        <LoginAvatar />
      </div>
      <div className="login">
          <h1 className="sectionHeader">Hello There.</h1>
          <p className="sectionDescription">Login or signup to continue.</p>
            <form onSubmit={handleSubmit} className="go-bottom">
              <div className="field">
                <div className="control">
                  <div className="inputAvatar">
                    <AlternateEmailIcon/>
                    <input autoComplete="off" placeholder="billnyethe@science.guy"className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                    <label className="label">Email Address</label>
                  </div>
                  
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>

              </div>
              <div className="field">
                <div className="control">
                  <div className="inputAvatar">
                    <VpnKeyIcon/>
                    <input className={`input ${errors.password && 'is-danger'}`}  placeholder="***********" type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                    <label className="label">Password</label>
                  </div>
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button type="submit" className="formbutton" onClick={() => dispatch(loggedon())}>Login</button>
              <Link to="/signup"><button type="submit" className="formbutton">Signup?</button></Link>
            </form>
      </div>
    </div>
  </div>
  );
};

export default withRouter(UserAuthForm);
