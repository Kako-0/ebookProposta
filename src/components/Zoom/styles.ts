import { AppBar, Box, styled, Typography } from "@mui/material";

export const ButtonStyled = styled("button")`
  && {
    border: none;
    cursor: pointer;
    justify-self: center;
    padding: 0;
    max-width: 80%;
    @media (max-width: 900px) {
      max-width: 75%;
    }
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    :hover {
      transform: scale(1.04);
    }
    :focus {
      outline: none;
      transform: scale(1.04);
    }
  }
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: ${({ theme }) =>
      theme.themeMode === "default"
        ? ""
        : `2px solid ${theme.palette.common.white}`};
  }
`;
export const Container = styled("div")`
  position: relative;
`;

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.main} !important;
`;

export const StyledTitle = styled(Typography)`
  flex: 1;
  margin-left: 0.7rem;
`;

export const ZoomedImage = styled("img")`
  object-fit: contain;
  width: 100%;
  margin: auto;
  @media (max-width: 760px) {
    width: 80vh;
    height: 80vh;
  }
`;

export const ZoomedContainer = styled(Box)`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const BtnContainer = styled(Box)`
  width: 100%;
  padding: 0 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
