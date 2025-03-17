import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Link
        className="scroll-down z-50 hidden hover:cursor-pointer md:block"
        href={"#about"}
      ></Link>
      <div className="pointer-events-none relative h-svh w-full touch-none object-cover">
        <video
          muted
          slot="media"
          src="/video/agcs-Showreel.webm"
          playsInline
          loop
          autoPlay
          className=""
          crossOrigin="anonymous"
        />
      </div>
    </section>
  );
}
