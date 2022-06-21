import "./App.css";
import React, { useState } from "react";
import Axios from "axios";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";

function App() {
  const [loginStatus, setLoginStatus] = useState("");

  function login(username, password) {
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
      <Register />
      <Login onSubmit={login} />
      <br></br>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
