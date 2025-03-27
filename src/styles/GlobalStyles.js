import { css } from "@emotion/react";
import "@fontsource/rubik/400.css"; 
import "@fontsource/rubik/500.css"; 
import "@fontsource/rubik/600.css"; 
import "@fontsource/rubik/700.css"; 

const globalStyles = css`
  :root {
    --breakpoint-sm: 250px;
    --breakpoint-md: 600px;
    --breakpoint-lg: 1080px;
    --padding: 0rem;
  }

  @media (min-width: ${"250px"}) and (max-width: ${"600px"}) {
    :root {
      --padding: 1rem;
    }
  }

  @media (min-width: ${"600px"}) and (max-width: ${"1080px"}) {
    :root {
      --padding: 2rem;
    }
  }

  @media (min-width: ${"1080px"}) and (max-width: ${"1280px"}) {
    :root {
      --padding: 0.5rem;
    }
  }

  body {
    background: linear-gradient(
        180deg,
        rgba(183, 141, 235, 0.1),
        rgba(183, 141, 235, 0) 28.39%
      ),
      #fff;
    background-repeat: no-repeat;
    padding: 0 var(--padding);
    margin: 0 auto;
    max-width: 1200px;
  }

  * {
    box-sizing: border-box;
    font-family: Rubik, sans-serif;
    background-repeat: no-repeat;
    color: #333;
  }
`;

export default globalStyles;
