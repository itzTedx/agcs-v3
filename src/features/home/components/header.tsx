import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: Props) => {
  return (
    <h3
      className={cn(
        "py-12 text-center text-4xl font-bold dark:bg-neutral-800",
        className
      )}
    >
      {children}
    </h3>
  );
};
