export default function Sponsors() {
    const sponsors = Array(6).fill({ name: 'LOGO' });
    return (
        <section className="py-8 px-8 bg-gray-100 mb-0">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-xl font-medium text-gray-700 text-center mb-2 mt-2">Destekleyenler</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
                    {sponsors.map((sponsor, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl p-6 flex items-center justify-center border-2 border-gray-500"
                    >
                        <div className="text-lg font-normal">LOGO</div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
