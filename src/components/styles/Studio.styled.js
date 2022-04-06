import styled from "styled-components";

export const StyledStudio = styled.div`
  margin: 0 auto;
  width: 80vw;
  display: grid;
  place-items: center;

  img {
    position: relative;
    z-index: -3;
    height: 80vh;
    animation: fade-in 1.5s ease forwards;
  }
`;
