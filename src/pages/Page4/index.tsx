import DefaultPage from "../../components/DefaultPage";
import List from "../../components/AnimatedList";
import SimpleList from "../../components/SimpleList";
import QuoteBox from "../../components/QuoteBox";
import PaginationText from "../../components/PaginationText";

function Page4() {
  return (
    <DefaultPage title="Lista Animatada">
      <List
        whiteText
        items={[
          "conteudo do slide 1",
          <>
            conteudo do <b>slide 2</b>
          </>,
          "conteúdo do slide 3",
        ]}
      />

      <SimpleList
        items={[
          "conteudo do slide 1",
          <>
            conteudo do <b>slide 2</b>
          </>,
          "conteúdo do slide 3",
        ]}
      />

      <QuoteBox>
        [...] uma área do conhecimento, de característica interdisciplinar, que
        engloba produtos, recursos, metodologias, estratégias, práticas e
        serviços que objetivam promover a funcionalidade, relacionada a
        atividade e participação, de pessoas com deficiência, incapacidades ou
        mobilidade reduzida visando sua autonomia, independência, qualidade de
        vida e inclusão social&quot;.
      </QuoteBox>

      <PaginationText
        items={[
          "conteudo do slide 1",
          <>
            uma área do conhecimento, de característica interdisciplinar, que
            engloba produtos, recursos, metodologias, estratégias, práticas e
            serviços que objetivam promover a funcionalidade, relacionada a
            atividade e participação, de pessoas com deficiência, incapacidades
            ou mobilidade reduzida visando sua autonomia, independência,
            qualidade de vida e inclusão social&quot;
          </>,
          "conteúdo do slide 3",
        ]}
      />
    </DefaultPage>
  );
}

export default Page4;
