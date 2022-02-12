import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  padding: 1.5rem;

  overflow-x: auto;

  #dragonLogo {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 80%;
  height: 100%;

  background-color: #053d37;
  color: white;

  border-radius: 0.5rem;

  padding: 2rem 5rem;
  gap: 2rem;

  > h1 {
    font-size: 1.5rem;
    font-family: "Cinzel decorative";
    text-align: center;
  }

  .formWrapper {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    grid-template-areas:
      "imageWrapper typeWrapper nameDragonWrapper"
      "historiesWrapper historiesWrapper historiesWrapper"
      "button button button";
  }

  .inputWrapper {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 1.5rem;

    > h2,
    p {
      font-weight: bold;
      font-family: "Cinzel decorative";
    }
    > h2 {
      font-size: 2rem;
    }
    > p {
      font-size: 1.2rem;
    }
  }

  #imageWrapper {
    grid-area: imageWrapper;
    > label {
      display: flex;

      align-items: center;
      justify-content: center;

      width: 60%;
      height: 40%;

      border-radius: 2rem;

      color: white;
      background-color: #840c0d;

      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 0px 12px 0px rgba(255, 184, 0, 0.25) inset;

      transition: 0.7s;
      > svg {
        width: 50%;
        height: 50%;
      }
      :hover {
        box-shadow: 0px 0px 12px 0px rgba(255, 184, 0, 1) inset;
        cursor: pointer;
      }
    }
  }
  #typeWrapper {
    grid-area: typeWrapper;
  }
  #nameDragonWrapper {
    grid-area: nameDragonWrapper;
  }
  #historiesWrapper {
    grid-area: historiesWrapper;
  }

  .inputText {
    height: 2rem;
    width: 60%;

    border-radius: 0.4rem;
    border: none;

    padding: 0.5rem;

    font-family: "Roboto";
    font-size: 1rem;
  }

  #history {
    padding: 1rem;

    border-radius: 0.4rem;

    font-family: "Roboto";
    font-size: 1rem;

    min-width: 37.8rem;
    min-height: 10.7rem;

    max-width: 84rem;
    max-height: 16.8rem;
  }

  .buttonWrapper {
    display: flex;
    width: 100%;

    align-items: center;
    justify-content: center;

    grid-area: button;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;

    height: auto;

    .formWrapper {
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-columns: repeat(2, 1fr);

      row-gap: 3rem;

      grid-template-areas:
        "imageWrapper typeWrapper"
        "nameDragonWrapper historiesWrapper"
        "button button";
    }

    .inputText {
      height: 2rem;
      width: 50%;
    }

    #history {
      min-width: 15rem;
      min-height: 6rem;

      max-width: 21rem;
      max-height: 9rem;
    }
  }

  @media screen and (max-width: 460px) {
    height: auto;
    width: 100%;

    > h1 {
      font-size: 1.1rem;
    }

    .formWrapper {
      width: 100%;

      justify-content: center;

      gap: 2rem;

      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-areas:
        "imageWrapper"
        "typeWrapper"
        "nameDragonWrapper"
        "historiesWrapper"
        "button";
    }

    #history {
      min-width: 15rem;
      min-height: 6rem;

      max-width: 15rem;
      max-height: 10rem;

      margin-bottom: 2rem;
    }
  }
`;
