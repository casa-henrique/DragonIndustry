import React from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import logo from "../../assets/images/dragonLogo.svg";

import RedButton from "../RedButton";

function DragonLogo({ button }: any) {
  let navigate = useNavigate();

  return (
    <Container>
      <header>
        <a href="/dragonlist">
          <img src={logo} alt="Dragon Industry Logo" id="dragonLogo" />
        </a>
        {button == "show" ? (
          <RedButton
            text="Adicionar dragão"
            func={() => {
              navigate("/register");
            }}
          />
        ) : null}
      </header>
    </Container>
  );
}
export default DragonLogo;
