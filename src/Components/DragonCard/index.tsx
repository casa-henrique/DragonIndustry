import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoArrowRedo } from "react-icons/io5";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import OutsideClickHandler from "react-outside-click-handler";

import { Container } from "./styles";

import NoPicture from "../../assets/images/noPicture.svg";

import MenuCard from "../MenuCard";

function DragonCard({ name, id, realoadData }: any) {
  const [menuOpen, setMenuOpen] = useState(false);

  const notifySuccess = () =>
    toast.success(`O Dragão ${name} foi excluido com sucesso`);
  const notifyFail = () => toast.error(`O Dragão ${name} não foi excluido`);

  const remove_dragons = async () => {
    try {
      const response = await axios.delete(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`
      );

      if (response.status === 200) {
        realoadData();
        await notifySuccess();
      } else {
        await notifyFail();
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="cardOptions">
        <div className="menuWrapper">
          <FiMenu
            className="svgOption"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpen(false);
            }}
          >
            {menuOpen === true ? (
              <MenuCard id={id} remove={remove_dragons} />
            ) : null}
          </OutsideClickHandler>
        </div>

        <a href={`/details:${id}`}>
          <IoArrowRedo className="svgOption" />
        </a>
      </div>

      <div>
        <img src={NoPicture} alt="imagem não encontrada" />
      </div>

      <div className="dragonName">
        <p>{name}</p>
      </div>
    </Container>
  );
}

export default DragonCard;
