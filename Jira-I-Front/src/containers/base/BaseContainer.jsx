import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from 'store/modules/login';
import { withRouter } from 'react-router-dom';

export class BaseContainer extends Component {
  componentDidMount() {
    this.checkUser();
  }

  checkUser = () => {
    const { LoginActions, history } = this.props;

    if (localStorage.getItem('userInfo')) {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      userInfo.id !== undefined && LoginActions.setUserInfo(userInfo.id);
      return;
    }

    if (!this.props.logged) {
      history.push('/login');
    }
  };

  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  logged: state.login.logged,
});

const mapDispatchToProps = dispatch => ({
  LoginActions: bindActionCreators(loginActions, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(BaseContainer),
);
