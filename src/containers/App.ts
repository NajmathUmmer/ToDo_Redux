import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addToToDo, toggleToDo } from '../actions';
import App from '../components/App';
import { IStoreState, IToDo } from '../types';

const mapStateToProps = (state: IStoreState) => ({
  authenticated: state.authenticated,
  todo: state.todo,
  user: state.users
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToToDo: (task: IToDo) => dispatch(addToToDo(task)),
  toggleToDo: (id: string) => dispatch(toggleToDo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
