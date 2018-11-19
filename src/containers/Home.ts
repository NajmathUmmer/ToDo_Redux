import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import {  } from "redu";
import * as actions from '../actions';
import Home from '../components/Home';
import { IStoreState, IUsers } from '../types';

const mapStateToProps = (state: IStoreState) => ({
    authenticated: state.authenticated,
    user: state.users,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    add: (user: IUsers) => {
        return dispatch(actions.addToUsers(user));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);