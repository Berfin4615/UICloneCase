import ActionButtons from "./ActionButtons";
import Timer from "./Timer";

export default function HomeActionBar({ timeLeft }) {
    return (
        <section className="bg-white py-8 -mt-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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
