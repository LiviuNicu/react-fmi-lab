import React from "react";
function Login(props) {
  function test() {
    console.log("CALLED FROM CHILD REGISTER");
  }
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
      <button className="btn btn-success" onClick={test}>
        Login
      </button>
    </div>
  );
}
//const Login = () => <h1>Login</h1> //ES6 way
export default Login;
