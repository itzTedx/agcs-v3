export default function Home() {
  return (
    <main>
      <div className="pointer-events-none relative h-full w-screen touch-none object-cover">
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
    </main>
  );
}
