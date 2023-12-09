import { FormativeActivity } from "../../components/ObjetiveActivity";

function Question1() {
  const data = {
    pergunta:
      'Joana chegou a um museu acompanhada de seu cão-guia, e foi impedida de acessar o estabelecimento sob a alegação de que as obras ali em exposição eram raras. A curadoria afirmou que a presença de um "cachorro" traria riscos para a preservação dos elementos históricos do museu. Sobre isso, podemos dizer que se trata de uma:',
    alternativas: [
      "a)	Barreira atitudinal.",
      "b)	Barreira tecnológica.",
      "c)	Barreira de transporte.",
      "d)	Barreira arquitetônica.",
    ],
    feedbacks: [
      "a)	CORRETA. Parabéns, você acertou! Todo tipo de postura e comportamento que dificulte a participação social da Pessoa com Deficiência na sociedade é uma barreira atitudinal.",
      "b)	INCORRETA. Barreiras tecnológicas são barreiras que impedem o acesso da Pessoa com Deficiência às tecnologias.",
      "c)	INCORRETA. Barreira de transporte é quando algum empecilho impede a mobilidade e o direito de ir e vir nas cidades.",
      "d)	INCORRETA. Barreiras arquitetônicas são todo tipo de obstáculo que impede as pessoas de desfrutarem e ocuparem o espaço físico.",
    ],
    resposta: "a",
    nota: 3,
  };

  return <FormativeActivity data={data} next="2" id="1" />;
}

export default Question1;
