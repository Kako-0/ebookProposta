import Text from "../../components/Text";
import DefaultPage from "../../components/DefaultPage";
import CascateBox from "../../components/CascateBox";
import ButtonWithDialog from "../../components/ButtonWithDialog";
import Reference from "../../components/Reference";

function Page1() {
  return (
    <DefaultPage title="Turismo Acessível">
      <Text>
        <p>
          O termo Turismo Acessível é comum no mercado do turismo e entre as
          pessoas com deficiência e seus familiares, mas na cadeia produtiva do
          turismo constatam-se ainda muitas dúvidas por parte dos profissionais
          sobre a terminologia, as informações, as normas, as leis e os serviços
          que se enquadram neste segmento.
        </p>
        <p>
          Por outro lado, uma parcela dos turistas com deficiência desconhece
          seus direitos e deveres estabelecidos em lei, que podem garantir uma
          viagem com autonomia e segurança.
        </p>
      </Text>
      <Text>
        <>
          Em seu Artigo 30, a Convenção Internacional sobre os Direitos das
          Pessoas com Deficiência considera um direito o acesso das pessoas com
          deficiência à vida cultural e em recreação, ao lazer, ao esporte e às
          atividades turísticas<Reference keyRef={1}>1</Reference>.
        </>
      </Text>
      <CascateBox title="!">
        Portanto o turismo é um direito de todos os cidadãos e deve seguir os
        documentos normativos que garantem a acessibilidade em viagens com
        autonomia e segurança.
      </CascateBox>
      <ButtonWithDialog icon="mais">Lorem ipsum textum modal</ButtonWithDialog>
    </DefaultPage>
  );
}

export default Page1;
