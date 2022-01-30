import styled from "styled-components";

export const Container = styled.div`
  width: 15%;

  > header {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 2rem;

    > a {
      width: 60%;
    }
  }
  #dragonLogo {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 70%;
  }
`;
