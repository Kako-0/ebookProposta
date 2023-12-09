import { Box, styled, Switch } from "@mui/material";

export const SwitchContainer = styled(Box)`
  display: flex;
  gap: 0.5rem;
  .noRead {
    display: none;
  }
`;

export const SwitchStyled = styled(Switch)`
  && {
    padding: 0rem;
    width: 3rem;
    .MuiSwitch-switchBase.Mui-checked {
      color: ${({ theme }) => theme.palette.common.white};
      transform: translateX(22px);
      opacity: 1;
    }
    .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
      opacity: 1;
    }
    .MuiSwitch-track {
      border: ${({ theme }) =>
        theme.themeMode === "default"
          ? "none"
          : `solid 2px ${theme.palette.common.white}`};
      background-color: ${({ theme }) =>
        theme.themeMode === "default"
          ? theme.palette.common.white
          : theme.palette.common.black};
      box-sizing: border-box;
      border-radius: 32px;
      opacity: 1;
    }
    .MuiSwitch-thumb {
      color: ${({ theme }) =>
        theme.themeMode === "default"
          ? theme.palette.primary.main
          : theme.palette.common.white};
      border-radius: 32px;
    }
  }

  @media (max-width: 900px) {
  }
`;
