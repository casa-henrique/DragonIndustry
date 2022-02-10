import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: center;

  > button {
    padding: 0.5rem;

    border-radius: 0.3rem;

    font-family: "Cinzel decorative";
    font-weight: bold;

    background-color: #840c0d;
    color: white;

    border: none;

    cursor: pointer;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 12px 0px rgba(255, 184, 0, 0.25) inset;

    transition: 0.7s;
    :hover {
      box-shadow: 0px 0px 12px 0px rgba(255, 184, 0, 1) inset;
    }
  }
`;
