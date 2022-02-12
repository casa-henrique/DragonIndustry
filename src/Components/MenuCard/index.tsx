import React from "react";

import "react-toastify/dist/ReactToastify.css";

import { Container } from "./styles";

function MenuCard({ id, remove }: any) {
  return (
    <Container>
      <a href={`/details:${id}:edit`}>
        <button id="edit">
          <p>Editar</p>
        </button>
      </a>

      <button
        id="delete"
        onClick={async () => {
          {
            await remove();
          }
        }}
      >
        <p>Excluir</p>
      </button>
    </Container>
  );
}

export default MenuCard;
