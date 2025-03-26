import { FlickeringGrid } from "@/components/animations/flickering-grid";
import { TextAnimate } from "@/components/animations/text-animate";
import { cn } from "@/lib/utils";

interface Props {
  children: string;
  className?: string;
  id?: string;
}

export const Header = ({ children, className, id }: Props) => {
  return (
    <div className="bg-primary relative w-full overflow-hidden py-9">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full [mask-image:radial-gradient(450px_circle_at_center,transparent,white)]"
        squareSize={4}
        gridGap={6}
        color="#0284c7"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <TextAnimate
        animation="slideUp"
        by="character"
        as="h2"
        id={id}
        className={cn(
          "text-primary-foreground text-center text-4xl leading-none font-bold uppercase md:text-[4rem]",
          className
        )}
      >
        {children}
      </TextAnimate>
    </div>
  );
};
