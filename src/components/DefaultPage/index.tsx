import { useLocation } from "react-router-dom";
import DataEbook from "../../routes/data";
import Footer from "../Footer";
import { Content, EbookMain, Title } from "./styles";

interface DefaultPageProps {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

function DefaultPage({ title, children }: DefaultPageProps) {
  const currentPage = useLocation().pathname;
  const numPage = Number(currentPage.slice(1)) + 1;
  const { title: ebookTitle, ebookNumber } = DataEbook;
  return (
    <EbookMain>
      <Title variant="h3">{title}</Title>
      <Content>{children}</Content>
      <Footer
        title={`Ebook ${ebookNumber}: ${ebookTitle}`}
        numPage={numPage.toString()}
      />
    </EbookMain>
  );
}

export default DefaultPage;
