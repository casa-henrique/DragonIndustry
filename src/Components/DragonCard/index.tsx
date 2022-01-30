import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoArrowRedo } from "react-icons/io5";

import { Container } from "./styles";

import NoPicture from "../../assets/images/noPicture.svg";

import MenuCard from "../MenuCard";

function DragonCard({ name, id }: any) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <div className="cardOptions">
        <div className="menuWrapper">
          <FiMenu
            className="svgOption"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen == true ? <MenuCard id={id} name={name} /> : null}
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
