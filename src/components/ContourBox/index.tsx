import { useTheme } from "@mui/material";
import Text from "../Text";
import ContourBoxContainer from "./styles";
import { ColorTypes } from "../../utils/GlobalTypes";

interface ContourBoxProps {
  children: JSX.Element | JSX.Element[] | string;
  image?: string;
  altImage?: string;
  color?: ColorTypes;
}

function ContourBox({
  children,
  color = "primary.main",
  image,
  altImage,
}: ContourBoxProps) {
  const Theme = useTheme();
  return (
    <ContourBoxContainer
      sx={{
        borderColor: (theme: typeof Theme) =>
          theme.themeMode === "contrast" ? "#fff" : `${color}`,
      }}
    >
      {image && <img src={image} alt={altImage} />}
      <Text>{children}</Text>
    </ContourBoxContainer>
  );
}

export default ContourBox;
