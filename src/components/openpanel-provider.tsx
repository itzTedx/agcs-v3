import { OpenPanelComponent } from "@openpanel/nextjs";

export const OpenPanelProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<>
			<OpenPanelComponent
				clientId="aa088aa5-1af9-40f1-b44e-fdacf6767b15"
				// clientSecret="sec_acfb0b4417711f4ff804"
				trackAttributes={true}
				trackHashChanges={true}
				trackOutgoingLinks={true}
				trackScreenViews={true}
			/>
			{children}
		</>
	);
};
