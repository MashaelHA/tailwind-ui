import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function LanguageLTRIcon({ size, color }: SVGprop) {
  const theme = useTheme();

  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4768 22C9.42335 22 7.827 21.5218 6.68776 20.5654C5.56259 19.609 5 18.2588 5 16.5148C5 15.4037 5.31646 14.4051 5.94937 13.519C6.59634 12.6329 7.62307 11.8523 9.02954 11.1772V11.0717C8.15752 10.5373 7.51758 9.94655 7.1097 9.29958C6.71589 8.63854 6.51899 7.89311 6.51899 7.06329C6.51899 6.41631 6.6315 5.79044 6.85654 5.18565C7.08158 4.56681 7.40506 4.02532 7.827 3.56118C8.26301 3.08298 8.7834 2.70324 9.38819 2.42194C10.007 2.14065 10.7032 2 11.4768 2C12.5176 2 13.4037 2.2391 14.135 2.7173C14.8664 3.1955 15.4571 3.82138 15.9072 4.59494L13.6498 6.59916C13.3404 6.10689 12.9817 5.74824 12.5738 5.52321C12.166 5.28411 11.6596 5.16456 11.0549 5.16456C10.2954 5.16456 9.69761 5.3263 9.2616 5.64979C8.83966 5.97328 8.62869 6.45148 8.62869 7.08439C8.62869 8.37834 9.67651 9.02532 11.7722 9.02532C12.166 9.02532 12.5879 9.00422 13.038 8.96203C13.488 8.91983 13.9873 8.84951 14.5359 8.75105L16.2236 8.4557L16.7089 11.3671L13.9451 11.8312C11.6526 12.211 9.9789 12.7314 8.92405 13.3924C7.8692 14.0534 7.34177 14.9184 7.34177 15.9873V16.2405C7.34177 17.1266 7.70745 17.7806 8.43882 18.2025C9.17018 18.6245 10.1828 18.8354 11.4768 18.8354C12.4895 18.8354 13.488 18.6526 14.4726 18.2869C15.4712 17.9353 16.3291 17.429 17.0464 16.7679L18.6287 19.2574C17.7426 20.1153 16.6737 20.7834 15.4219 21.2616C14.1702 21.7539 12.8551 22 11.4768 22Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
}

export default LanguageLTRIcon;
