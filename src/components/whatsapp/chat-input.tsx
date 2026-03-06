import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Icons } from "@/assets/icons";

interface ChatInputProps {
	onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
	const [message, setMessage] = useState("");

	const handleSend = useCallback(() => {
		if (message.trim()) {
			onSendMessage(message);
			setMessage("");
		}
	}, [message, onSendMessage]);

	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === "Enter") {
				handleSend();
			}
		},
		[handleSend]
	);

	return (
		<div className="flex w-full items-center gap-2">
			<Input
				className="rounded-full py-2 placeholder:text-sm"
				onChange={(e) => setMessage(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder="Type your message..."
				type="text"
				value={message}
			/>
			<Button
				className="px-1.5"
				onClick={handleSend}
				size="icon"
				type="submit"
				variant="ghost"
			>
				<Icons.send className="fill-muted-foreground" />
			</Button>
		</div>
	);
}
