/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Tooltip } from "@mui/material";
import IconButton from "../IconButton";
import SpeedAudio from "./styles";

function Leitor(props: { component: string }) {
  const { component } = props;
  const page = useLocation();
  const [texts, setTexts] = useState<string[]>([]);
  const [fallback, setFallback] = useState<Element | null>(null);
  const [speed, setSpeed] = useState(1);
  const [isPlay, setIsPlay] = useState(false);
  const synth = window.speechSynthesis;
  const voice = synth.getVoices().filter((voicesSynth) => {
    return voicesSynth.name === "Portuguese (Brazil)";
  })[0];

  const getElementText = useCallback((el: Node) => {
    const text: string[] = [];
    if (el.nodeType === 1 && (el as Element).classList.contains("noRead"))
      return text;

    if (el.nodeType === 3 || el.nodeType === 4) {
      text.push((el as CharacterData).nodeValue!);
    } else if (
      (el.nodeType === 1 &&
        ["a", "button"].includes((el as Element).tagName.toLowerCase())) ||
      (el as HTMLInputElement).type?.toLowerCase() === "checkbox"
    ) {
      if ((el as HTMLElement).getAttribute("aria-label")) {
        text.push((el as HTMLElement).getAttribute("aria-label")!);
      }
    } else if (
      (el.nodeType === 1 &&
        ["img", "area"].includes((el as Element).tagName.toLowerCase())) ||
      (el as HTMLInputElement).type?.toLowerCase() === "image"
    ) {
      if ((el as HTMLElement).getAttribute("alt")) {
        text.push((el as HTMLElement).getAttribute("alt")!);
      }
    } else if (
      el.nodeType === 1 &&
      !["script", "style", "svg"].includes(
        (el as Element).tagName.toLowerCase()
      )
    ) {
      const children = el.childNodes;
      for (let i = 0; i < children.length; i += 1) {
        text.push(...getElementText(children[i]));
      }
    }

    return text;
  }, []);

  const changeSpeed = () => {
    const speeds = [1, 1.25, 1.5, 1.75, 2];
    const currentSpeedIndex = speeds.indexOf(speed);
    const nextSpeedIndex = (currentSpeedIndex + 1) % speeds.length;
    const nextSpeed = speeds[nextSpeedIndex];
    setSpeed(nextSpeed);
  };

  const stopSpeech = () => {
    setIsPlay(!isPlay);
    synth.cancel();
  };

  const speakText = (text: string): Promise<void> => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      utterance.rate = speed + 0.05;
      utterance.onend = () => resolve();
      synth.speak(utterance);
    });
  };

  const startSpeech = async () => {
    const promises: Promise<void>[] = [];
    setIsPlay(!isPlay);
    texts.forEach((text) => {
      promises.push(speakText(text));
    });
    await Promise.all(promises);
    setIsPlay(false);
  };

  useEffect(() => {
    setFallback(document.querySelector(`${component}`));
  }, [component]);

  useEffect(() => {
    if (fallback !== null) {
      let root: HTMLElement;

      if (component === "#main") {
        root = document.getElementById("main")!;
        setTimeout(() => {
          const text = getElementText(root);
          setTexts(text);
        }, 1000);
      } else {
        root = document.querySelector(`${component}`)!;
        const text = getElementText(root);
        setTexts(text);
      }
    }
  }, [fallback, component, page, getElementText]);

  return (
    <>
      <IconButton
        label={isPlay ? "Parar leitura" : "Iniciar leitura"}
        type={isPlay ? "stopRead" : "playRead"}
        onClick={() => (isPlay ? stopSpeech() : startSpeech())}
      />
      <Tooltip title="Velocidade da leitura" arrow>
        <SpeedAudio
          disableRipple
          aria-label="Botão velocidade da leitura"
          onClick={() => changeSpeed()}
        >
          {`x${speed.toFixed(2)}`}
        </SpeedAudio>
      </Tooltip>
    </>
  );
}

export default Leitor;
