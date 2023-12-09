import { Box, Typography, styled } from "@mui/material";

export const EbookMain = styled(Box)`
  position: relative;
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 1fr;
  gap: 3rem;
  place-items: start;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.palette.background.paper};
  @media (max-width: 900px) {
    min-height: 86vh;
    padding: 2rem 1rem;
    gap: 0;
  }
`;

export const Content = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  place-items: start;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  @media (max-width: 900px) {
    margin-bottom: 4rem;
  }
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 700;
  @media (min-width: 900px) {
    font-size: 1.6em;
  }
`;
