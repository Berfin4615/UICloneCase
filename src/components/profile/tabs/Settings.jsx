export default function Settings() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-3 gap-10">
        <Input label="Şifre Değiştir" />
        <Input label="Yeni Şifre" />
        <Input label="Şifre Tekrarı" />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="h-[40px] px-10 rounded-xl bg-[#0EA5A8] text-white font-medium"
        >
          Onayla
        </button>
      </div>
    </div>
  );
}

function Input({ label }) {
  return (
    <div className="h-[46px] rounded-xl border border-gray-200 px-6 flex items-center text-sm text-gray-500">
      {label}
    </div>
  );
}
