import { papers } from "./papersData";
import { MousePointer2 } from "lucide-react";

const toneClasses = {
  success: "text-green-600",
  warning: "text-orange-500",
  danger: "text-red-600",
};
export default function Papers() {
  const onView = (paper) => {
    console.log("view:", paper.id);
  };

  const onEdit = () => console.log("edit");
  const onApprove = () => console.log("approve");

  return (
    <div className="relative w-full min-h-[520px]">
      <div className="w-full mt-0 pl-16 mr-0 py-10">
        <div className="mt-0">
          {papers.map((p, idx) => (
            <PaperItem
                key={p.id}
                paper={p}
                onView={() => onView(p)}
                isLast={idx === papers.length - 1}
            />
            ))}

        </div>

        <div className="mt-0 flex w-full justify-end gap-4">
          <button
            type="button"
            onClick={onEdit}
            className="h-[40px] px-10 rounded-xl bg-gray-200 text-gray-400 font-medium"
          >
            Düzenle
          </button>
          <button
            type="button"
            onClick={onApprove}
            className="h-[40px] px-10 rounded-xl bg-[#0EA5A8] text-white font-medium"
          >
            Onayla
          </button>
        </div>
      </div>
    </div>
  );
}
function PaperItem({ paper, onView }) {
  return (
    <div className="relative w-full py-8">
      <div className="absolute left-[-44px] top-[30px] w-3 h-3 rounded-full bg-gray-500" />

        <div className="absolute left-[-39px] top-[42px] bottom-[-30px] w-px bg-gray-300" />
      <div className="min-w-0 text-xs text-gray-700">
        <div className="flex items-baseline gap-2 mb-3">
          <div className="font-semibold">{paper.typeLabel}</div>
          <div className={`${toneClasses[paper.statusTone]} font-semibold`}>
            – {paper.statusLabel}
          </div>
        </div>

        <InfoLine label="Başlık:" value={`“${paper.title}”`} />

        <div className="mt-2">
          <div className="font-semibold">Yazarlar:</div>
          <div className="mt-1 space-y-0.5">
            {paper.authors.map((a, i) => (
              <div key={i}>{a}</div>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <span className="font-semibold">Anahtar Kelimeler:</span>{" "}
          <span>{paper.keywords}</span>
        </div>

        <div className="mt-2">
          <InfoLine label="Gönderim Tarihi:" value={paper.sentDate} />
          <InfoLine label="Onay Tarihi:" value={paper.approvedDate} />
        </div>

        <div className="mt-2">
          <span className="font-semibold">Özet:</span>{" "}
          <span>{paper.abstract}</span>
        </div>
      </div>

        <div className="justify-self-end flex h-full items-end pb-2">
            <button
                type="button"
                onClick={onView}
                className="h-[44px] px-10 rounded-xl bg-gray-600 text-white font-semibold text-sm shadow-sm"
            >
                {paper.actionLabel}
                <span className="absolute -right-2 -mb-0 h-6 w-6 rounded-full bg-white flex items-center justify-center shadow">
                    <MousePointer2 size={14} className="text-gray-800" />
                </span>
            </button>
        </div>


    </div>
  );
}


function InfoLine({ label, value }) {
  return (
    <div className="mt-7">
      <span className="font-semibold">{label}</span>{" "}
      <span className="text-gray-700">{value}</span>
    </div>
  );
}
