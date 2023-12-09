import { useTheme } from "@mui/material";
import Text from "../Text";
import { SimpleListContainer, ItemBox } from "./styles";

interface ItemProp {
  textItem: string | JSX.Element;
}

interface ListProp {
  items: (string | JSX.Element)[];
}

function Item({ textItem }: ItemProp) {
  return (
    <ItemBox
      sx={{
        borderColor: (theme) =>
          theme.themeMode === "contrast" ? "#fff" : "primary.main",
      }}
    >
      <Text>{textItem}</Text>
    </ItemBox>
  );
}

function SimpleList({ items }: ListProp) {
  const Theme = useTheme();
  return (
    <SimpleListContainer
      sx={{
        borderColor: (theme: typeof Theme) =>
          theme.themeMode === "contrast" ? "#fff" : "",
      }}
    >
      {items.map((child, index) => (
        <Item key={`${index + 1}`} textItem={child} />
      ))}
    </SimpleListContainer>
  );
}

export default SimpleList;
