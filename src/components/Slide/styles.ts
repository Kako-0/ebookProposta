import { Box, styled } from "@mui/material";

export const SlideContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 90%;
  margin: auto;
  @media (max-width: 900px) {
    min-width: 100%;
    max-height: 100%;
    flex-wrap: wrap-reverse;
  }
`;

export const SliderContent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  height: 100%;
  width: 100%;
  border-style: solid;
  border-width: 2px;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.palette.common.white};

  transition: transform 0.3s ease;
  @media (max-width: 900px) {
    order: 1;
  }
  img {
    max-width: 20vw;
  }
`;

export const TextContainer = styled(Box)`
  height: 100%;
  width: 100%;
`;
