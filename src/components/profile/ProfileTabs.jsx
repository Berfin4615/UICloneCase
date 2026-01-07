export default function ProfileTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="relative">
      <div className="flex items-end gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-1 sm:px-0">
        {tabs.map((t) => {
          const active = t.id === activeTab;

          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onChange(t.id)}
              className={[
                "h-10 sm:h-[44px]",
                "px-3.5 sm:px-8",
                "text-[13px] sm:text-sm",

                "rounded-t-xl border border-gray-200 font-medium",
                "transition-colors whitespace-nowrap flex-shrink-0",
                "snap-start",

                active
                  ? "bg-white text-gray-700 border-b-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300",
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="h-px bg-gray-200 -mt-px" />

      <div className="pointer-events-none sm:hidden absolute left-0 top-0 h-[44px] w-6 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none sm:hidden absolute right-0 top-0 h-[44px] w-6 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
