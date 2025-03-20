import { JSX, SVGProps } from "react";

export function WaveSeparator(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="936"
      viewBox="0 0 1920 936"
      fill="none"
    >
      <mask
        id="mask0_755_1752"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="-1"
        width="1920"
        height="937"
      >
        <path d="M0 -1H1920V936H0V-1Z" fill="#e4ecef" />
      </mask>
      <g mask="url(#mask0_755_1752)">
        <path
          d="M714 875.5C368.4 875.5 36 765 -33 718L-48 1079.5H2007C2033.4 1079.5 2018 967 2007 934C2007 934 1869.6 800.5 1620 800.5C1308 800.5 1146 875.5 714 875.5Z"
          fill="#e4ecef"
        />
      </g>
    </svg>
  );
}
