import whiteArrowUp from "../../assets/whiteupicon.png";
import blackArrowUp from "../../assets/blackupicon.png";

export default function ActionButtons() {
  const lift =
    "transform-gpu transition-transform duration-200 ease-out hover:-translate-y-[15px] active:translate-y-0";

  return (
    <div className="flex items-stretch gap-6">
      <div className="w-[210px] rounded-xl space-y-2">
        <button
            type="button"
            className={`group w-full h-[56px] px-6 bg-[#A53A35] text-white flex items-center justify-between font-semibold rounded-xl hover:bg-[#E6E6E6] hover:text-[#1F2937] ${lift}`}
            >
            <span className="whitespace-nowrap">Bildiri Yükle</span>

            <span className="relative w-15 h-10 flex-shrink-0">
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
          className={`group w-full h-[56px] px-6 bg-[#E6E6E6] text-[#1F2937] flex items-center justify-between font-semibold rounded-xl hover:bg-slate-900 hover:text-white ${lift}`}
        >
            Kongre Kayıt
            <span className="relative w-15 h-10 flex-shrink-0">
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
        className={`w-[300px] h-[112px] rounded-xl bg-[#0EA5A8] text-white flex flex-col items-center justify-center px-8 hover:bg-slate-900 ${lift}`}
      >
        <div className="text-3xl font-semibold leading-none">Online Katılım</div>
        <div className="mt-0 w-full flex justify-center">
          <img src={whiteArrowUp} alt="" className="w-22 h-15" />
        </div>
      </button>
    </div>
  );
}
