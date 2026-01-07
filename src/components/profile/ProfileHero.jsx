export default function ProfileHero() {
  return (
    <div className="font-sans grid grid-cols-3 gap-6 items-center text-gray-600 min-h-[140px]">
      <div className="text-center text-lg text-gray-500">
        Prof. Dr. <span className="font-medium">Ayşe Yılmaz</span>
      </div>

      <div className="text-center text-2xl font-semibold text-gray-500">
        Merhaba Ayşe!
      </div>

      <div className="text-center text-base text-gray-500">
        Görüntülemek istediğin alanı seç.
      </div>
    </div>
  );
}
