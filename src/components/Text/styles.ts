import { Typography } from "@mui/material";
import styled from "styled-components";

const TextoStyled = styled(Typography)`
  && {
    margin-bottom: 0.5rem;
    @media (max-height: 600px) {
      margin-bottom: 0.2rem;
    }
  }
`;

export default TextoStyled;
