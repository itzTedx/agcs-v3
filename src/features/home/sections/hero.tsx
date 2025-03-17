import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Hero Section with Company Showcase Video"
    >
      <h1 className="sr-only">Welcome to AGCS - Creative Solutions</h1>
      <Link
        className="scroll-down bottom-3 z-50 hidden hover:cursor-pointer md:block"
        href={"#about"}
        aria-label="Scroll to About section"
      ></Link>
      <div className="pointer-events-none relative w-full touch-none object-cover lg:h-svh">
        <video
          muted
          slot="media"
          src="/video/agcs-Showreel.webm"
          playsInline
          loop
          autoPlay
          poster="/images/video-poster.webp"
          className="h-full w-full object-cover"
          crossOrigin="anonymous"
          aria-label="AGCS Company Showreel"
        ></video>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "AGCS Company Showreel",
          description:
            "Showcase video highlighting AGCS creative solutions and services",
          thumbnailUrl: "/images/video-poster.jpg",
          uploadDate: "2024-01-01T08:00:00+08:00",
        })}
      </script>
    </section>
  );
}
