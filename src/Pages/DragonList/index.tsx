import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Content } from "./styles";

import DragonLogo from "../../Components/DragonLogo";

import DragonCard from "../../Components/DragonCard";

interface DragonProps {
  createdAt?: string;
  name: string;
  type?: string;
  histories?: string;
  id?: string;
}

function DragonList() {
  const [dragons, setDragons] = useState<DragonProps | any>([]);

  useEffect(() => {
    const listDragons = async () => {
      try {
        const { data } = await axios.get(
          "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
        );

        console.log(data);

        setDragons(data);
      } catch (error) {
        console.log(error);
      }
    };
    listDragons();
  }, []);

  return (
    <Container>
      <DragonLogo button="show" />

      <Content>
        {dragons
          .sort((a: any, b: any) => a.name.localeCompare(b.name))
          .map((item: any) => (
            <DragonCard name={item.name} key={item.id} id={item.id} />
          ))}
      </Content>
    </Container>
  );
}

export default DragonList;
