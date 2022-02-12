import React from "react";

import { Container } from "./styles";

import logo from "../../assets/images/dragonLogo.svg";

function LoadingScreen() {
  return (
    <Container>
      <img src={logo} alt="Logo do Dragon Industry" />
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}

export default LoadingScreen;
