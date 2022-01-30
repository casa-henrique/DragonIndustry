import React from "react";

import { Container } from "./styles";

function RedButton({ text, func }: any) {
  return (
    <Container>
      <button onClick={func}>
        <p>{text}</p>
      </button>
    </Container>
  );
}

export default RedButton;
