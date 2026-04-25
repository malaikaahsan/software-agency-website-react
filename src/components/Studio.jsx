export default function Studio() {
  const images = [
    "/studio1.jpg",
    "/studio3.jpg",
    "/studio4.jpg",
    "/studio5.jpg",
    "/studio2.jpg",
    "/studio6.jpg",
  ];

  return (
    <section id="studio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent uppercase tracking-wider">Studio & Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transform transition duration-300"
            >
              <img src={img} alt={`Studio ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
