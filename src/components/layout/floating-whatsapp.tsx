"use client";

import { useCallback, useEffect, useState } from "react";

import { IconX } from "@tabler/icons-react";
import { motion } from "motion/react";

import { Icons } from "@/assets/icons";
import { Logo } from "@/assets/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { siteConfig } from "@/data/site-config";
import { cn, getCurrentTime } from "@/lib/utils";

import { TypeWriter } from "../animations/type-writer-blocks";

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
  const [message, setMessage] = useState("");
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

  const handleInputChange = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const newMessage = event.currentTarget.value;
      setMessage(newMessage);
      // Check for Enter key press
      if (event.key === "Enter") {
        sendMessageToWhatsApp(newMessage);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const sendMessageToWhatsApp = useCallback((messageToSend: string) => {
    const encodedMessage = encodeURIComponent(messageToSend);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.replace(/\s/g, "").replace(/\+/g, "")}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  }, []);

  return (
    <div
      className={cn("fixed right-3 z-[99999999] transition-all", className)}
      style={{
        bottom:
          typeof window !== "undefined" && viewportHeight < window.innerHeight
            ? "30vh"
            : "3vh",
      }}
      role="complementary"
    >
      <Popover open={isPopupVisible} onOpenChange={setIsPopupVisible}>
        <PopoverTrigger
          onClick={handleClick}
          className="cursor-pointer overflow-hidden rounded-full border shadow-lg"
          aria-label="Open WhatsApp Chat"
        >
          <div className="flex size-14 items-center justify-center bg-sky-700">
            <Icons.whatsapp className="size-7" aria-hidden="true" />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-[24rem] overflow-hidden rounded-xl border-sky-600 p-0 shadow-sky-800/10"
          role="dialog"
          aria-label="WhatsApp Chat Window"
        >
          <Card className="gap-0 border-0 pt-0">
            <CardHeader className="text-background flex flex-row items-center gap-3 space-y-0 bg-sky-600 p-4">
              <div
                className="relative flex size-12 items-center justify-center rounded-full bg-gray-50"
                aria-hidden="true"
              >
                <Logo className="p-2" />
                <span
                  className="absolute right-0 bottom-0 flex size-3"
                  aria-label="Online Status Indicator"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
              </div>
              <div>
                <CardTitle
                  className="text-background mt-0 text-sm font-bold"
                  role="heading"
                >
                  {siteConfig.shortName}
                </CardTitle>
                <CardDescription className="text-muted text-xs font-light">
                  Typically replies within minutes
                </CardDescription>
              </div>
              <Button
                onClick={() => setIsPopupVisible(false)}
                className="absolute -top-2 -right-2 size-6 rounded-full"
                size="icon"
                variant="outline"
                aria-label="Close Chat Window"
              >
                <IconX aria-hidden="true" />
              </Button>
            </CardHeader>

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
                        <strong> Have Questions?</strong> We&apos;d love to
                        help!
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
              <BlockInText onExampleClick={sendMessageToWhatsApp} />
            </CardContent>

            <CardFooter>
              <Input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.currentTarget.value)}
                onKeyDown={handleInputChange}
                placeholder="Type your message..."
                className="rounded-full py-2 placeholder:text-sm"
                aria-label="Message Input"
              />
              <Button
                onClick={() => sendMessageToWhatsApp(message)}
                type="submit"
                variant={"ghost"}
                size={"icon"}
                className="px-1.5"
                aria-label="Send Message"
              >
                <Icons.send
                  className="fill-muted-foreground"
                  aria-hidden="true"
                />
              </Button>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}

const BlockInText = ({
  onExampleClick,
}: {
  onExampleClick: (example: string) => void;
}) => {
  return (
    <div className="bg-background/20 w-full rounded-md px-2 backdrop-blur-sm">
      <TypeWriter examples={examples} onExampleClick={onExampleClick} />
    </div>
  );
};
