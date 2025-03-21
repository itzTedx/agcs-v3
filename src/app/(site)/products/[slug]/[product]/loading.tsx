export default function Loading() {
  return (
    <div className="container animate-pulse">
      <div className="h-8 w-full rounded bg-gray-200" />
      <div className="mt-8 grid gap-6 md:grid-cols-5">
        <div className="h-96 rounded bg-gray-200" />
        <div className="space-y-4 md:col-span-2 md:px-6">
          <div className="h-8 w-3/4 rounded bg-gray-200" />
          <div className="h-24 w-full rounded bg-gray-200" />
          <div className="h-48 w-full rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
