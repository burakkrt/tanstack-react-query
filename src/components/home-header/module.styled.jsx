import { css } from "@emotion/css";

export const appTitle = css`
  margin-top: 1rem !important;
  margin: 0 auto;
  mark {
    padding: 0.5rem 0.6rem;
    border-radius: 0.5rem;
    color: #3d3b40;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  }
`;

export const appTitleDesc = css`
  color: #3d3b40;
  text-align: center;
  margin: 0 auto;
`;

export const reactQueryDesc = css`
  margin: 1rem 0;
`;

export const headerButton = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  font-size: 1.1rem;

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;
