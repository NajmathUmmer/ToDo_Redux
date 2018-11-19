// import { Rate } from 'antd';
import * as React from 'react';
import { match, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.scss';
import Nav from '../containers/Nav';
// import Nav from '../containers/Nav';
import { IToDo } from '../types';
export interface ImatchType {
  type: string;
}
interface IAppProps {
  authenticated: boolean;
  todo: IToDo[];
  addToToDo: (task: IToDo) => void;
  toggleToDo: (id: string) => void;
  match: match<ImatchType>;
}
interface IAppState {
  text: string;
  visiblityFilter: string;
}
let counter = 0;
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      text: '',
      visiblityFilter: this.props.match.params.type
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  public componentWillReceiveProps = (nextProps: IAppProps) => {
    this.setState({
      visiblityFilter: nextProps.match.params.type
    });
  }
  public handleClick(e: React.FormEvent<HTMLFormElement>) {
    const task = {
      completed: false,
      id: (counter++).toString(),
      text: this.state.text
    };
    this.props.addToToDo(task);
    this.setState({
      text: ''
    });
    e.preventDefault();
  }
  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      text: e.target.value
    });
  }
  public handleSelectLInk(e: React.MouseEvent<HTMLAnchorElement>) {
    this.setState({
      visiblityFilter: e.currentTarget.id
    });
    e.preventDefault();
  }
  public handleSelect(e: React.MouseEvent<HTMLAnchorElement>) {
    this.setState({
      visiblityFilter: e.currentTarget.id
    });
    e.preventDefault();
  }
  public handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.toggleToDo(e.currentTarget.id);
  }

  public render() {
    if (!this.props.authenticated) {
      return(<Redirect to="/login"/>);
    }
    let tasks = this.props.todo;
    switch (this.state.visiblityFilter) {
      case 'completed': {
        tasks = tasks.filter(task => task.completed);
        break;
      }
      case 'pending': {
        tasks = tasks.filter(task => !task.completed);
        break;
      }
      default: {
        break;
      }
    }
    let listTasks;
    if (tasks) {
      listTasks = tasks.map((task, index) => (
        <li className="list-group-item" key={index}>
          <div className="row">
            <div className="col-9">{task.text}</div>
            <div className="col-3">
              <input
                id={task.id}
                type="checkbox"
                onChange={this.handleCheck}
                checked={task.completed}
              />
            </div>
          </div>
        </li>
      ));
    }
    return (
      <div className="App">
      <Nav/>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <nav className="nav flex-column sideNav nav-pills">
                <Link
                  to="/all"
                  className={
                    this.state.visiblityFilter === 'all'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  All
                </Link>
                <Link
                  to="/completed"
                  className={
                    this.state.visiblityFilter === 'completed'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  Completed
                </Link>
                <Link
                  to="/pending"
                  className={
                    this.state.visiblityFilter === 'pending'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  Pending
                </Link>
              </nav>
            </div>
            <div className="col-8">
              <form onSubmit={this.handleClick}>
                <input
                  type="text"
                  value={this.state.text}
                  className="form-control textField"
                  onChange={this.handleChange}
                />
              </form>

              <ul className="textField list-group">{listTasks}</ul>
            </div>
            <div className="col-1">
              <button className="btn btn-primary textField">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
