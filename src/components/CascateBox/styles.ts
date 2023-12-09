import { Box, keyframes, styled, Typography } from "@mui/material";

const cascate = keyframes`
  from {
      transform: translateX(-10rem);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
`;

export const CascateBoxContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  color: ${({ theme }) =>
    theme.themeMode === "default"
      ? theme.palette.common.white
      : theme.palette.common.black};
  text-align: center;
  background-color: ${({ theme }) =>
    theme.themeMode === "default"
      ? theme.palette.primary.dark
      : theme.palette.common.white};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 75%;
  padding: 0.2rem 0;
  animation: ${cascate} 0.5s ease-out forwards;
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const CascateBoxContent = styled(Box)`
  border: 6px solid
    ${({ theme }) =>
      theme.themeMode === "default"
        ? theme.palette.primary.dark
        : theme.palette.common.white};
  border-radius: 15px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.primary.light};
  animation: ${cascate} 0.8s ease-out forwards;
`;
