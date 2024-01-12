import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as myActions from "../../../store/actions/index";

class Logout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.dispatch(myActions.loggedon());
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }

}

export default connect()(Logout);