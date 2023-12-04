import clsx from "clsx";

import { useTab } from "../hook";

export const TabNavigation = ({ tabs }: { tabs: { pageId: number; label: string }[] }) => {
  const { setCurrentPage, currentPage } = useTab();

  return (
    <div className="flex w-full border-b border-gray-light bg-white px-6">
      {tabs.map(({ pageId, label }) => (
        <button
          className={clsx(
            "-mb-px border-b px-2 py-4 font-medium",
            currentPage === pageId
              ? "border-black text-black"
              : "border-[transparent] text-gray-dark",
          )}
          onClick={() => setCurrentPage(pageId)}
          key={pageId}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
