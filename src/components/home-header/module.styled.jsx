import { css } from "@emotion/css";

export const appTitle = css`
  margin-top: 1rem !important;
  margin: 0 auto;
`;

export const appTitleDesc = css`
  color: #3d3b40;
  text-align: center;
  margin: 0 auto;
`;

export const reactQueryDesc = css`
  margin-top: 1rem;
  margin-bottom: 0 !important;
`;

export const headerButton = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 1rem;
  font-size: 1rem;
  color: #29adb2;

  svg {
    width: 1rem;
    height: 1rem;
    margin-left: 0;
  }

  span[class="anticon anticon-arrows-alt"] {
    margin-left: 4px;
  }
`;
