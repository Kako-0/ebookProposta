import { Box, Button, styled } from "@mui/material";

export const BtnContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  @media (max-height: 600px) {
    margin-top: 0.5rem;
  }

  a {
    transform: scale(0.8);
    font-size: 1.1em;
    text-align: center;
    padding: 0.5rem;
    border: ${({ theme }) =>
      theme.themeMode === "default"
        ? "solid 1px rgba(0, 0, 0, 0.6)"
        : `solid 2px ${theme.palette.common.white}`};
    min-width: inherit;
    height: inherit;
    border-radius: 10px;
    color: ${({ theme }) =>
      theme.themeMode === "default"
        ? theme.palette.getContrastText(theme.palette.primary.dark)
        : "#fff"};
    background-color: ${({ theme }) => theme.palette.primary.dark};
    @media (max-width: 900px) {
      //font-size: 1.7vh;
    }
    transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);

    :hover {
      transform: scale(0.9);
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

export const StyledContainer = styled(Box)``;
export const ButtonSubmit = styled(Button)`
  margin: 1rem 0;
  transform: scale(0.8);
  font-size: 1.1em;
  text-align: center;
  padding: 0.5rem;
  border: ${({ theme }) =>
    theme.themeMode === "default"
      ? "solid 1px rgba(0, 0, 0, 0.6)"
      : `solid 2px ${theme.palette.common.white}`};
  min-width: inherit;
  height: inherit;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.themeMode === "default"
      ? theme.palette.getContrastText(theme.palette.primary.dark)
      : "#fff"};
  background-color: ${({ theme }) => theme.palette.primary.dark};
  @media (max-width: 900px) {
    //font-size: 1.7vh;
  }
  transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    transform: scale(0.9);
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
  :focus {
    outline: none;
    color: ${({ theme }) => theme.palette.primary.dark};
    background-color: ${({ theme }) => theme.palette.common.white};
    box-shadow: ${({ theme }) =>
      theme.themeMode === "default" ? "" : "0px 0px 0px 4px #eef400"};
  }
`;
export const Answer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.common.white};
  padding: 1.5rem 1rem;
  border-radius: 15px;
  @media (max-height: 600px) {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  }
`;

export const ContentActivities = styled(Box)`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.palette.background.paper};
  @media (max-width: 900px) {
    min-height: 86vh;
    padding: 2rem 1rem;
    gap: 0;
  }

  .alternativa {
    transform: scale(0.8);

    padding: 1rem 2rem;
    border: ${({ theme }) =>
      theme.themeMode === "default"
        ? "solid 1px rgba(0, 0, 0, 0.6)"
        : `solid 2px ${theme.palette.common.white}`};
    min-width: inherit;
    height: inherit;
    border-radius: 15px;
    font-size: 1.3em;
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.dark};
    @media (max-width: 900px) {
      padding: 1rem;
      font-size: 1em;
    }
    @media (max-height: 600px) {
      font-size: 0.8em;
      padding: 0.6rem;
    }
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    :hover {
      transform: scale(0.9);
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
  button.Mui-disabled {
    opacity: 0.6;
  }

  .alternativaEscolhida {
    background: ${(props) => props.theme.palette.primary.light};
    color: ${(props) => props.theme.palette.common.black};
  }
  .alternativaNaoEscolhida {
    background: ${(props) => props.theme.palette.primary.dark};
  }

  .contentActivities {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .enviar {
    background: ${(props) => props.theme.palette.primary.dark};
    color: ${(props) => props.theme.palette.common.white};
    font-weight: bold;
    text-transform: uppercase;

    font-size: 2.5vh;
    border-radius: 15px;
    padding: 1rem 4rem;
    @media (max-width: 900px) {
    }
    :hover {
      background: ${(props) => props.theme.palette.primary.light};
    }
  }
`;
export const TitleActivity = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) =>
    theme.themeMode === "default" ? theme.palette.primary.main : `#fff`};
  text-align: start;

  h3 {
    flex-basis: 0;
    flex-grow: 1;
  }

  a {
    margin-left: auto;
  }
`;

export const ButtonsContainer = styled(Box)`
  width: 100%;

  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
