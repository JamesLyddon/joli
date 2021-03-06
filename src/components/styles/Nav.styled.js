import styled from "styled-components";

export const StyledNav = styled.div`
  z-index: 30;

  nav a {
    text-decoration: none;
    color: var(--offwhite-text);
    padding: 0.5rem;
    box-shadow: inset 0 0 0 0 var(--red-text);
    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px var(--red-text) solid;
  }

  a:link {
    text-decoration: none;
    color: var(--offwhite-text);
  }

  a:visited {
    text-decoration: none;
    color: var(--offwhite-text);
  }

  a:hover,
  a:focus {
    transition: 0.3s ease-in-out;
    color: #161616;
    font-weight: 600;
    box-shadow: inset 0 -150px 0 0 var(--red-text);
  }

  nav {
    display: none;
  }

  .hamburger {
    transition: width 2s, height 4s;
    background-color: #111;
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    opacity: 0;
    animation: fade-in 1.5s ease forwards;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #fff;
    color: var(--red-text);
  }

  .hamburger:hover,
  .hamburger:focus {
    transition: 0.5s ease-in-out;
    border: 1px solid var(--red-text);
  }

  .drop-down {
    display: none;
    position: fixed;
    top: 1rem;
    right: 1rem;
    font-size: 0.5rem;
    text-align: right;
    line-height: 2;
    background: #333;
    border-radius: 5px;
    padding: 0.2rem;
    opacity: 0.8;
    animation: fade-in 0.5s ease forwards;
  }

  .drop-down a {
    padding: 0 0.2rem;
  }

  .drop-down a:hover,
  .drop-down a:focus {
    transition: 0.3s ease-in-out;
    color: #161616;

    border-radius: 5px;
  }

  @media screen and (min-width: 600px) {
    nav {
      padding: 1rem 0;
      width: 80vw;
      max-width: 800px;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      font-size: 1rem;
      place-items: center;
      text-align: center;
      gap: 0.5rem;
      opacity: 0;
      animation: fade-in 1.5s ease forwards;
    }
    .hamburger,
    .drop-down {
      display: none;
      z-index: 10;
    }
  }
`;
