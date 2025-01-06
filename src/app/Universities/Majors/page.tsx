"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
//import { useState } from "react";

export default function Bachelor() {
  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-8 mt-20 sm:p-20">

      <section
          className="text-white text-center py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your image path
          }}
        >
          <h1 className="text-4xl font-bold mb-4">Majors Of Chinese Universities</h1>
          <p className="text-lg max-w-4xl mx-auto">
          Chinese universities offer a variety of different disciplines — including Education, Law, Engineering, Philosophy, Economics, Literature, etc. — with 11 categories, 71 secondary categories, and 250+ majors that guarantee to include your ideal major. Even if you are still unsure of what to study, you could freely explore this pool of options in your first year and transfer to another major or college as your wish. With the benefit of having such a wide-ranging selection, you could freely attend courses in different majors and make friends with those with unique perspectives and interests of mind.
          </p>
        </section>

        <section
          className="text-white text-center py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your image path
          }}
        >
          <h1 className="text-4xl font-bold mb-4">Study MBBS in China</h1>
          <p className="text-lg max-w-4xl mx-auto">
          Studying MBBS in China has been recognized as a cost-effective way of obtaining a decent education in Medicine. Due to the government subsidizing many of the MBBS programs and affordable living costs, you could attend them at a relatively reasonable price in comparison to medical education in other countries. Besides the costs, the quality of MBBS education in China is also guaranteed as is recognized by World Health Organization (WHO), Ministry of Education of China (MoE), Medical Council of India (MCI), according to which as many as 45 institutions are recognized and approved for hosting English-taught programs, including Shihezi University, Qingdao University, Dalian Medical University, Capital Medical University, Tianjin Medical University, China Medical University, Shandong University, Fudan University, Xinjiang Medical University, Nanjing Medical University, Jiangsu UniversityWuhan University, Zhejiang University, Wenzhou Medical University, HUST, Xi’an Jiaotong UniversityJinan University, Southern Medical University, etc. Also, since the Chinese medical education is based on that of the US, students could go on and get through USMLE without much adaptation, let alone that you could rest assured in its friendly and accommodating culture without concerns for safety issues.  As such, it is a great option for you to obtain your ideal MBBS!
          </p>
        </section>

        <section
          className="text-white text-center py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your image path
          }}
        >
          <h1 className="text-4xl font-bold mb-4">Study Medicine in China</h1>
          <p className="text-lg max-w-4xl mx-auto">
          Medical education in China has recently attracted attention and interest from students in countries around Southeast Asia, such as India, Philippines, Malaysia, etc, for its competitive advantage compared with medical education in such countries as the US and Europe. Firstly, the Chinese medical education system offers a fast-track option of enrolling in a Bachelor of Medicine, Bachelor of Surgery (MBBS) program, which lasts about 5 years for you to become a certified physician and saves you 3-4 years in school in comparison to other Medicine tracks. The second unique advantage is that you get to learn traditional Chinese medicine and its therapeutic techniques, such as acupuncture, tuina, moxibustion, etc., along with Western medicine, the combination of which provides improved diagnostic efficacy and a broadened view of medicine. Thirdly, due to China’s aging and immense population, medical experts and professionals are and would be increasingly needed and there would be a promising domestic market for those willing to be dedicated to this industry. Among other benefits of studying in China are low living costs and tuition, great culture and personal safety, and the chance of learning Chinese.
          </p>
        </section>


        <section
          className="text-white text-center py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your image path
          }}
        >
          <h1 className="text-4xl font-bold mb-4">Study Engineering in China</h1>
          <p className="text-lg max-w-4xl mx-auto">
          if your ideal occupation is in engineering, studying engineering in China could be one of the best options at your disposal. As many multinational manufacturing companies, such as Tesla, have been establishing branch offices and local presence in China, an engineering degree could not only get you connections with local companies but also open up opportunities of employment at private multi-national companies where your international perspective would be most valuable. Secondly, due to “The Silk Road Economic Belt” and related policies, China has been exporting large-scale manufacturing projects and infrastructure formation around the globe such as in Africa and Southeast Asia. As an engineer locally educated, you could gain participation in these projects at the early stages of your career, the experience of which could help you build a solid foundation and springboard for the kickstart of your career. Besides the job and career perspective, China is well-known for its engineering education resources, producing over 600,000 engineers per year, 10 times the size of the US. With the spread of China’s international influence and status as “the world factory”, an engineering education deserves your serious consideration!</p>
        </section>


        <section
          className="text-white text-center py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your image path
          }}
        >
          <h1 className="text-4xl font-bold mb-4">Study Bachelor, Master & PhD in China</h1>
          <p className="text-lg max-w-4xl mx-auto">
          if you are looking into gaining higher education, ranging from Bachelor’s to PhD degrees, China might be your first option. Firstly, to cater for the need of higher education, many Chinese universities offer shortcutted tracks, such as Bachelor-Master track or Master-Ph.D. track, where you get to omit one or two years more in school while being free from the anxiety and hassles of having to find and apply for new universities. Secondly, the costs of obtaining higher education in China are lower than in most of the developed countries in the West, due to the cultural and political emphasis placed on the Education department by the Chinese government and therefore sufficient government fundings that encourage the domestic and international students alike. Thirdly, years of study in China offer you an immersive language environment for learning Chinese, by far the most spoken language with 1.3 billion native speakers </p>
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