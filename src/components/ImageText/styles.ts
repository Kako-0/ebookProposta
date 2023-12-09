import { Box, styled } from "@mui/material";

interface Props {
  imgleft: "true" | undefined;
}

export const ImageTextContainer = styled(Box)<Props>`
  display: grid;
  place-items: center;
  grid-template-columns: ${({ imgleft }) =>
    imgleft === "true" ? "0.6fr 1fr" : "1fr 0.6fr"};
  padding: 1rem 2rem;
  gap: 1rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export const TextContainer = styled(Box)`
  width: 100%;
`;

export const ImageContainer = styled(Box)<Props>`
  grid-row: ${({ imgleft }) => (imgleft === "true" ? "1" : "0")};
  max-width: 25vw;
  @media (max-width: 900px) {
    max-width: 100%;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
