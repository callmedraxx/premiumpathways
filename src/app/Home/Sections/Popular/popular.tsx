"use client";

const PopularCities = () => {
  const cities = [
    { name: "Beijing", image: "/img/beijing.jpeg", link: "#" },
    { name: "Shanghai", image: "/img/shangai.jpeg", link: "#" },
    { name: "Shenzhen", image: "/img/shenzen.jpg", link: "#" },
    { name: "Chengdu", image: "/img/chengdu.jpeg", link: "#" },
    { name: "Guangzhou", image: "/img/guangzhou.jpg", link: "#" },
    { name: "Hangzhou", image: "/img/hangzhou.jpeg", link: "#" },
    { name: "Xi'an", image: "/img/xian.jpeg", link: "#" },
    { name: "Kunming", image: "/img/kunming.jpeg", link: "#" },
  ];

  return (
    <section className="w-full bg-black p-8 rounded-lg">
      {/* Title and Subtitle */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">
          Study or Work in Popular Cities
        </h2>
        <p className="text-lg text-white">
          Discover China’s Vibrant Cities – Eastjuntai and Beyond!
        </p>
      </div>

      {/* Cities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cities.map((city) => (
          <a
            key={city.name}
            href={city.link}
            className="relative group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            {/* Background Image */}
            <div
              className="h-60 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${city.image})` }}
            ></div>

            {/* City Name */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-lg font-semibold p-3">
              {city.name}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-purple-600 bg-opacity-0 group-hover:bg-opacity-30 transition"></div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PopularCities;
