import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding-top: 3rem;

  > form {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    align-items: center;
    gap: 3rem;
  }

  #logoImg {
    width: 65%;
    height: 65%;
  }

  .titleWrapper {
    display: flex;

    align-items: center;

    gap: 1rem;

    > h1 {
      color: white;
      font-size: 2.5rem;

      font-family: "Cinzel decorative";
    }
  }

  .crossedSwords {
    font-size: 2rem;
    color: #09aa91;
  }

  .loginWrapper {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 50%;

    gap: 1rem;

    > input {
      height: 2rem;
      width: 35%;

      border-radius: 0.4rem;
      border: none;

      padding: 0.5rem;

      font-family: "Roboto";
    }
  }

  @media screen and (max-width: 768px) {
    .loginWrapper > input {
      width: 100%;
    }
  }

  @media screen and (max-width: 425px) {
    #logoImg {
      height: 40%;
    }

    .titleWrapper {
      display: flex;

      align-items: center;
      justify-content: center;
    }

    .titleWrapper > h1 {
      font-size: 2rem;
      text-align: center;
      width: 50%;
    }

    .loginWrapper {
      width: 100%;

      > input {
        width: 40%;
        height: 2.5rem;
      }
    }
  }
`;
