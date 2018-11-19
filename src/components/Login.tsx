
import * as PropTypes from 'prop-types';
import React, { Component } from 'react';

import '../App.scss';
import { IUsers } from '../types';

interface ILoginProps {
  users: IUsers[];
  authenticated: boolean;
  toggleAuthenticated: () => void;
}
interface ILoginState {
  username: string;
  password: string;
}
class Login extends Component <ILoginProps, ILoginState> {
  public static contextTypes = {
    router: PropTypes.object
  };
  constructor(props: ILoginProps) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  public handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      username: e.target.value
    });
  }
  public handlePwdChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      password: e.target.value
    });
  }
  public handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const users = this.props.users.filter(user =>
      user.username === this.state.username &&
      user.password === this.state.password
      );
    if (users.length > 0) {
        this.props.toggleAuthenticated();
        this.context.router.history.push(`/all`);
      }

  }
  public render() {
    return (
      <div>
        {/* <Nav/> */}
        <div className="container">
          <form onSubmit={this.handleClick}>
            <input
              type="text"
              value={this.state.username}
              placeholder="username"
              className="form-control textField"
              onChange={this.handleUsernameChange}
            />
            <input
              type="password"
              value={this.state.password}
              placeholder="password"
              className="form-control textField"
              onChange={this.handlePwdChange}
            />
            <button className="btn btn-primary textField">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
