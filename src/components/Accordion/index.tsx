import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";
import { useState } from "react";
import {
  AccordionContainer,
  AccordionBox,
  AccordionDetailsBox,
  AccordionSummaryBox,
} from "./styles";
import { ColorTypes } from "../../utils/GlobalTypes";

interface AccordionProps {
  items: { text: string | JSX.Element; title: string }[];
  color?: ColorTypes;
  whiteText?: boolean;
}

export default function Accordion({
  items,
  color = "primary.main",
  whiteText = false,
}: AccordionProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const Theme = useTheme();
  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionBox
          onChange={handleChange(item.title)}
          expanded={expanded === item.title}
          disableGutters
          aria-controls={`${item.title}-content`}
          key={`accordion-${index + 1}`}
          sx={{
            backgroundColor: (theme: typeof Theme) =>
              theme.themeMode === "contrast" ? "#fff" : `${color}`,
            "& p": {
              color: (theme: typeof Theme) => {
                if (theme.themeMode === "contrast") {
                  return "#000";
                }
                if (whiteText) {
                  return "#fff";
                }
                return "";
              },
            },
          }}
        >
          <AccordionSummaryBox
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: (theme: typeof Theme) => {
                    if (theme.themeMode === "contrast") {
                      return "#000";
                    }
                    if (whiteText) {
                      return "#fff";
                    }
                    return "";
                  },
                }}
              />
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
            className="custom"
            sx={{
              "& .Mui-expanded.custom": {
                minHeight: "24px",
              },
            }}
          >
            <Typography variant="body1">{item.title}</Typography>
          </AccordionSummaryBox>
          <AccordionDetailsBox
            sx={{
              borderColor: (theme: typeof Theme) =>
                theme.themeMode === "contrast" ? "#fff" : `${color}`,
            }}
          >
            <Typography variant="body1">{item.text}</Typography>
          </AccordionDetailsBox>
        </AccordionBox>
      ))}
    </AccordionContainer>
  );
}
