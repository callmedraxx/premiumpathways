"use client";

import Link from "next/link";

const PopularCities = () => {
  const cities = [
    { name: "Beijing", image: "/img/beijing.jpeg", link: "/Universities/Cities" },
    { name: "Shanghai", image: "/img/shangai.jpeg", link: "/Universities/Cities" },
    { name: "Shenzhen", image: "/img/shenzen.jpg", link: "/Universities/Cities" },
    { name: "Chengdu", image: "/img/chengdu.jpeg", link: "/Universities/Cities" },
    { name: "Guangzhou", image: "/img/guangzhou.jpg", link: "/Universities/Cities" },
    { name: "Hangzhou", image: "/img/hangzhou.jpeg", link: "/Universities/Cities" },
    { name: "Xi'an", image: "/img/xian.jpeg", link: "/Universities/Cities" },
    { name: "Kunming", image: "/img/kunming.jpeg", link: "/Universities/Cities" },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Popular cities
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-slate-300">
            Study or work in vibrant hubs across China — culture, industry, and connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.name}
              href={city.link}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${city.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-lg font-semibold text-white">{city.name}</p>
                <p className="text-xs font-medium text-teal-300/90 opacity-0 transition group-hover:opacity-100">
                  View options →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCities;
