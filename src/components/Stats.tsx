export default function Stats({ isVisible = false }: { isVisible?: boolean }) {
  const stats = [
    { number: '836', label: 'Happy Couples' },
    { number: '98', label: 'Venues' },
    { number: '70', label: 'Vendors' },
    { number: '158', label: 'Reviews' }
  ];

  if (!isVisible) return null;

  return (
    <section className="py-24 bg-gray-900">
      <div className="container">
        <div className="flex flex-wrap justify-around gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 