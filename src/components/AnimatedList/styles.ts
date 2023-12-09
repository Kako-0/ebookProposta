import { Box, styled } from "@mui/material";

export const AnimatedListContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  .fade-in {
    animation: fadeIn 1.2s ease-in-out forwards;
  }

  @keyframes fadeIn {
    from {
      transform: translateX(-1000px);
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const ItemBox = styled(Box)`
  padding: 0.5rem 2rem;
  opacity: 0;
  :first-of-type {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  :last-of-type {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
