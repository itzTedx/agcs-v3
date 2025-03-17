import { IconLoader } from "@tabler/icons-react";

interface SectionLoaderProps {
  height?: string;
}

export function SectionLoader({ height = "400px" }: SectionLoaderProps) {
  return (
    <div
      className="flex animate-pulse items-center justify-center bg-gray-100"
      style={{ minHeight: height }}
    >
      <IconLoader className="h-8 w-8 animate-spin text-gray-400" />
    </div>
  );
}
