const isDevelopment = process.env.NODE_ENV === "development";

const BreakpointIndicator = () => {
  if (!isDevelopment) {
    return null; // Hide the indicator in production
  }

  return (
    <div className="bg-foreground/50 text-primary-foreground fixed right-2 bottom-2 z-[999999] flex size-6 items-center justify-center rounded-full font-mono text-xs font-bold backdrop-blur-md">
      <div className="sm:hidden">XS</div>
      <div className="hidden sm:block md:hidden">SM</div>
      <div className="hidden md:block lg:hidden">MD</div>
      <div className="hidden lg:block xl:hidden">LG</div>
      <div className="hidden xl:block">XL</div>
    </div>
  );
};

export default BreakpointIndicator;
