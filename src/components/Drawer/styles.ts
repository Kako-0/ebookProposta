import { Button, List, ListItemButton, styled } from "@mui/material";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";

export const HeaderBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ theme }) =>
    theme.themeMode === "default"
      ? theme.palette.primary.light
      : theme.palette.common.black};
  border-bottom: ${({ theme }) =>
    theme.themeMode === "default"
      ? "none"
      : `solid 2px ${theme.palette.common.white}`};

  .headerText {
    color: ${({ theme }) =>
      theme.themeMode === "default"
        ? theme.palette.primary.dark
        : theme.palette.common.white};
    margin-left: 1rem;
    font-weight: 900;
    font-size: 1.2em;
    text-transform: uppercase;
  }
  .leitorContainer {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

export const ItemIcon = styled(ListItemIcon)`
  && {
    min-width: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }
`;

export const ItemContainer = styled(ListItemButton)`
  && {
    position: relative;
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    align-items: flex-start;
    border-radius: 10px;
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    transition: 0.2s ease;
    &:hover {
      background-color: initial;
    }
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      display: block;
      width: 0%;
      height: 2px;
      background: ${({ theme }) =>
        theme.themeMode === "default"
          ? theme.palette.primary.main
          : theme.palette.common.white};
      transition: width 0.3s ease-in;
    }

    &:hover::after {
      width: 100%;
    }
  }
  &:focus {
    background-color: initial;
  }
  &:focus::after {
    width: 100%;
  }
  span {
    font-size: 1.2em;
  }
  .MuiSvgIcon-root {
    margin-top: 0.5rem;
  }
`;

export const DrawerMain = styled(Box)`
  width: 22rem;
  height: 100%;
  border-right: ${({ theme }) =>
    theme.themeMode === "default"
      ? "none"
      : `solid 2px ${theme.palette.common.white}`};
`;

export const CreditsContainer = styled(List)`
  && {
    padding: 0;
    background-color: #fff;
    width: 22rem;
  }
  .header {
    font-size: 1.3em;
    line-height: 1.2em;
    margin: 0.5rem 0;
    color: ${({ theme }) =>
      theme.themeMode === "default"
        ? theme.palette.text.primary
        : theme.palette.common.black};
  }
  .team-container {
    margin: 0.5rem 0;
    .team-nome {
      font-size: 1.1em;
      color: ${({ theme }) =>
        theme.themeMode === "default"
          ? theme.palette.text.primary
          : theme.palette.common.black};
    }
    .link {
      display: flex;
      align-items: center;
      width: fit-content;
      font-weight: bold;
      text-decoration: none;
      color: ${({ theme }) =>
        theme.themeMode === "default"
          ? theme.palette.primary.main
          : theme.palette.common.black};
      > svg {
        margin-left: 0.3rem;
      }

      :visited {
        color: ${({ theme }) =>
          theme.themeMode === "default"
            ? theme.palette.primary.main
            : theme.palette.common.black};
      }
    }
  }
  .copyright {
    text-align: justify;
    margin: 2rem;
    margin-left: 1rem;
  }
`;

export const ReferenceContainer = styled(List)`
  && {
    padding: 0;
    width: 22rem;
  }
  .ref-container {
    .ref-nome {
      font-size: 1.1em;
    }
    .link {
      display: flex;
      align-items: center;
      width: fit-content;
      > a {
        text-decoration: none;
        margin-left: 0.3rem;
        color: ${({ theme }) =>
          theme.themeMode === "default"
            ? theme.palette.primary.main
            : theme.palette.common.white};
      }

      :visited {
        color: ${({ theme }) =>
          theme.themeMode === "default"
            ? theme.palette.primary.main
            : theme.palette.common.white};
      }
    }
  }
`;

export const SummaryBox = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  width: 22rem;
  padding: 1rem 0.5rem;
  padding-right: 2rem;
  gap: 1rem;
`;

export const SummaryButton = styled(Button)`
  width: 100%;
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  gap: 1rem;
  &:hover {
    background-color: initial;
  }
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${({ theme }) =>
      theme.themeMode === "default"
        ? theme.palette.primary.main
        : theme.palette.common.white};
    transition: width 0.3s ease-in;
  }

  &:hover::after {
    width: 100%;
  }

  &:focus {
    background-color: initial;
  }
  &:focus::after {
    width: 100%;
  }
  .numPage {
    color: ${({ theme }) => (theme.themeMode === "default" ? "#fff" : "#000")};
    background-color: ${({ theme }) =>
      theme.themeMode === "default"
        ? theme.palette.primary.main
        : theme.palette.common.white};
    width: 2rem;
    height: 2rem;
    padding: 0.2rem 0;
    text-align: center;
    border-radius: 100%;
  }
  .titlePage {
    color: ${({ theme }) =>
      theme.themeMode === "default" ? theme.palette.text.primary : "#fff"};
  }
`;

export const PagesBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  width: 22rem;
  padding: 1rem 2rem;
`;

export const PagesButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    transform: scale(1.25);
  }
  :focus {
    transform: scale(1.25);
    outline: none;
    color: ${({ theme }) => theme.palette.primary.dark};
    background-color: ${({ theme }) => theme.palette.common.white};
    box-shadow: ${({ theme }) =>
      theme.themeMode === "default" ? "" : "0px 0px 0px 4px #eef400"};
  }
  .numPage {
    color: ${({ theme }) => (theme.themeMode === "default" ? "#fff" : "#000")};
    background-color: ${({ theme }) =>
      theme.themeMode === "default"
        ? theme.palette.primary.main
        : theme.palette.common.white};
    width: 2rem;
    height: 2rem;
    padding: 0.2rem 0;
    text-align: center;
    border-radius: 10px;
  }
`;
