"use client";

import { useCallback, useEffect, useState } from "react";

import { motion } from "motion/react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { Icons } from "@/assets/icons";

import { siteConfig } from "@/data/site-config";
import { cn, getCurrentTime } from "@/lib/utils";

import { TypeWriter } from "../animations/type-writer-blocks";
import { ChatHeader } from "../whatsapp/chat-header";
import { ChatInput } from "../whatsapp/chat-input";

const examples = [
	"Frequently asked question 1?",
	"Frequently asked question 2?",
	"Frequently asked question 3?",
];

export default function FloatingWhatsapp({
	className,
}: {
	className?: string;
}) {
	const [showMessage, setShowMessage] = useState(false);
	const [isPopupVisible, setIsPopupVisible] = useState(false);

	useEffect(() => {
		const delay = 1 * 1000;
		let timer: NodeJS.Timeout;

		if (isPopupVisible) {
			timer = setTimeout(() => {
				setShowMessage(true);
			}, delay);
		}
		return () => clearTimeout(timer);
	}, [isPopupVisible]);

	const handleClick = useCallback(() => {
		setIsPopupVisible(true);
	}, []);

	const sendMessageToWhatsApp = useCallback((messageToSend: string) => {
		if (!messageToSend.trim()) return;
		const encodedMessage = encodeURIComponent(messageToSend);
		const whatsappUrl = `https://wa.me/${siteConfig.contact[0].replace(/\s/g, "").replace(/\+/g, "")}?text=${encodedMessage}`;
		window.open(whatsappUrl, "_blank");
	}, []);

	return (
		<div
			className={cn("fixed right-3 z-99999999 transition-all", className)}
			style={{
				bottom: "3vh",
			}}
		>
			<Popover onOpenChange={setIsPopupVisible} open={isPopupVisible}>
				<PopoverTrigger
					aria-label="Open WhatsApp Chat"
					className="cursor-pointer overflow-hidden rounded-full border shadow-lg"
					onClick={handleClick}
				>
					<div className="flex size-14 items-center justify-center bg-sky-700">
						<Icons.whatsapp className="size-7" />
						<p className="sr-only">Chat with us in whatsapp</p>
					</div>
				</PopoverTrigger>
				<PopoverContent
					align="end"
					className="w-[24rem] overflow-hidden rounded-xl border-sky-600 p-0 shadow-sky-800/10"
				>
					<Card className="gap-0 border-0 pt-0">
						<ChatHeader onClose={() => setIsPopupVisible(false)} />
						<CardContent className="bg-[url('/whatsapp-bg.webp')] bg-cover px-6 py-0 pb-1.5">
							<div className="relative h-48 border-0 pt-4">
								<div className="whatsapp-clip absolute top-4 -left-3 z-999 inline-block h-0 w-0" />
								<motion.div
									className="w-fit rounded-lg bg-sky-600 p-3 px-4 text-background shadow-md"
									layout
								>
									{showMessage ? (
										<div className="min-w-52">
											<h6 className="pr-12 pb-1.5 font-bold text-sm">
												{siteConfig.shortName}
											</h6>
											<p className="text-sm">
												Hello there! 🤝
												<br />
												<strong>Have Questions?</strong> We&apos;d love to help!
											</p>
											<aside className="pt-1 text-right text-muted text-xs">
												{getCurrentTime()}
											</aside>
										</div>
									) : (
										<div className="flex h-4 items-center">
											<div className="dot" />
											<div className="dot" />
											<div className="dot" />
										</div>
									)}
								</motion.div>
							</div>
							<div className="w-full rounded-md bg-background/20 px-2 backdrop-blur-sm">
								<TypeWriter
									examples={examples}
									onExampleClick={sendMessageToWhatsApp}
								/>
							</div>
						</CardContent>
						<CardFooter>
							<ChatInput onSendMessage={sendMessageToWhatsApp} />
						</CardFooter>
					</Card>
				</PopoverContent>
			</Popover>
		</div>
	);
}
