import { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material";
import RefContext from "../../contexts/ReferenceContext";
import ThemeContext from "../../contexts/ThemeContext";

interface ReferenceProps {
  color?: string;
  keyRef: number;
  children: string;
}
interface ReferenceStyledProps {
  color: string;
}
const StyledReference = styled.sup<ReferenceStyledProps>`
  border: none;
  background-color: transparent;
  color: ${(props) => props.color};
  cursor: pointer;
  font-weight: 900;
  transition: 250ms;

  :hover {
    opacity: 0.6;
  }
  :focus {
    outline: none;
    text-decoration: underline;
  }
`;

function Reference({ color, keyRef = 0, children }: ReferenceProps) {
  const { setReference } = useContext(RefContext);
  const { isContrast } = useContext(ThemeContext);
  const themeUtil = useTheme();
  return (
    <StyledReference
      onClick={() => {
        setReference(keyRef);
      }}
      color={!isContrast && color ? color : themeUtil.palette.text.primary}
    >
      {children}
    </StyledReference>
  );
}

export default Reference;
