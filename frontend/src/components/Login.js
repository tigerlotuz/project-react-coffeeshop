import "../styles/Login.css";
import header from "../assets/svg/graphics-header.svg";
import navicon from "../assets/svg/navicon.svg";
import logo2 from "../assets/svg/logo-gray.svg";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../actions/currentUser";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [loginFeedBack, setLoginFeedBack] = useState(false);
  const [registerFeedBack, setRegisterFeedBack] = useState(false);
  let history = useHistory();
  const dispatch = useDispatch();

  const registerUser = (e) => {
    e.preventDefault();

    if (checked) {
      fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === true) {
            fetch(`http://localhost:8080/api/users/${e.target.email.value}`)
              .then((res) => res.json())
              .then((data) => dispatch(setCurrentUser(data)))
              .then(() => {
                setLoginFeedBack(false);
                setRegisterFeedBack(false);
                history.push("/profile");
              });
          } else {
            setRegisterFeedBack(true);
          }
        });
    }
  };

  const loginUser = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/users/${e.target.email.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === false) {
          setLoginFeedBack(true);
        } else {
          dispatch(setCurrentUser(data));
          setLoginFeedBack(false);
          setRegisterFeedBack(false);
          history.push("/profile");
        }
      });
  };

  return (
    <section className="login-container">
      <header className="login-header">
        <img className="login-header-img" src={header} alt="header" />
        <img
          className="navicon"
          onClick={() => history.push("/navbar")}
          src={navicon}
          alt="navicon"
        />
      </header>

      <main className="login-wrapper">
        <section className="login-main-container">
        <img src={logo2} alt="Air Bean Logo" />
        <h3>Välkommen till AirBean-familjen!</h3>
        <p>Redan registrerad? Logga in här:</p>

        <form className="login-form" onSubmit={loginUser}>
          <input className="email" type="text" id="email" placeholder="Epost" />
          <button className="btn" type="submit">
            <h4>Logga in</h4>
          </button>
          {loginFeedBack === true ? <p>Problem med inloggningen</p> : ""}
        </form>

        <p>
          Genom att skapa ett konto här nedan så kan du spara och se din
          orderhistorik.
        </p>

        <form className="reg-form" onSubmit={registerUser}>
          <input className="name" type="text" id="name" placeholder="Namn" />
          <input className="email" type="text" id="email" placeholder="Epost" />
          <label className="checkbox-container">
            GDPR Ok!
            <input
              type="checkbox"
              value={checked}
              onChange={() => setChecked((checked) => !checked)}
            />
            <span className="checkmark"></span>
          </label>
          <button className="btn" type="submit">
            <h4>Registrera mig</h4>
          </button>
          {registerFeedBack === true ? <p>Problem med registreringen</p> : ""}
        </form>
        </section>
      </main>
    </section>
  );
};

export default Login;
