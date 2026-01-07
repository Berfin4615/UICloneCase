import { applications } from "./applicationsData";

const toneClasses = {
  success: "text-green-500",
  warning: "text-orange-400",
  danger: "text-red-500",
};

export default function Applications() {
  return (
    <div className="relative min-h-[520px]">
      <div className="absolute left-[26px] top-4 bottom-4 w-px bg-gray-200 hidden sm:block" />

      <div className="space-y-16 pl-16">
        {applications.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item }) {
  return (
    <div className="relative">
      <div>
        <div className="absolute left-[-44px]  w-3 h-3 rounded-full bg-gray-500 hidden sm:block" />
        <div className="flex -ml-[20px]  items-baseline gap-2 text-xs">
          <div className="font-semibold text-gray-600">{item.title}</div>
          <div className={`font-semibold ${toneClasses[item.statusTone]}`}>
            – {item.status}
          </div>
        </div>

        <div className="space-y-1 text-xs text-gray-600 mt-5">
          <Row label="Başvuru Sahibi:" value={item.owner} />
          <Row label="Pozisyon:" value={item.position} />
          <Row label="Başvuru Tarihi:" value={item.date} />
          <Row label="Durum:" value={item.state} />
          <Row label="Not:" value={item.note} />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-baseline gap-2 text-xs text-gray-700">
      <span className="font-semibold">{label}</span>
      <span>{value}</span>
    </div>
  );
}
