import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  height: 100%;

  gap: 1.5rem;
  padding-top: 5rem;

  #logoError {
    width: 50%;
    height: 50%;
  }

  > p,
  h1 {
    color: white;
    font-family: "Cinzel decorative";
  }

  > h1 {
    font-size: 3rem;
  }

  > p {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;

    padding-top: 0;

    > p {
      text-align: center;
      width: 70%;
    }
    #logoError {
      width: 50%;
      height: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    #logoError {
      width: 90%;
      height: 40%;
    }
  }
`;
