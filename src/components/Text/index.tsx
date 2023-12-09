import TextoStyled from "./styles";

type AlignText = "center" | "right" | "left" | "inherit" | "justify";

interface TextProps {
  children: JSX.Element | JSX.Element[] | string;
  align?: AlignText;
}

function Text({ children, align = "left" }: TextProps) {
  return !Array.isArray(children) ? (
    <TextoStyled variant="body1" align={align}>
      {children}
    </TextoStyled>
  ) : (
    <>
      {children.map((p, i) => (
        <TextoStyled variant="body1" key={`text-${i + 1}`} align={align}>
          {p.props.children}
        </TextoStyled>
      ))}
    </>
  );
}

export default Text;
