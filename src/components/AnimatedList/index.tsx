import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Text from "../Text";
import { AnimatedListContainer, ItemBox } from "./styles";

interface ItemProp {
  index: number;
  delay: number;
  whiteText: boolean;
  textItem: string | JSX.Element;
}

interface ListProp {
  items: (string | JSX.Element)[];
  whiteText?: boolean;
}

function Item({ index, delay, textItem, whiteText }: ItemProp) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, delay);
  }, [delay]);

  return (
    <ItemBox
      className={isVisible ? "fade-in" : ""}
      sx={{
        bgcolor: (theme) => {
          if (theme.themeMode === "contrast") {
            return "#fff";
          }
          return index % 2 === 0 ? "primary.main" : "primary.dark";
        },
        "& p": {
          color: (theme) => {
            if (theme.themeMode === "contrast") {
              return "#000";
            }
            return whiteText || index % 2 !== 0 ? "#fff" : "";
          },
        },
      }}
    >
      <Text>{textItem}</Text>
    </ItemBox>
  );
}

function AnimatedList({ items, whiteText = false }: ListProp) {
  const Theme = useTheme();
  return (
    <AnimatedListContainer
      sx={{
        borderColor: (theme: typeof Theme) =>
          theme.themeMode === "contrast" ? "#fff" : "",
      }}
    >
      {items.map((child, index) => (
        <Item
          key={`${index + 1}`}
          index={index}
          delay={(index + 1) * 100}
          textItem={child}
          whiteText={whiteText}
        />
      ))}
    </AnimatedListContainer>
  );
}

export default AnimatedList;
