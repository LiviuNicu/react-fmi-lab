import React, { Component } from "react";
import { registerUser } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { useHistory } from "react-router-dom";
let dispatch;
class Register extends Component {
  history;
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      users: []
    };
    Axios.defaults.baseURL = "https://salty-sands-74195.herokuapp.com/";
  }

  componentDidMount() {
    //dispatch = useDispatch();
  }
  register() {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      passwords: {
        password: this.state.password,
        confirm_password: this.state.confirm_password
      }
    };
    this.registerUserReq(newUser);
    this.setState({ users: [newUser, ...this.state.users] });
  }

  registerUserReq(user) {
    Axios.post("user/register", user)
      .then(response => {
        window.location.replace("/login");
        console.log(response);
      })
      .catch(error => {});
  }

  render() {
    let users = [];

    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className="border p-4">
          {this.state.userInserted}

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
          <div className="form-group">
            <label>Password Again</label>
            <input
              className="form-control"
              placeholder="Password .."
              onChange={ev =>
                this.setState({ confirm_password: ev.target.value })
              }
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
