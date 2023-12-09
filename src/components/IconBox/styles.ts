import { Box, styled, Typography } from "@mui/material";

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
    position: relative;
    right: 0.3rem;
    transform: scale(1.6);
  }
  .refletindo {
    transform: scale(1.4);
  }
`;

export const IconBoxContainer = styled(Box)`
  position: relative;
  border: ${({ theme }) =>
    theme.themeMode === "default"
      ? `2px solid ${theme.palette.primary.main}`
      : `2px solid ${theme.palette.common.white}`};
  border-radius: 15px;
  padding: 0 2rem;
  margin-top: 1rem;
  width: 100%;
`;

export const TitleContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: ${({ theme }) => theme.palette.background.paper};
  position: relative;
  bottom: 1.4rem;
  left: 1rem;
  width: fit-content;
  padding: 0 0.5rem;
  font-weight: 700;
  color: ${({ theme }) =>
    theme.themeMode === "default"
      ? theme.palette.primary.main
      : theme.palette.common.white};
  font-size: 1.4em;
  @media (max-height: 600px) {
    font-size: 1.2em;
  }
  @media (max-width: 900px) {
    font-size: 1.2em;
  }
`;

export const Title = styled(Typography)``;

export const IconBoxContent = styled(Box)`
  margin: 0;
  margin-bottom: 1.5rem;
`;
