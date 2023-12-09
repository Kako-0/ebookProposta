import { ListItem, ListItemText, Typography } from "@mui/material";
import { ReferenceContainer } from "./styles";

type ReferenceType = {
  info: JSX.Element;
  link?: string;
};

function References() {
  const reference: ReferenceType[] = [
    {
      info: <b>Fulano</b>,
      link: "http://www.fulano.com",
    },
    {
      info: (
        <>
          Beltrano <b>Beltrano</b>
        </>
      ),
      link: "http://www.beltrano.com.br",
    },
    {
      info: <>Sicrano</>,
      link: "http://www.sicrano.com",
    },
    {
      info: <>Arcano</>,
    },
    {
      info: <>Fulano</>,
      link: "http://www.fulano.com",
    },
    {
      info: <>Beltrano</>,
      link: "http://www.beltrano.com.br",
    },
    {
      info: <>Sicrano</>,
      link: "http://www.sicrano.com",
    },
    {
      info: <>Arcano</>,
    },
    {
      info: <>Fulano</>,
      link: "http://www.fulano.com",
    },
    {
      info: <>Beltrano</>,
      link: "http://www.beltrano.com.br",
    },
    {
      info: <>Sicrano</>,
      link: "http://www.sicrano.com",
    },
    {
      info: <>Arcano</>,
    },
    {
      info: <>Fulano</>,
      link: "http://www.fulano.com",
    },
    {
      info: <>Beltrano</>,
      link: "http://www.beltrano.com.br",
    },
    {
      info: <>Sicrano</>,
      link: "http://www.sicrano.com",
    },
    {
      info: <>Arcano</>,
    },
  ];

  return (
    <ReferenceContainer>
      {reference.map((ref, i) => {
        return (
          <ListItem
            key={`reference-${i + 1}`}
            divider
            className="ref-container"
            id={`reference-${i + 1}`}
          >
            <ListItemText disableTypography>
              <Typography variant="body1" className="ref-nome">
                <strong>{i + 1}</strong>
                {`. `}
                {ref.info}
              </Typography>
              {ref.link && (
                <Typography variant="body2" className="link">
                  Disponível
                  <a href={ref.link} target="_blank" rel="noopener noreferrer">
                    <b>clicando aqui</b>
                  </a>
                </Typography>
              )}
            </ListItemText>
          </ListItem>
        );
      })}
    </ReferenceContainer>
  );
}

export default References;
