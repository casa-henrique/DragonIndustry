import React from "react";

import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import dragonErrorLogo from "../../assets/images/DragonLogoError.svg";
import RedButton from "../../Components/RedButton";

function Error404() {
  let goBack = useNavigate();

  return (
    <Container>
      <img src={dragonErrorLogo} alt="Logo para 404" id="logoError" />
      <h1>404</h1>
      <p>
        Ocorreu Algum erro, a página que você estava procurando não existe ou
        ainda não está disponível.
      </p>
      <RedButton
        text="voltar"
        func={() => {
          goBack(-1);
        }}
      />
    </Container>
  );
}

export default Error404;
