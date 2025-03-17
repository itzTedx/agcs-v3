import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: Props) => {
  return <h3 className={cn(className)}>{children}</h3>;
};
