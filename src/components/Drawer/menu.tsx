import { Box, List, ListItemText, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import IconButton from "../IconButton";
import Leitor from "../Leitor/SpeechSynteshis";
import { CreditsIcon, ReferencesIcon, PagesIcon, SummaryIcon } from "./icons";
import { DrawerMain, HeaderBox, ItemContainer, ItemIcon } from "./styles";

interface MenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  creds: boolean;
  setCreds: (creds: boolean) => void;
  refs: boolean;
  setRefs: (refs: boolean) => void;
  pages: boolean;
  setPages: (pages: boolean) => void;
  summary: boolean;
  setSummary: (summary: boolean) => void;
}

function Menu({
  open,
  setOpen,
  setCreds,
  creds,
  setRefs,
  refs,
  setPages,
  pages,
  setSummary,
  summary,
}: MenuProps) {
  const { isContrast } = useContext(ThemeContext);
  const themeUtil = useTheme();
  const [menu, setMenu] = useState(false);
  return (
    <DrawerMain role="presentation" id="DrawerContainer">
      <HeaderBox className="noRead">
        <IconButton
          label="Fechar"
          type="close"
          onClick={() => setOpen(!open)}
        />
        <Typography className="headerText" variant="body1">
          MENU
        </Typography>
        <Box className="leitorContainer">
          <Leitor component="#DrawerContainer" />
        </Box>
      </HeaderBox>
      <List>
        <ItemContainer
          onClick={() => {
            setSummary(!summary);
          }}
        >
          <ItemIcon>
            <SummaryIcon
              fill={isContrast ? "#fff" : themeUtil.palette.primary.main}
            />
          </ItemIcon>
          <ListItemText primary="Sumário" />
        </ItemContainer>

        <ItemContainer
          onClick={() => {
            setRefs(!refs);
          }}
        >
          <ItemIcon>
            <ReferencesIcon
              fill={isContrast ? "#fff" : themeUtil.palette.primary.main}
            />
          </ItemIcon>
          <ListItemText primary="Referências" />
        </ItemContainer>

        <ItemContainer
          onClick={() => {
            setCreds(!creds);
            setMenu(!menu);
          }}
        >
          <ItemIcon>
            <CreditsIcon
              fill={isContrast ? "#fff" : themeUtil.palette.primary.main}
            />
          </ItemIcon>
          <ListItemText primary="Créditos" />
        </ItemContainer>

        <ItemContainer
          onClick={() => {
            setPages(!pages);
          }}
        >
          <ItemIcon>
            <PagesIcon
              fill={isContrast ? "#fff" : themeUtil.palette.primary.main}
            />
          </ItemIcon>
          <ListItemText primary="Páginas" />
        </ItemContainer>
      </List>
    </DrawerMain>
  );
}

export default Menu;
