export default function PersonalInfo() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-3 gap-10 font-bold">
        <Input label="Ad Soyad" />
        <Input label="Unvan (Dr., Doç., Prof. vb.)" />
        <Input label="Kurum / Üniversite" />
        <Input label="Bölüm / Fakülte" />
        <Input label="ORCID veya Vatandaşlık Numaranız" />
        <Input label="Telefon" />
        <Input label="E-posta" className="col-span-1" />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="h-[40px] px-8 rounded-xl bg-gray-200 text-gray-700 font-medium"
        >
          Düzenle
        </button>
        <button
          type="button"
          className="h-[40px] px-8 rounded-xl bg-[#0EA5A8] text-white font-medium"
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
      <div className="h-[46px] rounded-xl border border-gray-200 px-6 flex items-center text-sm text-gray-500">
        {label}
      </div>
    </div>
  );
}
