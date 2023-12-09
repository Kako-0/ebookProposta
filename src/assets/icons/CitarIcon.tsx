import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

function CitarIcon(props: SvgIconProps) {
  const theme = useTheme();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <>
        <path
          d="M6.85714 18.2713C6.85714 19.1098 2.92669 22.6071 0.983714 23.6834C0.405228 24.0038 2.69185e-06 23.5677 3.47657e-06 22.9064C4.67627e-06 21.8954 0 20.9264 0 18.7682C0 14.0925 0 13.573 2.28571 13.573C6.85714 13.573 6.85714 13.573 6.85714 18.2713Z"
          fill={
            theme.themeMode === "default" ? theme.palette.primary.main : "#fff"
          }
        />
        <rect
          width="24"
          height="19.8375"
          rx="2"
          fill={
            theme.themeMode === "default" ? theme.palette.primary.main : "#fff"
          }
        />
        <path
          d="M10.2857 15.6612H6.85712L4.57141 11.4849V5.2204H11.4286V11.4849H7.99998M19.4286 15.6612H16L13.7143 11.4849V5.2204H20.5714V11.4849H17.1428L19.4286 15.6612Z"
          fill={theme.themeMode === "default" ? "#fff" : "#000"}
        />
      </>
    </SvgIcon>
  );
}

export default CitarIcon;
