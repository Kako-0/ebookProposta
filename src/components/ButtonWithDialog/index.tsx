import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import IconButton from "../IconButton";
import Leitor from "../Leitor/SpeechSynteshis";
import Text from "../Text";
import ComplementarIcon from "../../assets/icons/ComplementarIcon";
import ImportanteIcon from "../../assets/icons/ImportanteIcon";
import ObjetivoIcon from "../../assets/icons/ObjetivoIcon";
import ObservationIcon from "../../assets/icons/ObservationIcon";
import RefletindoIcon from "../../assets/icons/RefletindoIcon";
import SaberMaisIcon from "../../assets/icons/SaberMaisIcon";
import {
  ButtonStyled,
  DialogContainer,
  IconWrap,
  Title,
  TitleIcons,
} from "./styles";

type IconsType =
  | "complementar"
  | "importante"
  | "objetivo"
  | "observacao"
  | "refletindo"
  | "mais";

interface IconsListProps {
  [key: string]: {
    title: string;
    icon: JSX.Element;
  };
}

interface IconsProps {
  type: IconsType;
  icons: IconsListProps;
}

interface DialogTitleProps {
  children: string;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

interface BtnWithDialogProps {
  children: JSX.Element | JSX.Element[] | string;
  title?: string;
  icon?: IconsType;
  isOpen?: boolean;
}

function DialogTitle({ children, onClose }: DialogTitleProps) {
  return (
    <Title>
      {children}
      <TitleIcons>
        <Leitor component="#dialog" />
        <IconButton type="close" onClick={onClose} label="Fechar" />
      </TitleIcons>
    </Title>
  );
}

function Icon({ type, icons }: IconsProps) {
  return <IconWrap>{icons[type].icon}</IconWrap>;
}
function TitleIcon({ type, icons }: IconsProps) {
  return icons[type].title;
}

function ButtonWithDialog({
  children,
  title = "Open dialog",
  icon,
  isOpen = false,
}: BtnWithDialogProps) {
  const icons = {
    complementar: {
      title: "Complementar",
      icon: <ComplementarIcon className="complementar" />,
    },
    importante: {
      title: "Importante",
      icon: <ImportanteIcon />,
    },
    objetivo: {
      title: "Objetivo",
      icon: <ObjetivoIcon />,
    },
    observacao: {
      title: "Observação",
      icon: <ObservationIcon className="obs" />,
    },
    refletindo: {
      title: "Refletindo",
      icon: <RefletindoIcon className="refletindo" />,
    },
    mais: {
      title: "Para saber mais",
      icon: <SaberMaisIcon className="saberMais" />,
    },
  };
  const [open, setOpen] = useState(isOpen);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <ButtonStyled
        disableFocusRipple
        variant="contained"
        onClick={handleClickOpen}
        startIcon={icon && <Icon type={icon} icons={icons} />}
      >
        {icon ? TitleIcon({ type: icon, icons }) : title}
      </ButtonStyled>
      <DialogContainer
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="modal"
        open={open}
        id="dialog"
      >
        <DialogTitle onClose={handleClose}>
          {icon ? TitleIcon({ type: icon, icons }) : title}
        </DialogTitle>
        <DialogContent dividers>
          <Text>{children}</Text>
        </DialogContent>
      </DialogContainer>
    </div>
  );
}

export default ButtonWithDialog;
