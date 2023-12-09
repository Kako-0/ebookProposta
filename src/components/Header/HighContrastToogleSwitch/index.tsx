import ContrastRoundedIcon from "@mui/icons-material/ContrastRounded";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import ThemeContext from "../../../contexts/ThemeContext";
import { SwitchContainer, SwitchStyled } from "./styles";

function HighContrast() {
  const [isChecked, setIsChecked] = useState(false);
  const { setThemeMode } = useContext(ThemeContext);

  const handleChange = () => {
    setIsChecked((checkedPrevious) => !checkedPrevious);
  };

  useEffect(() => {
    setThemeMode(() => (isChecked ? "contrast" : "default"));
  }, [isChecked, setThemeMode]);

  return (
    <SwitchContainer>
      <ContrastRoundedIcon />
      <Tooltip title="Alto Contraste" arrow>
        <SwitchStyled
          id="contrastSwitch"
          inputProps={{ role: "switch", "aria-label": "Botão Alto Contraste" }}
          checked={isChecked}
          onChange={handleChange}
          size="small"
        />
      </Tooltip>
    </SwitchContainer>
  );
}

export default HighContrast;
