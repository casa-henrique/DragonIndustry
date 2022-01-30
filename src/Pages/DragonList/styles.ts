import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  padding: 1.5rem;
  gap: 1rem;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;

  width: 80%;

  background-color: #053d37;

  border-radius: 0.5rem;

  padding: 2rem 5rem;

  overflow-x: auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 425px) {
    width: 100%;

    padding: 1rem;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
