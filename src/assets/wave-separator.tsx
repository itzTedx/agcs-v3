import type { JSX, SVGProps } from "react";

export function WaveSeparator(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			aria-hidden="true"
			{...props}
			fill="none"
			height="936"
			viewBox="0 0 1920 936"
			width="1920"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				height="937"
				id="mask0_755_1752"
				maskUnits="userSpaceOnUse"
				style={{ maskType: "alpha" }}
				width="1920"
				x="0"
				y="-1"
			>
				<path d="M0 -1H1920V936H0V-1Z" fill="#currentColor" />
			</mask>
			<g mask="url(#mask0_755_1752)">
				<path
					d="M714 875.5C368.4 875.5 36 765 -33 718L-48 1079.5H2007C2033.4 1079.5 2018 967 2007 934C2007 934 1869.6 800.5 1620 800.5C1308 800.5 1146 875.5 714 875.5Z"
					fill="#currentColor"
				/>
			</g>
		</svg>
	);
}
