import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  padding: 1.5rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 2rem;
  }
  @media screen and (max-width: 425px) {
    padding-bottom: 10rem;
  }
`;
export const Content = styled.div`
  display: flex;

  width: 80%;
  height: 100%;

  gap: 3rem;

  > div {
    display: flex;
    flex-direction: column;

    align-items: center;

    height: 90%;

    padding: 1rem;

    border-radius: 0.5rem;

    background-color: #053d37;

    > p,
    h2 {
      color: white;
    }
  }
  .cardWrapper,
  .detailWrapper {
    width: 40%;
    height: auto;
  }

  .dragonImageWrapper {
    display: flex;
    position: relative;

    align-items: center;
    justify-content: center;

    width: 100%;
    height: 60%;

    background-color: #192720;

    border-radius: 0.5rem 0.5rem 0 0;

    > a,
    button {
      position: absolute;

      color: white;
      background-color: transparent;

      border: none;

      cursor: pointer;

      > svg {
        width: 2rem;
        height: 2rem;
      }

      :hover {
        color: #c4c4c4;
      }
    }

    > a {
      top: 1rem;
      left: 1rem;
    }

    > button {
      top: 1rem;
      right: 1rem;
    }

    > img {
      width: 80%;
      height: 80%;
    }
  }

  .cardInfos {
    display: flex;
    flex-direction: column;
    position: relative;

    align-items: center;

    width: 100%;

    padding: 1rem;

    gap: 3rem;

    color: white;

    > h2 {
      font-size: 2rem;
      font-family: "Cinzel decorative";
    }
    > p {
      display: flex;

      gap: 1rem;

      align-items: center;
      align-self: baseline;

      width: 100%;

      font-size: 1.5rem;
      font-family: "Cinzel decorative";
    }
  }
  .inputEdit {
    height: 2.5rem;
    width: 70%;

    text-align: center;

    font-size: 1.1rem;
    font-family: "roboto";
    font-weight: bold;

    background-color: #c4c4c4;

    border: none;
    border-radius: 1rem;
  }

  #DragonDetailText {
    font-size: 2.5rem;
    font-weight: bold;
    font-family: "Cinzel decorative";

    text-align: center;
  }

  #comingSoonText {
    display: flex;

    align-items: center;
    justify-content: center;

    font-family: "Cinzel decorative";

    height: 100%;
    width: 90%;
    font-size: 1.5rem;

    > textarea {
      max-height: 60%;
      max-width: 80%;

      min-width: 13rem;
      min-height: 5rem;

      background-color: #c4c4c4;

      padding: 1rem;

      font-size: 1.2rem;
      font-family: "Roboto";

      border: none;
      border-radius: 1rem;
    }
  }

  @media screen and (max-width: 1024px) {
    .cardWrapper,
    .detailWrapper {
      width: 50%;
    }

    #comingSoonText {
      > textarea {
        max-width: 20rem;
        max-height: 20rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    #comingSoonText {
      > textarea {
        max-width: 16rem;
        max-height: 14rem;
      }
    }
  }

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;

    width: 100%;

    .cardWrapper,
    .detailWrapper {
      width: 100%;
    }
    .detailWrapper {
      gap: 2rem;
    }
    .inputEdit {
      width: 50%;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #comingSoonText {
      > textarea {
        max-width: 13rem;
        max-height: 10rem;
      }
    }
  }
`;
