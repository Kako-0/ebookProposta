import { Box, styled } from "@mui/material";

export const SimpleListContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
`;

export const ItemBox = styled(Box)`
  padding: 0.5rem 2rem;
  border-style: solid;
  border-width: 2px;
  border-left: none;
  border-right: none;
  :first-of-type {
    border-bottom: none;
  }
  :last-of-type {
    border-top: none;
  }
`;
