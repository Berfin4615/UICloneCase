export default function PersonalInfo() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 font-bold">
        <Input label="Ad Soyad" />
        <Input label="Unvan (Dr., Doç., Prof. vb.)" />
        <Input label="Kurum / Üniversite" />
        <Input label="Bölüm / Fakülte" />
        <Input label="ORCID veya Vatandaşlık Numaranız" />
        <Input label="Telefon" />

        <Input label="E-posta" className="sm:col-span-2 lg:col-span-1" />
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-4">
        <button
          type="button"
          className="h-[42px] sm:h-[40px] w-full sm:w-auto px-6 sm:px-8 rounded-xl bg-gray-200 text-gray-700 font-medium"
        >
          Düzenle
        </button>
        <button
          type="button"
          className="h-[42px] sm:h-[40px] w-full sm:w-auto px-6 sm:px-8 rounded-xl bg-[#0EA5A8] text-white font-medium"
        >
          Onayla
        </button>
      </div>
    </div>
  );
}

function Input({ label, className = "" }) {
  return (
    <div className={className}>
      <div className="min-h-[46px] sm:min-h-[48px] rounded-xl border border-gray-200 px-4 sm:px-6 py-3 flex items-center text-[13px] sm:text-sm text-gray-500 leading-snug">
        {label}
      </div>
    </div>
  );
}
