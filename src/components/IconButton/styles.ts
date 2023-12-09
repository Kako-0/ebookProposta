import { IconButton, styled } from "@mui/material";

const IconButtonStyled = styled(IconButton)`
  && {
    transform: scale(0.8);

    padding: 0.5rem;
    border: ${({ theme }) =>
      theme.themeMode === "default"
        ? "solid 1px rgba(0, 0, 0, 0.6)"
        : `solid 2px ${theme.palette.common.white}`};
    min-width: inherit;
    height: inherit;
    border-radius: 50%;
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.dark};
    @media (max-width: 900px) {
      //font-size: 1.7vh;
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
    :disabled {
      background-color: ${({ theme }) => theme.palette.text.disabled};
    }

    .menuIcon {
      transform: scale(1.2);
    }
    .homeIcon {
      transform: scale(0.85);
    }
  }
  &[aria-disabled="true"] {
    background-color: ${({ theme }) => theme.palette.text.disabled};
  }
`;

export default IconButtonStyled;
