import { IconX } from "@tabler/icons-react";

import { Logo } from "@/assets/logo";
import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/site-config";

interface ChatHeaderProps {
  onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="text-background flex flex-row items-center gap-3 space-y-0 bg-sky-600 p-4">
      <div className="relative flex size-12 items-center justify-center rounded-full bg-gray-50">
        <Logo className="p-2" />
        <span className="absolute right-0 bottom-0 flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>
      </div>
      <div>
        <CardTitle className="text-background mt-0 text-sm font-bold">
          {siteConfig.shortName}
        </CardTitle>
        <CardDescription className="text-muted text-xs font-light">
          Typically replies within minutes
        </CardDescription>
      </div>
      <Button
        onClick={onClose}
        className="absolute -top-2 -right-2 size-6 rounded-full"
        size="icon"
        variant="outline"
      >
        <IconX />
      </Button>
    </div>
  );
}
