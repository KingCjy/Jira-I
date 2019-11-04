import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from 'store/modules/login';
import LoginForm from 'components/login/LoginForm';

class LoginFormContainer extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { history } = this.props;

    if (prevProps.logged !== this.props.logged && this.props.logged) {
      localStorage.setItem(
        'userInfo',
        JSON.stringify({
          id: this.props.email,
        }),
      );

      history.push('/');
    }
  }

  handleChange = (e, name) => {
    const { LoginActions } = this.props;
    let key = name ? name : e.target.name;
    let value = name ? e.target.checked : e.target.value;

    LoginActions.changeInput({
      key,
      value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.props;
    const { LoginActions } = this.props;
    email === 'user' && password === '1234'
      ? LoginActions.loginSuccess()
      : LoginActions.loginFailure();
  };

  render() {
    const { email, password, check } = this.props;

    return (
      <LoginForm
        email={email}
        password={password}
        check={check}
        onSubmit={this.onSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = ({ login }) => ({
  email: login.email,
  password: login.password,
  check: login.check,
  logged: login.login.logged,
});

const mapDispatchToProps = dispatch => ({
  LoginActions: bindActionCreators(loginActions, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LoginFormContainer),
);
