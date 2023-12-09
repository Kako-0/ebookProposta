import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

export const IconWrap = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.themeMode === "default"
      ? theme.palette.secondary.main
      : theme.palette.common.white};
  border-radius: 32px;
  padding: 0.5rem;

  .complementar {
    position: relative;
    right: 0.1rem;
    transform: scale(1.6);
  }
  .saberMais {
    position: relative;
    right: 0.3rem;
    transform: scale(1.6);
  }
  .obs {
    transform: scale(1.2);
  }
  .refletindo {
    transform: scale(1.4);
  }
`;

export const ButtonStyled = styled(Button)`
  && {
    padding: 0.5rem 1.2rem;
    border: ${({ theme }) =>
      theme.themeMode === "default"
        ? "solid 1px rgba(0, 0, 0, 0.6)"
        : `solid 2px ${theme.palette.common.white}`};
    min-width: inherit;
    height: inherit;
    border-radius: 12px;
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.dark};
    @media (max-width: 900px) {
      //font-size: 1.7vh;
    }
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    :hover {
      transform: scale(1.04);
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

export const DialogContainer = styled(Dialog)`
  & .MuiPaper-root {
    border: ${({ theme }) =>
      theme.themeMode === "default"
        ? ""
        : `1px solid ${theme.palette.common.white}`};
  }
`;
export const Title = styled(DialogTitle)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: ${({ theme }) =>
    theme.themeMode === "default"
      ? theme.palette.primary.main
      : theme.palette.common.white};
  font-size: 1.4em;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

export const TitleIcons = styled(Box)`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
`;
