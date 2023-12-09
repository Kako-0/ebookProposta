import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
} from "@mui/material";

export const AccordionContainer = styled(Box)`
  width: 100%;
`;

export const AccordionBox = styled(Accordion)`
  min-height: 24px;
  .Mui-expanded {
    min-height: 24px;
  }
`;

export const AccordionSummaryBox = styled(AccordionSummary)`
  min-height: 24px;
  .Mui-expanded {
    min-height: 24px;
  }
`;

export const AccordionDetailsBox = styled(AccordionDetails)`
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.palette.common.white};
  border-top: none;
  background-color: ${({ theme }) => theme.palette.background.default};
  p {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
