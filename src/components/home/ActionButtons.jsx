import whiteArrowUp from "../../assets/whiteupicon.png";
import blackArrowUp from "../../assets/blackupicon.png";

export default function ActionButtons() {
  const lift =
    "transform-gpu transition-transform duration-200 ease-out hover:-translate-y-[15px] active:translate-y-0";

  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 w-full lg:w-auto">
      <div className="w-full sm:w-[210px] rounded-xl space-y-3">
        <button
          type="button"
          className={`group w-full min-h-[56px] px-5 sm:px-6 bg-[#A53A35] text-white flex items-center justify-between font-semibold rounded-xl hover:bg-[#E6E6E6] hover:text-[#1F2937] ${lift}`}
        >
          <span className="whitespace-nowrap">Bildiri Yükle</span>

          <span className="relative w-12 h-10 flex-shrink-0">
            <img
              src={whiteArrowUp}
              alt=""
              className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity"
            />
            <img
              src={blackArrowUp}
              alt=""
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </span>
        </button>

        <button
          type="button"
          className={`group w-full min-h-[56px] px-5 sm:px-6 bg-[#E6E6E6] text-[#1F2937] flex items-center justify-between font-semibold rounded-xl hover:bg-slate-900 hover:text-white ${lift}`}
        >
          <span className="whitespace-nowrap">Kongre Kayıt</span>

          <span className="relative w-12 h-10 flex-shrink-0">
            <img
              src={whiteArrowUp}
              alt=""
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <img
              src={blackArrowUp}
              alt=""
              className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity"
            />
          </span>
        </button>
      </div>

      <button
        type="button"
        className={`w-full sm:w-[300px] min-h-[112px] rounded-xl bg-[#0EA5A8] text-white flex flex-col items-center justify-center px-6 sm:px-8 hover:bg-slate-900 ${lift}`}
      >
        <div className="text-2xl sm:text-3xl font-semibold leading-none">
          Online Katılım
        </div>

        <div className="mt-1 w-full flex justify-center">
          <img src={whiteArrowUp} alt="" className="w-16 sm:w-20 h-auto" />
        </div>
      </button>
    </div>
  );
}
