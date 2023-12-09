import { FormativeActivity } from "../../components/ObjetiveActivity";

function Question2() {
  const data = {
    pergunta:
      'Joana chegou a um museu acompanhada de seu cão-guia, e foi impedida de acessar o estabelecimento sob a alegação de que as obras ali em exposição eram raras. A curadoria afirmou que a presença de um "cachorro" traria riscos para a preservação dos elementos históricos do museu. Sobre isso, podemos dizer que se trata de uma:',
    alternativas: [
      "a)	Barreira atitudinal.",
      "b)	Barreira tecnológica.",
      "c)	Certa.",
      "d)	Barreira arquitetônica.",
    ],
    feedbacks: ["a)	CORRETA. ", "b)	INCORRETA.", "c)	CORRETA. ", "d)	INCORRETA."],
    resposta: "c",
    nota: 3,
  };
  return <FormativeActivity data={data} close="/5" id="2" next="3" />;
}

export default Question2;
