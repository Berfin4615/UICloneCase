export default function ProfileTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="relative">
      <div className="flex items-end gap-6">
        {tabs.map((t) => {
          const active = t.id === activeTab;

          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onChange(t.id)}
              className={[
                "h-[44px] px-10 rounded-t-xl border border-gray-200 text-sm font-medium",
                "transition-colors",
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
    </div>
  );
}
