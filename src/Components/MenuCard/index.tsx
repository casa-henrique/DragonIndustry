import React from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "./styles";
import {} from "@testing-library/react";

function MenuCard({ id, name }: any) {
  const notify = () => toast.warn(`O Dragão ${name} foi excluido com sucesso`);

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
            await notify();
          }
        }}
      >
        <p>Excluir</p>
      </button>
      <ToastContainer />
    </Container>
  );
}

export default MenuCard;
