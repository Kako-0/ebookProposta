import { Typography, Box, ButtonProps } from "@mui/material";
import { Link } from "react-router-dom";
import { SummaryBox, SummaryButton } from "./styles";

function LinkButton<C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }>
) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SummaryButton {...props} />;
}

function Summary() {
  const summayData = [
    {
      titulo: "Início",
      pagina: "",
    },
    {
      titulo: "Componentes Textuais",
      pagina: "1",
    },
    {
      titulo: "Componentes Textuais com Imagem",
      pagina: "2",
    },
    {
      titulo: "Tabelas e Tabs",
      pagina: "3",
    },
    {
      titulo: "Abas e Listas",
      pagina: "4",
    },
    {
      titulo: "Atividade",
      pagina: "5",
    },
  ];

  return (
    <SummaryBox>
      {summayData.map((summary, index) => {
        return (
          <LinkButton
            key={`summary-page-${index + 1}`}
            component={Link}
            to={`/${summary.pagina}`}
            disableFocusRipple
          >
            <Typography className="numPage">
              {summary.pagina === "" ? 1 : Number(summary.pagina) + 1}
            </Typography>
            <Typography className="titlePage" variant="body1">
              {summary.titulo}
            </Typography>
          </LinkButton>
        );
      })}
    </SummaryBox>
  );
}

export default Summary;
