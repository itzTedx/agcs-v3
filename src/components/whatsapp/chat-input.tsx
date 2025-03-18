import { useCallback, useState } from "react";

import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        className="rounded-full py-2 placeholder:text-sm"
      />
      <Button
        onClick={handleSend}
        type="submit"
        variant="ghost"
        size="icon"
        className="px-1.5"
      >
        <Icons.send className="fill-muted-foreground" />
      </Button>
    </div>
  );
}
