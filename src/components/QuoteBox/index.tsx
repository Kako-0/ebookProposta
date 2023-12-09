import Text from "../Text";
import QuoteIcon from "../../assets/icons/CitarIcon";
import { QuoteContainer, IconContainer, TextContainer } from "./styles";

interface QuoteBoxProps {
  children: JSX.Element | JSX.Element[] | string;
}

function QuoteBox({ children }: QuoteBoxProps) {
  return (
    <QuoteContainer>
      <IconContainer>
        <QuoteIcon />
      </IconContainer>
      <TextContainer>
        <Text>{children}</Text>
      </TextContainer>
    </QuoteContainer>
  );
}

export default QuoteBox;
