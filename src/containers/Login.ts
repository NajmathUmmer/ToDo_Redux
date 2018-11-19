import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleAuthenticated } from '../actions';
import Login from '../components/Login';
import { IStoreState } from '../types';

const mapStateToProps = (state: IStoreState) => ({
    authenticated: state.authenticated,
    users: state.users,
  });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleAuthenticated: () => dispatch(toggleAuthenticated())
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);