import { Box, styled } from "@mui/material";

interface SimpleContainerProps {
  img: "true" | undefined;
}

export const SimpleContainer = styled(Box)<SimpleContainerProps>`
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.palette.common.white};
  border-left: none;
  border-right: none;
  padding: 1rem 2rem;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${({ img }) => (img ? "0.2fr 1fr" : "1fr")};
  place-items: center;
  gap: 2rem;
`;

export const ImgContainer = styled(Box)`
  grid-row: 1;
  img {
    height: 100%;
    width: 100%;
  }
`;
