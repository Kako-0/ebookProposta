import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import {
  PaginationItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Content, Numero, TextoAbas, TextContainer } from "./styles";
import { ColorTypes } from "../../utils/GlobalTypes";

interface PaginationTextProps {
  items: (string | JSX.Element)[];
  color?: ColorTypes;
}
function PaginationText({
  color = "primary.main",
  items,
}: PaginationTextProps) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [abaSelecionada, setAbaSelecionada] = useState(0);

  const values = items.map((elem, index) => {
    return (
      <Typography variant="body1" key={`${index + 1}`}>
        {elem}
      </Typography>
    );
  });

  const num = items.map((_, index) => {
    return (
      <Typography key={`${index + 1}`} variant="body1">
        {(index + 1).toString().padStart(2, "0")}{" "}
      </Typography>
    );
  });
  const Theme = useTheme();

  return (
    <Content
      sx={{
        "& button": {
          borderColor: (theme: typeof Theme) =>
            theme.themeMode === "contrast" ? "#fff" : `${color}`,
          color: (theme: typeof Theme) =>
            theme.themeMode === "contrast" ? "#fff" : `${color}`,
        },
      }}
    >
      <TextoAbas
        sx={{
          backgroundColor: (theme: typeof Theme) =>
            theme.themeMode === "contrast" ? "#fff" : `${color}`,
        }}
        className="noRead"
      >
        <Numero>{num[abaSelecionada]}</Numero>
        <TextContainer>{values[abaSelecionada]}</TextContainer>
      </TextoAbas>

      <Pagination
        count={3}
        boundaryCount={isMobile ? 1 : 5}
        siblingCount={0}
        size={isMobile ? "small" : "medium"}
        onChange={(_, value) => setAbaSelecionada(value - 1)}
        defaultPage={1}
        className="abas noRead"
        renderItem={(item) => (
          <PaginationItem {...item} className={item.selected ? "custom" : ""} />
        )}
        sx={{
          "& .Mui-selected.custom": {
            backgroundColor: `${color}`,
            color: "#fff",
          },
          "& .MuiPagination-ul": {
            color: (theme: typeof Theme) =>
              theme.themeMode === "contrast" ? "#000" : `${color}`,
          },
        }}
      />
    </Content>
  );
}

export default PaginationText;
