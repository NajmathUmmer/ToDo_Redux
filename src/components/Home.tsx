import * as PropTypes from 'prop-types';
import React, { Component } from 'react';
import { match } from 'react-router';
import { Redirect } from 'react-router-dom';
import '../App.scss';
// import App from '../containers/App';
// import Login from '../containers/Login';
import Nav from '../containers/Nav';
import { IUsers } from '../types';
import { ImatchType } from './App';

interface IHomeProps {
  authenticated: boolean;
  add: (user: IUsers) => void;
  match: match<ImatchType>;
}
interface IHomeState {
  username: string;
  password: string;
  repeatPassword: string;
}

class Home extends Component<IHomeProps, IHomeState> {
  public static contextTypes = {
    router: PropTypes.object
  };
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      password: '',
      repeatPassword: '',
      username: '',
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleRptPwdChange = this.handleRptPwdChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loggedOutView = this.loggedOutView.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  public handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user = {
      password: this.state.password,
      username: this.state.username
    };
    if (this.state.password === this.state.repeatPassword) {
      this.props.add(user);
      this.context.router.history.push(`/login`);
    }
  }

  public handleLogin(e: React.MouseEvent<HTMLAnchorElement>) {
    this.context.router.history.push(`/login`);
    e.preventDefault();
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
  public handleRptPwdChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      repeatPassword: e.target.value
    });
  }
  public loggedOutView() {
    return (
        <div>
          {/* <Nav /> */}
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
              <input
                type="password"
                value={this.state.repeatPassword}
                placeholder="repeat password"
                className="form-control textField"
                onChange={this.handleRptPwdChange}
              />
              <button className="btn btn-primary textField">Signup</button>
              already a member?
              <a href="" onClick={this.handleLogin}>
                Login
              </a>
            </form>
          </div>
        </div>
      );
  }
  public render() {
    const componentToRender = this.props.authenticated ? (
      <div>
        <Redirect to="/all" />
      </div>
    ) : (
      this.loggedOutView()
    );
    return (
      <div>
        <Nav />
        {componentToRender}
      </div>
    );
  }
}
export default Home;
