"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
      <button
        className="rounded bg-sky-600 px-4 py-2 text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
