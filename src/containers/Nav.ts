import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleAuthenticated } from '../actions';
import Nav from '../components/Nav';
import { IStoreState } from '../types';

const mapStateToProps = (state: IStoreState) => ({
    authenticated: state.authenticated,
    user: state.users,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleAuthenticated: () => dispatch(toggleAuthenticated())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav);