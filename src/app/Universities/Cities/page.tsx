"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";

export default function Bachelor() {
  const cities = [
    "Beijing",
    "Changsha",
    "Chengdu",
    "Chongqing",
    "Guangzhou",
    "Guiyang",
    "Hangzhou",
    "Kunming",
    "Nanjing",
    "Qingdao",
    "Shanghai",
    "Shantou",
    "Shenzhen",
    "Tianjin",
    "Weihai",
    "Wuhan",
    "Xi'an",
    "Xiamen",
    "Zhuhai",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-8 mt-20 sm:p-20">
        {/* Section Header */}
        <section
          className="text-white text-center py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your image path
          }}
        >
          <h1 className="text-4xl font-bold mb-4">Popular Cities</h1>
          <p className="text-lg max-w-4xl mx-auto">
            First-tier cities, such as Beijing, Shanghai, Guangzhou, Shenzhen,
            are often the targets of most international students when it comes
            to selecting a city in which to study for four years, not only due
            to the density of intellectual resources and institutions but also
            because of the booming economy with accessible job and internship
            opportunities. Second-tier cities, such as Xiamen, Harbin, Kunming,
            are also favored for their unique city histories and cultural
            outlooks, plus the comparably low living cost to other first-tier
            cities. As such, you are free to choose one where your preference
            is most aligned with what the city has to offer!
          </p>
        </section>

        {/* Cities Grid */}
        <section className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="relative group p-6 text-center rounded-lg cursor-pointer transition-all duration-300 transform bg-gray-800 hover:bg-blue-500 hover:scale-105"
              >
                <span className="absolute inset-0 opacity-30 group-hover:opacity-40 rounded-lg bg-black" />
                <span className="relative z-10 text-white text-lg font-semibold">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* WhatsApp Widget */}
      <WhatsAppWidget
        phoneNumber="+18683181079"
        message="Hi, I would like to enquire about your services!"
      />

      {/* Footer */}
      <Footer height="300px" />
    </div>
  );
}
