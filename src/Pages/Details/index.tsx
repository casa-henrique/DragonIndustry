import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container, Content } from "./styles";

import noPicture from "../../assets/images/noPicture.svg";
import { IoArrowUndoSharp, IoPencil } from "react-icons/io5";

import DragonLogo from "../../Components/DragonLogo";
import RedButton from "../../Components/RedButton";

interface DetailsProps {
  name: string;
  type: string;
  createdAt: string;
  histories: string;
}

function Details() {
  const [contentEditable, setContentEditable] = useState(false);
  const [infos, setInfos] = useState<DetailsProps | any>([]);

  const history = () =>
    infos.histories != "" ? infos.histories : "Não possui história";

  const location = useLocation();
  const id = location.pathname.replace("/details:", "").replace(":edit", "");
  const pathEditable = location.pathname.replace(`/details:${id}:`, "");

  const editable = () => setContentEditable(!contentEditable);

  const [editDate, setEditDate] = useState("");
  const [editName, setEditName] = useState("");
  const [editType, setEditType] = useState("");
  const [editHs, setEditHs] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const notifySuccess = () => toast.success(`O Dragão foi editado com sucesso`);
  const notifyFail = () => toast.error(`O Dragão não foi editado`);

  const newData = {
    createdAt: `${editDate != "" ? editDate : infos.createdAt}`,
    name: `${editName != "" ? editName : infos.name}`,
    type: `${editType != "" ? editType : infos.type}`,
    histories: `${editHs != "" ? editHs : infos.histories}`,
    id: `${infos.id}`,
  };

  const details = async () => {
    try {
      const { data } = await axios.get(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`
      );

      setInfos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendNewData = async () => {
    try {
      const response = await axios.put(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`,
        newData
      );

      if (response.status === 200) {
        details();
        await notifySuccess();
      } else {
        await notifyFail();
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const forceEdit = () =>
      pathEditable == "edit" ? setContentEditable(true) : null;
    forceEdit();
  }, []);

  useEffect(() => {
    details();
  }, []);

  return (
    <Container>
      <DragonLogo width="mini" />
      <Content>
        <div className="cardWrapper">
          <div className="dragonImageWrapper">
            <a href="/dragonlist">
              <IoArrowUndoSharp />
            </a>
            <button onClick={() => editable()}>
              <IoPencil />
            </button>
            <img src={noPicture} alt="" />
          </div>

          {contentEditable == true ? (
            <form className="cardInfos" onSubmit={handleSubmit}>
              <p>
                Nome:
                <input
                  type="text"
                  placeholder={infos.name}
                  className="inputEdit"
                  id="name"
                  onChange={(event) => setEditName(event.target.value)}
                />
              </p>
              <p>
                Tipo:
                <input
                  type="text"
                  placeholder={infos.type}
                  className="inputEdit"
                  id="type"
                  onChange={(event) => setEditType(event.target.value)}
                />
              </p>
              <p>
                Criação:
                <input
                  type="text"
                  placeholder={infos.createdAt}
                  className="inputEdit"
                  id="createdAt"
                  onChange={(event) => setEditDate(event.target.value)}
                />
              </p>
              <RedButton
                text="Confirmar"
                func={async () => {
                  await sendNewData();
                  await editable();
                }}
              />
            </form>
          ) : (
            <div className="cardInfos">
              <h2>{infos!.name}</h2>
              <p>Tipo: {infos!.type}</p>
              <p>Criação: {infos!.createdAt}</p>
            </div>
          )}
        </div>

        <div className="detailWrapper">
          <h2 id="DragonDetailText">História Do Dragão</h2>
          <p id="comingSoonText">
            {contentEditable == true ? (
              <textarea
                placeholder={infos.histories}
                onChange={(event) => setEditHs(event.target.value)}
              />
            ) : (
              history()
            )}
          </p>
        </div>
      </Content>
    </Container>
  );
}

export default Details;
