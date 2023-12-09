import { Box, styled } from "@mui/material";

export const QuoteContainer = styled(Box)`
  width: 100%;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  place-items: center;
  gap: 1rem;
`;

export const IconContainer = styled(Box)`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled(Box)`
  padding-left: 1rem;
  border-left: 4px solid
    ${({ theme }) =>
      theme.themeMode === "default" ? theme.palette.primary.main : "#fff"};
  font-style: italic;
`;
