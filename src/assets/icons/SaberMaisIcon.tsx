import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

function SaberMaisIcon(props: SvgIconProps) {
  const theme = useTheme();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <>
        <path
          opacity="0.46"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8433 5.24867C15.7949 5.14572 18.2743 7.57531 18.3727 10.6844C18.4711 13.7728 16.1491 16.3671 13.1778 16.4701C10.2261 16.573 7.74673 14.1434 7.64834 11.0344C7.54995 7.94593 9.87193 5.35162 12.8433 5.24867Z"
          fill="white"
        />
        <rect
          x="10.6345"
          y="8.48132"
          width="11.5127"
          height="1.42344"
          rx="0.711719"
          fill={theme.themeMode === "default" ? "#fff" : "#000"}
        />
        <rect
          x="10.6345"
          y="10.8537"
          width="11.5127"
          height="1.42344"
          rx="0.711719"
          fill={theme.themeMode === "default" ? "#fff" : "#000"}
        />
        <rect
          x="10.6345"
          y="13.2261"
          width="11.5127"
          height="1.42344"
          rx="0.711719"
          fill={theme.themeMode === "default" ? "#fff" : "#000"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.76321 15.2347L1.19441 21.494C0.387623 22.544 2.27669 24.3971 3.47703 23.8L9.02616 17.4584L6.76321 15.2347Z"
          fill={
            theme.themeMode === "default" ? theme.palette.primary.main : "#fff"
          }
          stroke={
            theme.themeMode === "default"
              ? theme.palette.secondary.main
              : "#000"
          }
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7646 3.0044C16.9166 2.86027 20.3799 6.27817 20.5176 10.6226C20.6554 14.9671 17.3889 18.5909 13.2369 18.735C9.08486 18.8791 5.62158 15.4612 5.48383 11.1168C5.36577 6.77232 8.6126 3.12793 12.7646 3.0044ZM12.8433 5.24868C9.89165 5.35163 7.55 7.94594 7.64839 11.0344C7.74678 14.1229 10.2262 16.5731 13.1778 16.4701C16.1295 16.3672 18.4712 13.7728 18.3728 10.6844C18.2744 7.57533 15.795 5.14573 12.8433 5.24868Z"
          fill={
            theme.themeMode === "default" ? theme.palette.primary.main : "#fff"
          }
          stroke={
            theme.themeMode === "default"
              ? theme.palette.secondary.main
              : "#000"
          }
        />
      </>
    </SvgIcon>
  );
}

export default SaberMaisIcon;
