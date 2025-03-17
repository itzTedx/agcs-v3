import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: Props) => {
  return (
    <div className="dark:bg-neutral w-full overflow-hidden bg-sky-500 py-9">
      <h3
        className={cn(
          "text-center text-4xl leading-none font-bold text-white uppercase md:text-[4rem]",
          className
        )}
      >
        {children}
      </h3>
    </div>
  );
};
