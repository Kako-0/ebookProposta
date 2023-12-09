import {
  Box,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { CreditsContainer } from "./styles";

type CreditTypes = {
  function: string;
  team: {
    name: string;
    link?: string;
  }[];
};

function Credits() {
  const credit: CreditTypes[] = [
    {
      function: "Coordenação do Projeto",
      team: [
        {
          name: "Ana Emilia Figueiredo de Oliveira",
          link: "http://lattes.cnpq.br/5767658067485112",
        },
      ],
    },
    {
      function: "Coordenação Geral da DTED/UNA-SUS/UFMA",
      team: [
        {
          name: "Ana Emilia Figueiredo de Oliveira",
          link: "http://lattes.cnpq.br/5767658067485112",
        },
      ],
    },
    {
      function: "Gestão de projetos da UNA-SUS/UFMA",
      team: [
        {
          name: "João Pedro de Castro e Lima Baesse",
          link: "http://lattes.cnpq.br/2734666772125545",
        },
        {
          name: "Matheus Augusto Pereira Louzeiro",
          link: "http://lattes.cnpq.br/2548106070181799",
        },
      ],
    },
    {
      function: "Coordenação de Produção Pedagógica da UNA-SUS/UFMA",
      team: [
        {
          name: "Paola Trindade Garcia",
          link: "http://lattes.cnpq.br/8513290455922124",
        },
      ],
    },
    {
      function: "Coordenação de Ofertas Educacionais da UNA-SUS/UFMA",
      team: [
        {
          name: "Elza Bernardes Monier",
          link: "http://lattes.cnpq.br/3034477335930315",
        },
      ],
    },
    {
      function: "Coordenação de Tecnologia da Informação da UNA-SUS/UFMA",
      team: [
        {
          name: "Mário Antônio Meireles Teixeira",
          link: "http://lattes.cnpq.br/9943003955628885",
        },
      ],
    },
    {
      function: "Coordenação de Comunicação da UNA-SUS/UFMA",
      team: [
        {
          name: "José Henrique Coutinho Pinheiro",
          link: "http://lattes.cnpq.br/8493739280209743",
        },
      ],
    },

    {
      function: "Professora-autora",
      team: [
        {
          name: "Fernanda Karolinne Melchior Silva Pinto",
          link: "http://lattes.cnpq.br/9809531119962553",
        },
      ],
    },

    {
      function: "Validadora técnica",
      team: [
        {
          name: "xxx",
          // link: 'xxx'
        },
      ],
    },

    {
      function: "Validadora pedagógica",
      team: [
        {
          name: "Paola Trindade Garcia",
          link: "http://lattes.cnpq.br/8513290455922124",
        },
      ],
    },

    {
      function: "Revisora textual",
      team: [
        {
          name: "xxx",
          // link: 'xxx'
        },
      ],
    },

    {
      function: "Designer instrucional",
      team: [
        {
          name: "Lívia Anniele Sousa Lisboa",
          link: "http://lattes.cnpq.br/3791992392780805",
        },
      ],
    },

    {
      function: "Designer Gráfico",
      team: [
        {
          name: "xxx",
          // link: 'xxx'
        },
      ],
    },

    {
      function: "Tecnologia da informação",
      team: [
        {
          name: "Rayanne Maria Cunha Silveira",
          link: "http://lattes.cnpq.br/2999561859534744",
        },
      ],
    },
  ];

  const copyright =
    "© 2021. Ministério da Saúde. Sistema Universidade Aberta do SUS. Fundação Oswaldo Cruz & Universidade Federal do Maranhão. É permitida a reprodução, disseminação e utilização desta obra, em parte ou em sua totalidade, nos termos da licença para usuário final do Acervo de Recursos Educacionais em Saúde (ARES). Deve ser citada a fonte e é vedada sua utilização comercial, sem a autorização expressa dos seus autores, conf. Lei de Direitos Autorais-LDA (Lei n.⁰9.610, de 19 de fevereiro de 1998).";

  return (
    <CreditsContainer>
      {credit.map((cred, i) => {
        return (
          <Box key={`credits-${i + 1}`}>
            <ListSubheader
              key={`credits-header-${i + 1}`}
              disableSticky
              className="header"
            >
              {cred.function}
            </ListSubheader>
            {cred.team.map((person, personIndex) => {
              return (
                <ListItem
                  key={`credits-item-${personIndex + 1}`}
                  divider
                  className="team-container"
                >
                  <ListItemText disableTypography>
                    <Typography
                      key={`team-nome-${i + 1}`}
                      variant="body1"
                      className="team-nome"
                    >
                      {person.name}
                    </Typography>
                    {person.link && (
                      <Box key={`${personIndex + 1}-lattes`}>
                        <Typography variant="body2">
                          <a
                            href={person.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                          >
                            Lattes <OpenInNewRoundedIcon />
                          </a>
                        </Typography>
                      </Box>
                    )}
                  </ListItemText>
                </ListItem>
              );
            })}
          </Box>
        );
      })}
      <Typography variant="body2" className="copyright">
        {copyright}
      </Typography>
    </CreditsContainer>
  );
}

export default Credits;
