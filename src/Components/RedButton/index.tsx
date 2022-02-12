import React from "react";

import { Container } from "./styles";

function RedButton({ text, func, type }: any) {
  return (
    <Container>
      <button onClick={func} type={type || "button"}>
        <p>{text}</p>
      </button>
    </Container>
  );
}

export default RedButton;
