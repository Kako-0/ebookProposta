/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import ButtonWithDialog from "../ButtonWithDialog";
import DataEbook from "../../routes/data";
import {
  Answer,
  ButtonSubmit,
  ButtonsContainer,
  ContentActivities,
  TitleActivity,
} from "./styles";
import API from "../../utils/api";
import IconButton from "../IconButton";

interface SubjetiveActivityProps {
  data: {
    pergunta: string;
    feedbacks: string;
    nota?: number;
  };
  next?: string;
  close?: string;
  id: string;
}
const KEY = `ATV_${DataEbook.KEY_EBOOK}`;

export default function SubjetiveActivity({
  data,
  next,
  close,
  id,
}: SubjetiveActivityProps) {
  const [submit, setSubmit] = useState(false);
  const [reply, setReply] = useState("");
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
          const newData = {
            ...dataAPI,
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
        <TextField
          id="respostaInput"
          label="Sua resposta"
          value={reply}
          required
          multiline
          rows={4}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setReply(event.target.value);
          }}
          disabled={submit}
          fullWidth
        />
      </Box>
      <ButtonsContainer>
        {submit ? (
          <Box className="boxDialog">
            <ButtonWithDialog title="Feedback da sua resposta" isOpen={submit}>
              {questions.feedbacks || ""}
            </ButtonWithDialog>
          </Box>
        ) : (
          <ButtonSubmit
            variant="contained"
            disableFocusRipple
            disabled={reply === "" || reply.length <= 2}
            onClick={() => {
              if (reply === "") return setSubmit(false);
              return setSubmit(true);
            }}
          >
            Confirmar resposta
          </ButtonSubmit>
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
    </ContentActivities>
  );
}
