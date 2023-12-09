import AppBar from "@mui/material/AppBar";

import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import IconButton from "../IconButton";
import {
  ToolbarContainer,
  NavigatePages,
  NavigateContainer,
  Title,
  HeaderMainContainer,
  HeaderButtons,
} from "./styles";
import HighContrast from "./HighContrastToogleSwitch";
import Leitor from "../Leitor/SpeechSynteshis";
import DrawerInfo from "../Drawer";
import DataEbook from "../../routes/data";

function Header() {
  const { totalPages, title } = DataEbook;
  const currentPage = useLocation().pathname;
  const isHome = currentPage === "/";
  const numPage = Number(currentPage.slice(1));
  const prev = numPage - 1;
  const next = numPage + 1;

  return (
    <AppBar position="static" className="noRead">
      <ToolbarContainer>
        <HeaderButtons>
          <DrawerInfo />
          {!isHome && (
            <>
              <IconButton type="marker" label="Marcador" />
              <IconButton type="comment" label="Comentários" />
            </>
          )}

          <Leitor component="#main" />
        </HeaderButtons>
        <HeaderMainContainer>
          <Title variant="h2">{title}</Title>

          <NavigateContainer>
            <IconButton
              type="previous"
              label="Página anterior"
              to={prev === 0 ? "/" : `/${prev}`}
              disabled={prev === -1}
            />
            <NavigatePages>
              <Typography variant="body1">
                {!Number.isNaN(numPage)
                  ? `${numPage + 1} / ${totalPages}`
                  : `${currentPage}`
                      .split("/")
                      .map(
                        (inicial) =>
                          inicial.charAt(0).toUpperCase() + inicial.slice(1)
                      )
                      .join(" ")}
              </Typography>
            </NavigatePages>
            <IconButton
              type="next"
              label="Página seguinte"
              disabled={next === totalPages || Number.isNaN(numPage)}
              to={`/${next}`}
            />
          </NavigateContainer>
        </HeaderMainContainer>
        <HighContrast />
      </ToolbarContainer>
    </AppBar>
  );
}

export default Header;
