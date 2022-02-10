import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container, Content } from "./styles";

import { BsCloudUpload } from "react-icons/bs";

import DragonLogo from "../../Components/DragonLogo";
import RedButton from "../../Components/RedButton";

function Register() {
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState("");
  const [newHs, setNewHs] = useState("");

  const notify = () => toast.success(`Dragão ${newName} criado com sucesso`);

  const current = new Date();
  const newDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} - ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

  const newDragon = {
    createdAt: `${newDate}`,
    name: `${newName}`,
    type: `${newType}`,
    histories: `${newHs}`,
  };

  const createNewDragon = async () => {
    try {
      const response = await axios.post(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon`,
        newDragon
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <Container>
      <DragonLogo />
      <Content>
        <h1>
          Bem vindo ao cadastro de Dragões, para catalogarmos o seu dragão
          precisamos de algumas informações:
        </h1>
        <form className="formWrapper" onSubmit={handleSubmit}>
          <div id="imageWrapper">
            <h2>1</h2>
            <p>Imagem do dragão</p>

            <label>
              <BsCloudUpload />
              <input type="file" hidden />
            </label>
          </div>
          <div id="typeWrapper">
            <h2>2</h2>
            <p>Tipo do Dragão</p>
            <input
              type="text"
              placeholder="Tipo"
              className="inputText"
              onChange={(event) => setNewType(event.target.value)}
            />
          </div>
          <div id="nameDragonWrapper">
            <h2>3</h2>
            <p>Nome do Dragão</p>
            <input
              type="text"
              placeholder="Nome"
              className="inputText"
              onChange={(event) => setNewName(event.target.value)}
            />
          </div>
          <div id="historiesWrapper">
            <h2>4</h2>
            <p>História Do Dragão</p>
            <textarea
              id="history"
              placeholder="Conte a história do seu dragão..."
              onChange={(event) => setNewHs(event.target.value)}
            />
          </div>
        </form>

        <RedButton
          text="Adicionar Dragão"
          func={async () => {
            await createNewDragon();
            await notify();
          }}
        />
      </Content>
      <ToastContainer />
    </Container>
  );
}
export default Register;
