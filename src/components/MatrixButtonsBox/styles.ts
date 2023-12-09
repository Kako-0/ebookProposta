import { Box, styled } from "@mui/material";

export const MatrixButtonsBoxContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  width: 100%;
  gap: 1rem;
`;
export const ButtonsContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  place-items: center;
  gap: 1rem;
  button {
    word-wrap: break-all;
  }
  img {
    max-width: 15vw;
    @media (max-width: 900px) {
      max-width: 90%;
    }
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const ButtonsLeft = styled(Box)`
  display: grid;
  gap: 1rem;
`;
export const ButtonsRight = styled(Box)`
  display: grid;
  gap: 1rem;
`;
