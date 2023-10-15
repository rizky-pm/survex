import { css } from '@emotion/react';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: #f4f7f5;
    color: #08090a;
  }

  li,
  ul {
    text-decoration: none;
    list-style: none;
  }
`;

export default globalStyles;
