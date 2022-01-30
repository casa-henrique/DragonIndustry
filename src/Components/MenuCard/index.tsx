import React from "react";
import axios from "axios";

import { Container } from "./styles";
import {} from "@testing-library/react";

function MenuCard({ id, name }: any) {
  const refresh = () => window.location.reload();

  const remove_dragons = async () => {
    try {
      const response = await axios.delete(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

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
            await remove_dragons();
            await refresh();
            alert(`O Dragão ${name} foi excluido com sucesso`);
          }
        }}
      >
        <p>Excluir</p>
      </button>
    </Container>
  );
}

export default MenuCard;
