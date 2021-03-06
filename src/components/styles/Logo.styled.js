import styled from "styled-components";

export const StyledLogo = styled.div`
  margin-top: 1rem;

  img {
    box-shadow: inset 0 0 0 0 var(--red-text);
    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  img:hover {
    color: var(--red-text);
    box-shadow: inset 0 100px 0 0 var(--red-text);
  }

  .logo-img {
    border: 3px #fff solid;
    padding: 1rem;
    border-radius: 10px;
    width: 100px;
    opacity: 0;
    animation: fade-in 2s ease forwards;
  }
`;
