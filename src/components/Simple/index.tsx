import { Box } from "@mui/material";
import Text from "../Text";
import { ImgContainer, SimpleContainer } from "./styles";
import { ColorTypes } from "../../utils/GlobalTypes";

interface SimpleProps {
  children: JSX.Element | JSX.Element[] | string;
  color?: ColorTypes;
  img?: string;
  altImage?: string;
}

function Simple({
  children,
  color = "primary.main",
  img,
  altImage,
}: SimpleProps) {
  return (
    <SimpleContainer
      img={img ? "true" : undefined}
      sx={{
        borderColor: (theme) =>
          theme.themeMode === "contrast" ? "#fff" : `${color}`,
      }}
    >
      <Box>
        <Text>{children}</Text>
      </Box>
      {img && (
        <ImgContainer>
          <img src={img} alt={altImage} />
        </ImgContainer>
      )}
    </SimpleContainer>
  );
}

export default Simple;
