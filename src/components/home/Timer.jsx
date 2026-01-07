export default function Timer({ months, days, hours }) {
  return (
    <div className="w-[460px]">
      <div className="text-center text-sm text-gray-500 mb-2">Kalan Süre</div>

      <div className="rounded-xl bg-[#EDEDED] px-10 py-5">
        <div className="flex items-end justify-between gap-10">
          <TimeItem value={months} label="Ay" />
          <TimeItem value={days} label="Gün" />
          <TimeItem value={hours} label="Saat" />
        </div>
      </div>
    </div>
  );
}

function TimeItem({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-[56px] leading-none font-semibold text-[#6B6B6B]">
        {value}
      </div>
      <div className="mt-1 text-sm text-[#6B6B6B]">{label}</div>
    </div>
  );
}
