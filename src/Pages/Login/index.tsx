import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GiCrossedSwords } from "react-icons/gi";
import DragonLogo from "../../assets/images/dragonLogo.svg";
import RedButton from "../../Components/RedButton";

async function loginUser(credentials: any) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login({ setToken }: any) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const redirect = () => window.location.replace(`/dragonlist`);
  const notify = () => toast.error("Login ou senha estão incorretos");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newToken = await loginUser({
      username,
      password,
    });

    if (username === "softUser" && password === "soft2022") {
      setToken(newToken);
      redirect();
    } else {
      notify();
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src={DragonLogo} alt="Dragon Indusrty Logo" id="logoImg" />
        <div className="titleWrapper">
          <GiCrossedSwords className="crossedSwords" />
          <h1>DRAGON INDUSTRY</h1>
          <GiCrossedSwords className="crossedSwords" />
        </div>

        <div className="loginWrapper">
          <input
            type="text"
            placeholder="Login"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <RedButton text="Entrar" />
      </form>
      <ToastContainer />
    </Container>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
