import { Box, styled, Typography } from "@mui/material";

export const FooterContainer = styled(Box)`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  padding-left: 1rem;
  overflow: hidden;
`;
export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 900;
  padding-top: 1rem;
  @media (min-width: 900px) {
    font-size: 1em;
  }
`;
export const Page = styled(Typography)`
  position: relative;
  bottom: -0.8rem;
  left: 0.8rem;
  padding: 0.6rem 1rem 0rem 0.5rem;
  border-radius: 100%;
  width: 64px;
  height: 64px;
  font-weight: 700;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) => theme.palette.text.secondary};
  @media (min-width: 900px) {
    font-size: 1.6em;
  }
`;
