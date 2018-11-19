import React, { Component } from 'react';
import '../App.scss';

interface INavProps {
  authenticated: boolean;
  toggleAuthenticated: () => void;
}
class Nav extends Component <INavProps, {}> {
  constructor(props: INavProps) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  public handleOnClick(e: React.MouseEvent<HTMLAnchorElement>) {
    this.props.toggleAuthenticated();
    e.preventDefault();
  }
  public render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="">
          To-Do
        </a>
        {this.props.authenticated ? (
          <a className="logout" href="" onClick={this.handleOnClick}>
            Logout
          </a>
        ) : (
          ''
        )}
      </nav>
    );
  }
}
export default Nav;
