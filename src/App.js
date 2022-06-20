import "./App.css";
import React, { useState } from "react";
import Axios from "axios";

function App() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  function register() {
    console.log("Inside Axios");
    Axios.post("http://localhost:3001/users/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  }

  function login() {
    console.log("Inside Axios");
    Axios.post("http://localhost:3001/users/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response.data.payload);

      if (response.data.payload.length > 0) {
        console.log("Hello, " + response.data.payload[0].username);
        setLoginStatus("Hello, " + response.data.payload[0].username);
      } else {
        console.log("User is not found");
        setLoginStatus("User is not found");
      }
    });
  }

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username </label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <br></br>
        <label>Password </label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />{" "}
        <br></br>
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <label>Username </label>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{" "}
        <br></br>
        <label>Password </label>
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br></br>
        <button onClick={login}>Login</button>
      </div>
      <br></br>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
