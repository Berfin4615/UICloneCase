import ActionButtons from "./ActionButtons";
import Timer from "./Timer";

export default function HomeActionBar({ timeLeft }) {
  return (
    <section className="bg-white py-6 sm:py-8 -mt-16 sm:-mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <ActionButtons
            onUpload={() => {}}
            onRegister={() => {}}
            onOnlineJoin={() => {}}
          />
          <Timer
            months={timeLeft.months}
            days={timeLeft.days}
            hours={timeLeft.hours}
          />
        </div>
      </div>
    </section>
  );
}
