import { Button, styled } from "@mui/material";

const SpeedAudio = styled(Button)`
  && {
    border: ${({ theme }) =>
      theme.themeMode === "default"
        ? "solid 1px rgba(0, 0, 0, 0.6)"
        : `solid 2px ${theme.palette.common.white}`};
    min-width: 24px;
    height: 32px;
    border-radius: 32px;
    background-color: white;
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.dark};
    font-size: 0.8em;
    @media (max-width: 900px) {
      //font-size: 1.7vh;
    }
    font-weight: bold;
    text-transform: lowercase;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    :hover {
      transform: scale(1.05);
      background-color: ${({ theme }) => theme.palette.primary.dark};
    }
    :focus {
      outline: none;
      color: ${({ theme }) => theme.palette.primary.dark};
      background-color: ${({ theme }) => theme.palette.common.white};
      box-shadow: ${({ theme }) =>
        theme.themeMode === "default" ? "" : "0px 0px 0px 4px #eef400"};
    }
  }
`;

export default SpeedAudio;
