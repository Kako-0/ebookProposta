import { Box } from "@mui/material";
import Text from "../../components/Text";
import DefaultPage from "../../components/DefaultPage";
import { ButtonFormativeAtv } from "../../components/ObjetiveActivity";

export default function Page5() {
  return (
    <DefaultPage title="Atividade formativa">
      <Box className="text">
        <Text>
          Agora que você conheceu a história de Joana e pôde reconhecer a
          audiodescrição como recurso de inclusão para que a pessoa com
          Deficiência Visual possa desfrutar do turismo com acessibilidade, você
          irá responder a uma atividade de caráter formativo, ou seja, que não
          será somada às demais atividades avaliativas necessárias para obtenção
          do seu certificado, tendo o intuito de avaliar sua compreensão sobre o
          conteúdo estudado.
        </Text>
      </Box>
      <ButtonFormativeAtv />
    </DefaultPage>
  );
}
