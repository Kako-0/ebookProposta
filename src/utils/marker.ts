import { useEffect, useState } from "react";
import API from "./api";
import DataEbook from "../routes/data";

const KEY = `highlight_${DataEbook.KEY_EBOOK}`;

const useTextMarker = () => {
  const [isMarkerActive, setIsMarkerActive] = useState(false);
  const [markers, setMarkers] = useState<string[]>([]);

  function searchInPTags(searchTerm: string) {
    const pTags = document.getElementsByTagName("p"); // Obtém todas as tags <p> da página
    const matchingPTags = []; // Array para armazenar as tags <p> que contêm o termo pesquisado

    for (let i = 0; i < pTags.length; i += 1) {
      const pTagText = pTags[i].textContent!.toLowerCase(); // Obtém o texto da tag <p> atual e converte para minúsculas
      if (pTagText.includes(searchTerm.toLowerCase())) {
        // Verifica se o termo pesquisado está contido no texto da tag <p>
        const span = document.createElement("span"); // Cria um elemento <span>
        span.textContent = searchTerm; // Define o texto do elemento <span> como o termo pesquisado
        span.style.backgroundColor = "yellow"; // Define a cor de fundo do elemento <span> como amarelo (apenas para fins de destaque)

        const pTagContent = pTags[i].innerHTML; // Obtém o conteúdo HTML da tag <p> atual
        const highlightedPTagContent = pTagContent.replace(
          new RegExp(searchTerm, "gi"),
          `<span classname="highlight">${searchTerm}</span>`
        ); // Substitui todas as ocorrências do termo pesquisado na tag <p> atual por um elemento <span> com a cor de fundo amarela
        pTags[i].innerHTML = highlightedPTagContent; // Define o conteúdo HTML da tag <p> atual como o conteúdo HTML modificado que contém o elemento <span> de destaque

        matchingPTags.push(pTags[i]); // Adiciona a tag <p> atual ao array de tags correspondentes
      }
    }

    return matchingPTags; // Retorna o array de tags <p> que contêm o termo pesquisado
  }

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      if (selection?.rangeCount) {
        const range = selection.getRangeAt(0);
        const highlighted = document.createElement("span");
        highlighted.className = "highlight";
        highlighted.appendChild(range.extractContents());
        range.insertNode(highlighted);
        selection.removeAllRanges();
        setMarkers([...markers, highlighted.outerHTML]);
      }
    };

    if (isMarkerActive) {
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMarkerActive, markers]);

  useEffect(() => {
    const init = async () => {
      const data = await API.getComments(KEY);
      if (data !== null) {
        setMarkers(() => data.highlights);
      } else {
        await API.sendComment(KEY, {
          highlights: markers,
        });
      }
    };
    init();
  }, [markers]);

  const toggleMarker = () => {
    setIsMarkerActive(!isMarkerActive);
  };

  const restoreMarkers = () => {
    const storedMarkers = window.sessionStorage.getItem(KEY);
    if (storedMarkers) {
      const parsedMarkers = JSON.parse(storedMarkers);
      setMarkers(parsedMarkers);
      parsedMarkers.forEach((marker: string) => {
        const temp = document.createElement("div");
        temp.innerHTML = marker;
        const el = temp.firstChild as HTMLElement;
        if (el) {
          el.classList.add("highlight");
          el.removeAttribute("style");
          el.removeAttribute("class");
          document.body.appendChild(el);
        }
      });
    }
  };

  return { toggleMarker, restoreMarkers, searchInPTags };
};

export default useTextMarker;
