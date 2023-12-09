import { useState } from "react";
import ContourBox from "../ContourBox";
import { ButtonStyled } from "../ButtonWithDialog/styles";
import {
  ButtonsContainer,
  ButtonsLeft,
  ButtonsRight,
  MatrixButtonsBoxContainer,
} from "./styles";

interface MatrixButtonsBoxProps {
  image: string;
  altImage?: string;
  data: (string | JSX.Element)[];
}

function MatrixButtonsBox({ image, altImage, data }: MatrixButtonsBoxProps) {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <MatrixButtonsBoxContainer>
      <ButtonsContainer>
        <ButtonsLeft>
          <ButtonStyled disableFocusRipple onClick={() => setActiveButton(0)}>
            Botão 1
          </ButtonStyled>
          <ButtonStyled disableFocusRipple onClick={() => setActiveButton(1)}>
            Botão 2
          </ButtonStyled>
        </ButtonsLeft>
        <img src={image} alt={altImage || ""} />
        <ButtonsRight>
          <ButtonStyled disableFocusRipple onClick={() => setActiveButton(2)}>
            Botão 3
          </ButtonStyled>
          <ButtonStyled disableFocusRipple onClick={() => setActiveButton(3)}>
            Botão 4
          </ButtonStyled>
        </ButtonsRight>
      </ButtonsContainer>
      <ContourBox>{data[activeButton]}</ContourBox>
    </MatrixButtonsBoxContainer>
  );
}

export default MatrixButtonsBox;
