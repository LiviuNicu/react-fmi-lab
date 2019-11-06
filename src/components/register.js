import React, { Component } from "react";
import { registerUser } from "../actions";
import { useSelector, useDispatch } from "react-redux";
let dispatch;
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      users: []
    };
  }

  componentDidMount() {
    //dispatch = useDispatch();
  }
  register() {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.setState({ users: [newUser, ...this.state.users] });
    //this.props.callTest();
    dispatch(registerUser(newUser));
    // this.setState({users: this.state.users.push(newUser)})
  }

  render() {
    let users = [];
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className="border p-4">
          <div className="form-group">
            <label>
              Name <small>{this.state.name}</small>
            </label>
            <input
              className="form-control"
              placeholder="Name .."
              onChange={ev => this.setState({ name: ev.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              placeholder="Email .."
              onChange={ev => this.setState({ email: ev.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              placeholder="Password .."
              onChange={ev => this.setState({ password: ev.target.value })}
            />
          </div>
          <button className="btn btn-success" onClick={() => this.register()}>
            Register
          </button>
        </div>
        <ul>
          {users.map(item => {
            return <li key={item.email}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Register;
