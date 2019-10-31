import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from 'store/modules/login';
import LoginForm from 'components/login/LoginForm';

class LoginFormContainer extends Component {
  handleChange = e => {
    const { LoginActions } = this.props;

    console.log(e.target.name);
    console.log(e.target.value);

    LoginActions.changeInput({
      key: e.target.name,
      value: e.target.value,
    });
  };

  render() {
    const { email, password, check } = this.props;

    return (
      <LoginForm
        email={email}
        password={password}
        check={check}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = ({ login }) => ({
  email: login.email,
  password: login.password,
  check: login.check,
});

const mapDispatchToProps = dispatch => ({
  LoginActions: bindActionCreators(loginActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormContainer);
