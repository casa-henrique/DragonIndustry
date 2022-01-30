import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  align-items: center;

  height: 20rem;

  padding: 0.8rem;
  gap: 1rem;

  border-radius: 1rem;

  background-color: #192720;

  .cardOptions {
    display: flex;

    width: 100%;

    color: white;

    justify-content: space-between;
  }

  .menuWrapper {
    position: relative;
  }

  .svgOption {
    width: 1.2rem;
    height: 1.2rem;

    color: white;

    cursor: pointer;

    :hover {
      color: #c4c4c4;
    }
  }

  .dragonName {
    display: flex;

    align-items: center;
    justify-content: center;

    > p {
      width: 80%;

      text-align: center;

      white-space: nowrap;
      text-overflow: ellipsis;

      overflow: hidden;
    }

    width: 95%;
    height: 15%;

    position: absolute;
    bottom: 0.3rem;

    color: white;
    background-color: #053d37;

    border-radius: 0 0 1rem 1rem;

    font-size: 1.5rem;
    font-family: "Cinzel decorative";
  }
`;
