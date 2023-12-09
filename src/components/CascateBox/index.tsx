import Text from "../Text";
import { CascateBoxContainer, CascateBoxContent, Title } from "./styles";

interface CascateBoxProps {
  title: string;
  children: JSX.Element | JSX.Element[] | string;
}

function CascateBox({ title, children }: CascateBoxProps) {
  return (
    <CascateBoxContainer>
      <Title variant="h4">{title}</Title>
      <CascateBoxContent>
        <Text>{children}</Text>
      </CascateBoxContent>
    </CascateBoxContainer>
  );
}

export default CascateBox;
