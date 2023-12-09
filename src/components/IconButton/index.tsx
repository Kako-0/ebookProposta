import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import CreateIcon from "@mui/icons-material/CreateRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import { Link } from "react-router-dom";
import { ButtonProps, Tooltip } from "@mui/material";
import { forwardRef } from "react";
import IconButtonStyled from "./styles";
import { DownloadIcon, HelpIcon } from "./icons";
import HomeIcon from "../../assets/icons/HomeIcon";

type IconType =
  | "playRead"
  | "stopRead"
  | "menu"
  | "replay"
  | "previous"
  | "next"
  | "close"
  | "home"
  | "help"
  | "download"
  | "marker"
  | "comment";

interface IconButtonProps {
  type: IconType;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: string;
  label: string;
}

type LinkButtonProps<C extends React.ElementType> = ButtonProps<
  C,
  { component?: C }
>;

const LinkButton = forwardRef<
  HTMLButtonElement,
  LinkButtonProps<React.ElementType>
>((props, ref) => {
  return <IconButtonStyled ref={ref} {...props} />;
});

LinkButton.displayName = "LinkButton";

const Icon = ({ iconType }: { iconType: IconType }) => {
  const typeIcon = {
    playRead: <RecordVoiceOverRoundedIcon />,
    stopRead: <StopRoundedIcon />,
    menu: <MenuRoundedIcon className="menuIcon" />,
    replay: <ReplayRoundedIcon />,
    previous: <ArrowBackIosNewRoundedIcon />,
    next: <ArrowForwardIosRoundedIcon />,
    close: <CloseRoundedIcon className="menuIcon" />,
    home: <HomeIcon className="homeIcon" />,
    help: <HelpIcon fill="#fff" />,
    download: <DownloadIcon fill="#fff" />,
    marker: <CreateIcon />,
    comment: <TextsmsRoundedIcon />,
  };

  return typeIcon[iconType];
};

export default function IconButton({
  type,
  disabled = false,
  onClick,
  to,
  label,
}: IconButtonProps) {
  if (disabled) {
    return to ? (
      <LinkButton
        disableRipple
        component={Link}
        to={to}
        aria-label={`Botão ${label}`}
        disableFocusRipple
        disabled={disabled}
        className={disabled ? "disabled noRead" : "noRead"}
      >
        <Icon iconType={type} />
      </LinkButton>
    ) : (
      <IconButtonStyled
        disableRipple
        onClick={onClick}
        aria-label={`Botão ${label}`}
        disableFocusRipple
        disabled={disabled}
        className={disabled ? "disabled noRead" : "noRead"}
      >
        <Icon iconType={type} />
      </IconButtonStyled>
    );
  }
  return to ? (
    <Tooltip title={label} arrow>
      <LinkButton
        disableRipple
        component={Link}
        to={to}
        aria-label={`Botão ${label}`}
        disableFocusRipple
        disabled={disabled}
        className={disabled ? "disabled noRead" : "noRead"}
      >
        <Icon iconType={type} />
      </LinkButton>
    </Tooltip>
  ) : (
    <Tooltip title={label} arrow>
      <IconButtonStyled
        disableRipple
        onClick={onClick}
        aria-label={`Botão ${label}`}
        disableFocusRipple
        disabled={disabled}
        className={disabled ? "disabled noRead" : "noRead"}
      >
        <Icon iconType={type} />
      </IconButtonStyled>
    </Tooltip>
  );
}
