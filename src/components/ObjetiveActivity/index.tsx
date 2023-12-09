/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonWithDialog from "../ButtonWithDialog";
import Text from "../Text";
import DataEbook from "../../routes/data";
import {
  AlternativesContainer,
  Answer,
  BtnContainer,
  ButtonsContainer,
  ContentActivities,
  TitleActivity,
} from "./styles";
import API from "../../utils/api";
import IconButton from "../IconButton";

interface FormativeActivityProps {
  data: {
    pergunta: string;
    alternativas: string[];
    feedbacks: string[];
    resposta: string;
    nota?: number;
  };
  next?: string;
  close?: string;
  id: string;
}
const KEY = `ATV_${DataEbook.KEY_EBOOK}`;

export function ButtonFormativeAtv() {
  const { tentativasPadrao } = DataEbook;
  const [tentativas, setTentativas] = useState(tentativasPadrao);
  const [nota, setNota] = useState(0);

  useEffect(() => {
    const init = async () => {
      const data = await API.getData(KEY);
      if (data !== null) {
        setTentativas(() =>
          Number(data.tentativas) >= -1 ? Number(data.tentativas) : -1
        );
        setNota(() => Number(data.nota));
      } else {
        await API.setData(KEY, {
          tentativas: `${tentativas}`,
          nota: `${nota}`,
        });
      }
    };
    init();
  }, [tentativas, nota]);

  const HandleTries = async () => {
    const data = await API.getData(KEY);
    if (data !== null && data.tentativas !== undefined) {
      if (Number(data.tentativas) <= 0) {
        const newData = { ...data, tentativas: `${tentativas - 1}` };
        await API.setData(KEY, {
          ...newData,
        });
      } else {
        const newData = { ...data, tentativas: `${tentativas - 1}`, nota: "0" };
        await API.setData(KEY, {
          ...newData,
        });
      }
    }
  };
  return (
    <>
      <Text>
        {tentativas <= 0 ? (
          <p>
            <b>Você atingiu o número máximo de tentativas.</b>
          </p>
        ) : (
          <p>
            Você terá <b>{tentativas}</b> tentativas para responder às questões.
          </p>
        )}
        {tentativas < tentativasPadrao ? (
          <p>
            <b>Sua nota: {nota}</b>
          </p>
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <></>
        )}
        <p>Vamos lá?</p>
      </Text>
      <BtnContainer>
        <Button
          role="button"
          component={Link}
          to="/atividade/1"
          onClick={() => {
            if (tentativas >= 0) {
              HandleTries();
            }
          }}
          variant="contained"
          className="buttonAtv"
        >
          {tentativas <= 0
            ? "Clique aqui para rever seus feedbacks"
            : "Clique aqui para acessar a atividade"}
        </Button>
        <p>Submeter nota</p>
      </BtnContainer>
    </>
  );
}

export function FormativeActivity({
  data,
  next,
  close,
  id,
}: FormativeActivityProps) {
  const [submit, setSubmit] = useState(false);
  const [reply, setReply] = useState("0");
  const questions = data;
  const letra = id;

  const onSubmit = (letraSubmit: string) => {
    setReply(letraSubmit);
    setSubmit(true);
  };

  useEffect(() => {
    const setData = async () => {
      if (letra !== "") {
        const dataAPI = await API.getData(KEY);
        const question = `reply_question_${letra}`;
        if (dataAPI && Number(dataAPI.tentativas) < 0) {
          onSubmit(dataAPI[question]);
        } else if (dataAPI && data.nota !== undefined) {
          const notaFinal = Number(dataAPI!.nota);
          const somaNota =
            reply === data.resposta ? notaFinal + data.nota : notaFinal;
          const newData = {
            ...dataAPI,
            nota: `${somaNota}`,
            [question]: reply,
          };

          await API.setData(KEY, {
            ...newData,
          });
        } else {
          await API.setData(KEY, {
            ...dataAPI!,
            [question]: reply,
          });
        }
      }
    };
    setData();
  }, [reply, data, letra]);

  return (
    <ContentActivities>
      <TitleActivity>
        <Typography
          component="h3"
          variant="h5"
        >{`Questão ${letra}`}</Typography>
        {close && (
          <IconButton
            type="close"
            label="Página inicial da atividade"
            to={`..${close}`}
            disabled={!submit}
          />
        )}
      </TitleActivity>
      <Box className="contentActivities">
        <Answer>
          <Typography variant="body1">{questions.pergunta}</Typography>
        </Answer>
        <AlternativesContainer>
          {questions.alternativas.map((item, index) => {
            const letraAlternativa = item.slice(0, 1);
            return (
              <Button
                key={`letra-${index + 1}`}
                role="radio"
                aria-label={item}
                aria-checked={reply === letraAlternativa}
                aria-posinset={index + 1}
                className={
                  reply === letraAlternativa
                    ? "alternativa alternativaEscolhida"
                    : "alternativa alternativaNaoEscolhida"
                }
                onClick={() => {
                  onSubmit(letraAlternativa);
                }}
                disabled={submit}
                disableFocusRipple
              >
                {item}
              </Button>
            );
          })}
        </AlternativesContainer>
        <ButtonsContainer>
          {reply !== "0" && (
            <Box className="boxDialog">
              <ButtonWithDialog
                title="Feedback da sua resposta"
                isOpen={submit}
              >
                {questions.feedbacks.find((e) => e.slice(0, 1) === reply) || ""}
              </ButtonWithDialog>
            </Box>
          )}
          {next && (
            <IconButton
              type="next"
              label="Questão seguinte"
              to={`/atividade/${next}`}
              disabled={!submit}
            />
          )}
        </ButtonsContainer>
      </Box>
    </ContentActivities>
  );
}
