import React from "react";
import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  function test() {
    console.log("CALLED FROM CHILD REGISTER");
  }
  return (
    <div className="container">
      <Router>
        <div>
          <nav>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login title="Login">
                <div>
                  <div className="border p-4">
                    <div className="form-group">
                      <label>Email</label>
                      <input className="form-control" placeholder="Email .." />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="form-control"
                        placeholder="Password .."
                      />
                    </div>
                  </div>
                </div>
              </Login>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
