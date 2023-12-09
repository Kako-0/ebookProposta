import { useTheme } from "@mui/material";
import Text from "../Text";
import ColorBoxContainer from "./styles";
import { AlignText, ColorTypes } from "../../utils/GlobalTypes";

interface ColorBoxProps {
  children: JSX.Element | JSX.Element[] | string;
  color?: ColorTypes;
  whiteText?: boolean;
  align?: AlignText;
}

function ColorBox({
  children,
  color = "primary.main",
  whiteText,
  align = "left",
}: ColorBoxProps) {
  const Theme = useTheme();
  return (
    <ColorBoxContainer
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
          width: "100%",
        },
      }}
    >
      <Text align={align}>{children}</Text>
    </ColorBoxContainer>
  );
}

export default ColorBox;
