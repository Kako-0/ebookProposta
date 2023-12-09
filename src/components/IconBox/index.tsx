import Text from "../Text";
import ComplementarIcon from "../../assets/icons/ComplementarIcon";
import ImportanteIcon from "../../assets/icons/ImportanteIcon";
import ObjetivoIcon from "../../assets/icons/ObjetivoIcon";
import ObservationIcon from "../../assets/icons/ObservationIcon";
import RefletindoIcon from "../../assets/icons/RefletindoIcon";
import SaberMaisIcon from "../../assets/icons/SaberMaisIcon";
import {
  IconBoxContainer,
  IconBoxContent,
  IconWrap,
  TitleContainer,
} from "./styles";

type IconsType =
  | "complementar"
  | "importante"
  | "objetivo"
  | "observacao"
  | "refletindo"
  | "mais"
  | "citar";

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

interface IconBoxProps {
  children: JSX.Element | JSX.Element[] | string;
  icon: IconsType;
}

function Icon({ type, icons }: IconsProps) {
  return <IconWrap>{icons[type].icon}</IconWrap>;
}
function TitleIcon({ type, icons }: IconsProps) {
  return icons[type].title;
}

function IconBox({ icon, children }: IconBoxProps) {
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

  return (
    <IconBoxContainer>
      <TitleContainer>
        {icon !== "citar" && <Icon type={icon} icons={icons} />}
        {icon === "citar"
          ? "Como citar este material"
          : TitleIcon({ type: icon, icons })}
      </TitleContainer>
      <IconBoxContent>
        <Text>{children}</Text>
      </IconBoxContent>
    </IconBoxContainer>
  );
}

export default IconBox;
