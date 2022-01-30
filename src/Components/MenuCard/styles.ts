import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  width: 5rem;
  height: 5rem;

  > button,
  a > button {
    color: white;

    border: none;

    cursor: pointer;

    font-family: "Cinzel decorative";
    font-weight: bold;
  }

  > button {
    height: 50%;
  }

  a {
    height: 50%;
    width: 100%;
    > button {
      width: 100%;
      height: 100%;
    }
  }

  #edit {
    background-color: #844404;

    border-radius: 0.5rem 0.5rem 0 0;

    :hover {
      background-color: #f17b04;
    }
  }
  #delete {
    background-color: #840c0d;

    border-radius: 0 0 0.5rem 0.5rem;

    :hover {
      background-color: #d71719;
    }
  }
`;
