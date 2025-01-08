import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";

export default function Bachelor() {
  const cities = [
    { name: "Beijing", image: "/img/beijing.jpeg" },
    { name: "Changsha", image: "/img/changsha.jpeg" },
    { name: "Chengdu", image: "/img/chengdu.jpeg" },
    { name: "Chongqing", image: "/img/chongqing.jpeg" },
    { name: "Guangzhou", image: "/img/guangzhou.jpg" },
    { name: "Guiyang", image: "/img/guiyang.jpeg" },
    { name: "Hangzhou", image: "/img/hangzhou.jpeg" },
    { name: "Kunming", image: "/img/kunming.jpeg" },
    { name: "Nanjing", image: "/img/nanjing.jpeg" },
    { name: "Qingdao", image: "/img/qingdao.jpeg" },
    { name: "Shanghai", image: "/img/shangai.jpeg" },
    { name: "Shantou", image: "/img/shandou.jpg" },
    { name: "Shenzhen", image: "/img/shenzen.jpg" },
    { name: "Tianjin", image: "/img/tianjin.jpeg" },
    { name: "Weihai", image: "/img/weihai.jpeg" },
    { name: "Wuhan", image: "/img/wuhan.jpeg" },
    { name: "Xi'an", image: "/img/xian.jpeg" },
    { name: "Xiamen", image: "/img/xiamen.jpeg" },
    { name: "Zhuhai", image: "/img/zhuhai.jpeg" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-8 mt-20 sm:p-20">
        {/* Section Header */}
        <section
  className="relative text-white text-center py-20"
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  <div className="relative z-10 px-4 sm:px-8">
    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gradient">
      Popular Cities
    </h1>

    {/* Paragraph */}
    <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
      First-tier cities, such as Beijing, Shanghai, Guangzhou, Shenzhen, are
      often the targets of most international students when it comes to selecting
      a city in which to study for four years, not only due to the density of
      intellectual resources and institutions but also because of the booming
      economy with accessible job and internship opportunities. Second-tier cities,
      such as Xiamen, Harbin, Kunming, are also favored for their unique city
      histories and cultural outlooks, plus the comparably low living cost to other
      first-tier cities. As such, you are free to choose one where your preference
      is most aligned with what the city has to offer!
    </p>
  </div>
</section>


        {/* Cities Grid */}
        <section className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="relative group p-6 text-center rounded-lg cursor-pointer transition-all duration-300 transform bg-gray-800 hover:bg-blue-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${city.image})`, // Set background image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "200px", // Consistent height for all tiles
                  width: "100%", // Ensure full width
                }}
              >
                <span className="absolute inset-0 opacity-30 group-hover:opacity-40 rounded-lg bg-black" />
                <span className="relative z-10 text-white text-lg font-semibold">
                  {city.name}
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

