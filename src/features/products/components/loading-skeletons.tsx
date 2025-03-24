export function SidebarSkeleton() {
  return (
    <aside className="sticky top-16 z-10 hidden h-fit animate-pulse rounded-lg px-4 py-2 backdrop-blur-lg max-sm:bg-white/80 md:top-12 md:py-12 lg:block">
      <div className="h-4 w-1/3 rounded bg-gray-200 text-start"></div>
      <div className="h-6 w-1/4 rounded bg-gray-200 text-2xl md:mb-3"></div>
      <ul className="space-y-3 pb-3">
        <li>
          <div className="bg-primary/10 h-10 w-full justify-start rounded border-sky-300 shadow-none"></div>
        </li>
        <li>
          <div className="bg-primary/10 h-10 w-full justify-start rounded border-sky-300 shadow-none"></div>
        </li>
        <li>
          <div className="bg-primary/10 h-10 w-full justify-start rounded border-sky-300 shadow-none"></div>
        </li>
      </ul>
    </aside>
  );
}

export function CardSkeleton() {
  return (
    <div className="grid animate-pulse gap-6 pt-12 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3 lg:py-12">
      <div className="md:col-span-3">
        <div className="h-8 w-1/2 rounded bg-gray-200"></div>
        <div className="mt-2 h-6 w-full rounded bg-gray-200"></div>
      </div>
      <div className="aspect-square">
        <div className="h-10 rounded bg-gray-200"></div>
        <div className="mt-2 h-4 w-3/4 rounded bg-gray-200"></div>
      </div>
      <div className="aspect-square">
        <div className="h-10 rounded bg-gray-200"></div>
        <div className="mt-2 h-4 w-3/4 rounded bg-gray-200"></div>
      </div>
      <div className="aspect-square">
        <div className="h-10 rounded bg-gray-200"></div>
        <div className="mt-2 h-4 w-3/4 rounded bg-gray-200"></div>
      </div>
    </div>
  );
}
