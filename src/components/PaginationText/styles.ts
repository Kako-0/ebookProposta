import { Box, styled } from "@mui/material";

export const Content = styled(Box)`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    border: ${({ theme }) =>
      theme.themeMode === "default"
        ? `solid 2px ${theme.palette.primary.main}`
        : `solid 2px ${theme.palette.common.white}`};
    color: ${({ theme }) =>
      theme.themeMode === "default" ? theme.palette.primary.main : "#fff"};

    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    margin-top: 0.8rem;
    font-weight: bold;
    cursor: pointer;

    @media (min-width: 900px) {
      font-size: 1.3vw;
      margin-right: 1rem;
    }

    @media (max-width: 900px) {
      padding: 0.3rem;
    }
  }
  .MuiPagination-ul {
    @media (max-width: 900px) {
      justify-content: center;
      width: 80%;
      flex-wrap: nowrap;
    }
  }
`;

export const TextoAbas = styled(Box)`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: 15px;
  padding: 10px 0px 15px;
  height: auto;
  width: 100%;
  color: ${({ theme }) =>
    theme.themeMode === "default"
      ? theme.palette.getContrastText(theme.palette.primary.dark)
      : "#fff"};
  place-items: center;
  border: ${({ theme }) =>
    theme.themeMode === "default"
      ? ""
      : `solid 2px ${theme.palette.common.white}`};
  @media (max-width: 900px) {
    height: auto;
    padding-left: 2rem;
  }
`;

export const Numero = styled(Box)`
  height: 100%;
  padding-top: 0.8rem;
  p {
    font-size: 12vh;
    margin: 0;
    margin-right: 0.5rem;
  }
  @media (max-width: 900px) {
    padding: 0;
    height: auto;
    border: none;
    p {
      font-size: 7vh;
    }
  }
`;

export const TextContainer = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90%;
  border-left: 6px solid
    ${({ theme }) =>
      theme.themeMode === "default"
        ? theme.palette.getContrastText(theme.palette.primary.dark)
        : theme.palette.common.white};
  margin-left: -2rem;
  padding: 1rem;

  @media (max-width: 900px) {
    margin-left: 0.7rem;
    padding-left: 0.4rem;
  }
`;
