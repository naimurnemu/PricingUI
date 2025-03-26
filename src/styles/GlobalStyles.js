import { css } from "@emotion/react";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Rubik, sans-serif;
  }

  body {
    background: linear-gradient(
        180deg,
        rgba(183, 141, 235, 0.1),
        rgba(183, 141, 235, 0) 28.39%
      ),
      #fff;
    background-repeat: no-repeat;
    color: #333
  }
`;

export default globalStyles;
