import styled from "styled-components";

export const StyledCarousel = styled.div`
  opacity: 0;
  animation: fade-in 1.5s ease forwards;
  animation-delay: 3.7s;
  font-size: 1rem;
  overflow-x: hidden;
  text-align: center;
  font-style: italic;
  width: 80vw;
  margin: 0 auto;
  padding-top: 2rem;

  .slide img {
    height: 10vh;
    margin: 1rem auto;
  }

  .slide {
    transform: scale(0.5);
    transition: transform 1s ease;
    opacity: 0.1;
  }

  .activeSlide {
    transform: scale(1);
    opacity: 1;
  }

  .blurbs {
    color: rgba(255, 68, 51, 0.9);
  }

  .arrow {
    color: #333;
    position: absolute;
    cursor: pointer;
    z-index: 10;
  }

  .arrow svg {
    transition: color 300ms;
  }

  .arrow svg:hover {
    transition: color 300ms;
    color: var(--red-text);
  }

  .next {
    right: 0%;
    top: 50%;
  }

  .prev {
    left: 0%;
    top: 50%;
  }

  @media screen and (min-width: 600px) {
    .slide img {
      height: 30vh;
      margin: 1rem auto;
    }
    width: 70vw;
  }
`;
