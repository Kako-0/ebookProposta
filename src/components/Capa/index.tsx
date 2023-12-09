import { Box } from "@mui/material";
import Logos from "../../assets/images/capa/logos.png";
import CapaBg from "../../assets/images/capa/capa.png";
import { EbookMain, Number, Subtitle, Title, TitleContainer } from "./styles";

interface HomeProps {
  number?: number;
  title: string;
  subtitle?: string;
  altCapa: string;
}

function CapaDefault({
  number = 1,
  title,
  subtitle,
  altCapa = "Instituições responsáveis",
}: HomeProps) {
  return (
    <EbookMain backgroundimageurl={CapaBg}>
      <TitleContainer>
        <Box className="NumberTitleContainer">
          <Number>{number.toString().padStart(2, "0")}</Number>
          <Title variant="h2">{title}</Title>
        </Box>
        <Subtitle variant="h3">{subtitle}</Subtitle>
      </TitleContainer>

      <img className="logos" src={Logos} alt={altCapa} />
    </EbookMain>
  );
}

export default CapaDefault;
