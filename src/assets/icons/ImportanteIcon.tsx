import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

function ImportanteIcon(props: SvgIconProps) {
  const theme = useTheme();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.92963 15.9611H15.1466L15.1178 0.317794H9.98727L9.92963 15.9611Z"
        fill={theme.themeMode === "default" ? "#fff" : "#000"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.95845 23.8836H15.0025L15.1466 18.6403H9.92963L9.95845 23.8836Z"
        fill={theme.themeMode === "default" ? "#fff" : "#000"}
      />
    </SvgIcon>
  );
}

export default ImportanteIcon;
