export default function Timer({ months, days, hours }) {
  return (
    <div className="w-full lg:w-[460px]">
      <div className="text-center text-sm text-gray-500 mb-2">Kalan Süre</div>

      <div className="rounded-xl bg-[#EDEDED] px-5 sm:px-8 lg:px-10 py-4 sm:py-5">
        <div className="flex items-end justify-between gap-4 sm:gap-8">
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
    <div className="text-center min-w-[72px]">
      <div className="text-[40px] sm:text-[52px] lg:text-[56px] leading-none font-semibold text-[#6B6B6B]">
        {value}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-[#6B6B6B]">{label}</div>
    </div>
  );
}
