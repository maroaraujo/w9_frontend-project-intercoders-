import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontawersomeIcon } from "@fortawesome/react-fontawesome";

const userRegCheck = /^[A-z][A-z0-9-_]{3,23}$/;
const passwordRegCheck =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = userRegCheck.text(user);
    console.log(result);
    console.log(user);
    setValidUser(result);
  }, [user]);

  useEffect(() => {
    const result = passwordRegCheck.text(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrorMessage("");
  }, [user, password, matchPassword]);

  return (
    <section>
      <p ref={errRef} className={errorMessage ? "errmsg" : "offscreen"}>
        {errorMessage}
      </p>
      <h1>Registration</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
      </form>
    </section>
  );
};

export default Register;
