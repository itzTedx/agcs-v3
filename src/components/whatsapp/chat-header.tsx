import { IconX } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";

import { Logo } from "@/assets/logo";

import { siteConfig } from "@/data/site-config";

interface ChatHeaderProps {
	onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
	return (
		<div className="flex flex-row items-center gap-3 space-y-0 bg-sky-600 p-4 text-background">
			<div className="relative flex size-12 items-center justify-center rounded-full bg-gray-50">
				<Logo className="p-2" />
				<span className="absolute right-0 bottom-0 flex size-3">
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
					<span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
				</span>
			</div>
			<div>
				<CardTitle className="mt-0 font-bold text-background text-sm">
					{siteConfig.shortName}
				</CardTitle>
				<CardDescription className="font-light text-muted text-xs">
					Typically replies within minutes
				</CardDescription>
			</div>
			<Button
				className="absolute -top-2 -right-2 size-6 rounded-full"
				onClick={onClose}
				size="icon"
				variant="outline"
			>
				<IconX />
			</Button>
		</div>
	);
}
