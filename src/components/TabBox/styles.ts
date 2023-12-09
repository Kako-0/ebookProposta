import { Box, Tab, Tabs, styled } from "@mui/material";

export const TabsContainer = styled(Box)`
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
`;

export const TabsNav = styled(Tabs)`
  width: max-content;
  min-height: auto;
  .Mui-selected {
    background-color: ${({ theme }) =>
      theme.themeMode === "default" ? theme.palette.primary.light : "#fff"};
    box-shadow: inset -2px 0px 5px 0px rgba(0, 0, 0, 0.5),
      inset 2px 0px 5px 0px rgba(0, 0, 0, 0.5);
  }
  button {
    min-height: 32px;
    min-width: 32px;
  }
`;

export const TabTitle = styled(Tab)`
  padding: 8px 16px;
  border: ${({ theme }) =>
    theme.themeMode === "default" ? "none" : "1px solid #fff"};
  border-right: 1px solid #ddd;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => (theme.themeMode === "default" ? "" : "#fff")};

  :last-child {
    ${({ theme }) =>
      theme.themeMode === "default" ? "none" : "1px solid #fff"};
    border-top-right-radius: 5px;
  }
  :hover,
  :focus {
    background-color: ${({ theme }) =>
      theme.themeMode === "default" ? theme.palette.primary.light : "#fff"};
    color: ${({ theme }) =>
      theme.themeMode === "default" ? theme.palette.primary.main : "#000"};
  }
`;
export const TabContent = styled(Box)`
  border: 1px solid
    ${({ theme }) =>
      theme.themeMode === "default" ? theme.palette.primary.main : "#fff"};
  width: 100%;
  max-width: 100%;
  padding: 1rem;
  border-radius: 15px;
  border-top-left-radius: 0;
`;
