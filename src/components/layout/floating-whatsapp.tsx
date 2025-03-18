"use client";

import { useCallback, useEffect, useState } from "react";

import { motion } from "motion/react";

import { Icons } from "@/assets/icons";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  const updateViewportHeight = useCallback(() => {
    const newHeight = window.visualViewport?.height || window.innerHeight; // Use optional chaining
    if (window.innerWidth < 768) {
      setViewportHeight(newHeight);
    }
  }, []);

  useEffect(() => {
    window.visualViewport?.addEventListener("resize", updateViewportHeight);

    // Cleanup event listener
    return () => {
      window.visualViewport?.removeEventListener(
        "resize",
        updateViewportHeight
      );
    };
  }, [updateViewportHeight]);

  useEffect(() => {
    const delay = 1 * 1000;
    let timer: NodeJS.Timeout;

    if (isPopupVisible) {
      timer = setTimeout(() => {
        setShowMessage(true);
      }, delay);
    }
    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [isPopupVisible]);

  const handleClick = useCallback(() => {
    setIsPopupVisible(true);
    updateViewportHeight(); // Update height on click
  }, [updateViewportHeight]);

  const sendMessageToWhatsApp = useCallback((messageToSend: string) => {
    if (!messageToSend.trim()) return;
    const encodedMessage = encodeURIComponent(messageToSend);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.replace(/\s/g, "").replace(/\+/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  }, []);

  return (
    <div
      className={cn("fixed right-3 z-[99999999] transition-all", className)}
      style={{
        bottom: viewportHeight < window.innerHeight ? "30vh" : "3vh",
      }}
    >
      <Popover open={isPopupVisible} onOpenChange={setIsPopupVisible}>
        <PopoverTrigger
          onClick={handleClick}
          className="cursor-pointer overflow-hidden rounded-full border shadow-lg"
        >
          <div className="flex size-14 items-center justify-center bg-sky-700">
            <Icons.whatsapp className="size-7" />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-[24rem] overflow-hidden rounded-xl border-sky-600 p-0 shadow-sky-800/10"
        >
          <Card className="gap-0 border-0 pt-0">
            <ChatHeader onClose={() => setIsPopupVisible(false)} />
            <CardContent className="bg-[url('/whatsapp-bg.webp')] bg-cover px-6 py-0 pb-1.5">
              <div className="relative h-[12rem] border-0 pt-4">
                <div className="whatsapp-clip absolute top-4 -left-3 z-[999] inline-block h-0 w-0" />
                <motion.div
                  className="text-background w-fit rounded-lg bg-sky-600 p-3 px-4 shadow-md"
                  layout
                >
                  {showMessage ? (
                    <div className="min-w-[13rem]">
                      <h6 className="pr-12 pb-1.5 text-sm font-bold">
                        {siteConfig.shortName}
                      </h6>
                      <p className="text-sm">
                        Hello there! 🤝
                        <br />
                        <strong>Have Questions?</strong> We&apos;d love to help!
                      </p>
                      <aside className="text-muted pt-1 text-right text-xs">
                        {getCurrentTime()}
                      </aside>
                    </div>
                  ) : (
                    <div className="flex h-4 items-center">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  )}
                </motion.div>
              </div>
              <div className="bg-background/20 w-full rounded-md px-2 backdrop-blur-sm">
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
