"use client";

import { OpenPanelComponent } from "@openpanel/nextjs";

export const OpenPanelProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<>
			<OpenPanelComponent
				clientId="1a99dd02-c759-4d91-a850-52c475f327e1"
				clientSecret="sec_af5fe05e2539031c5cc7"
				trackAttributes={true}
				trackHashChanges={true}
				trackOutgoingLinks={true}
				trackScreenViews={true}
			/>
			{children}
		</>
	);
};
