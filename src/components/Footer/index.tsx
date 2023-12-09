import { FooterContainer, Page, Title } from "./styles";

interface FooterProps {
  title: string;
  numPage: string;
}

function Footer({ title, numPage }: FooterProps) {
  return (
    <FooterContainer className="noRead">
      <Title>{title}</Title>
      <Page>{numPage.padStart(2, "0")}</Page>
    </FooterContainer>
  );
}

export default Footer;
