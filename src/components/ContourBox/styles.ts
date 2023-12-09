import { Box, styled } from "@mui/material";

const ContourBoxContainer = styled(Box)`
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 15px;
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    justify-content: center;
    gap: 2rem;
    flex-direction: column;
  }
  img {
    max-width: 10%;
    margin-right: 2rem;
    @media (max-width: 900px) {
      max-width: 90%;
      margin-left: 0;
      margin: 0 auto;
    }
  }
`;
export default ContourBoxContainer;
