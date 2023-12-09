import { Box, Typography, styled } from "@mui/material";

interface EbookMainProps {
  backgroundimageurl: string;
}

export const EbookMain = styled(Box)<EbookMainProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${(props) => props.backgroundimageurl});
  background-size: cover;
  min-height: 100%;
  padding: 0rem 1rem;
  padding-bottom: 2rem;
  .logos {
    width: 90%;
  }
  @media (max-width: 900px) {
    min-height: 86vh;
  }
`;

export const TitleContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 3rem;
  width: 50%;
  padding: 2rem 1rem;
  height: 60vh;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  @media (max-width: 900px) {
    width: 80%;
  }

  .NumberTitleContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Number = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  @media (min-width: 900px) {
    font-size: 6em;
    font-weight: 900;
  }
  @media (max-width: 900px) {
    font-size: 5em;
    font-weight: 900;
  }
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  @media (min-width: 900px) {
    font-size: 1.8em;
    font-weight: 700;
  }
  @media (max-width: 900px) {
    font-size: 1.5em;
    font-weight: 700;
  }
`;

export const Subtitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  @media (min-width: 900px) {
    font-size: 1.2em;
  }
  @media (max-width: 900px) {
    font-size: 1em;
  }
`;
