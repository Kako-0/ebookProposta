import Text from "../../components/Text";
import DefaultPage from "../../components/DefaultPage";
import CascateBox from "../../components/CascateBox";

function Page1() {
  return (
    <DefaultPage title="Apresentação">
      <Text>
        <p>Olá, aluna(o)!</p>
        <p>
          O Turismo Acessível está integrado ao turismo social e é tido como um
          conjunto de ações que visa promover a inclusão social, dando ênfase ao
          acesso das pessoas com deficiência e/ou com mobilidade limitada à
          atividade turística.
        </p>
      </Text>

      <CascateBox title="?">
        Você sabe qual o impacto do Turismo Acessível global no mercado e como é
        realizado o planejamento para a viagem?
      </CascateBox>

      <Text>
        <p>
          Neste recurso, você obterá orientações sobre o Turismo Acessível e os
          comportamentos do turista com deficiência, segundo a Organização
          Mundial do Turismo (OMT), como também, sobre os dados censitários e as
          projeções de gastos do mercado global nesta atividade econômica. Vamos
          lá?
        </p>
        <p>Bons estudos!</p>
      </Text>

      <CascateBox title="Objetivo">
        A partir desse recurso, espera-se que você seja capaz de compreender a
        definição de Turismo Acessível.
      </CascateBox>
    </DefaultPage>
  );
}

export default Page1;
