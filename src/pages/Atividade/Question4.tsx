import SubjetiveActivity from "../../components/SubjetiveActivity";

function Question4() {
  const data = {
    pergunta:
      "Joana chegou a um museu acompanhada de seu cão-guia, e foi impedida de acessar o estabelecimento sob a alegação de que as obras ali em exposição eram raras. ",
    feedbacks: "Certamente tá certo",
    resposta: "",
  };

  return <SubjetiveActivity data={data} id="4" close="/5" />;
}

export default Question4;
