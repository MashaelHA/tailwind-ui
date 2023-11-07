import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function Download({ size, color }: SVGprop) {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "30"}
      height={size || "31"}
      stroke={color || "currentColor"}
      viewBox="0 0 30 31"
      fill="none"
    >
      <path
        d="M15 13V20.5M15 20.5L11.25 16.75M15 20.5L18.75 16.75M3.75 21.75V9.25C3.75 7.86929 4.86929 6.75 6.25 6.75H13.75L16.25 9.25H23.75C25.1307 9.25 26.25 10.3693 26.25 11.75V21.75C26.25 23.1307 25.1307 24.25 23.75 24.25H6.25C4.86929 24.25 3.75 23.1307 3.75 21.75Z"
        stroke={"#F5F0FF" || color }
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Download;
