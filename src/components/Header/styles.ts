import { Box, styled, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

export const ToolbarContainer = styled(Toolbar)`
  && {
    @media (min-width: 600px) {
      min-height: 56px;
      padding: 0 2rem;
    }
    @media (max-height: 600px) {
      min-height: 42px;
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: ${({ theme }) =>
    theme.themeMode === "default"
      ? "none"
      : `solid 2px ${theme.palette.common.white}`};
  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
  }
`;

export const HeaderButtons = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 900px) {
    margin-right: 2rem;
  }
`;

export const HeaderMainContainer = styled(Box)`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 900px) {
    flex: 1;
    order: 1;
    flex-direction: column;
  }
`;
export const Title = styled(Typography)`
  && {
    font-size: 1.5em;
    font-weight: bolder;
    color: #fff;

    @media (max-width: 900px) {
      font-size: 1em;
    }
  }
`;

export const NavigateContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigatePages = styled(Box)`
  background-color: #fff;
  padding: 0.5rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  color: ${({ theme }) =>
    theme.themeMode === "default"
      ? theme.palette.text.primary
      : theme.palette.common.black};
`;
