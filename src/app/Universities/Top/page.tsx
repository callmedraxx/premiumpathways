"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import { useState } from "react";
//import { useState } from "react";

export default function Bachelor() {
  const universities = [
    { rank: 17, chinese: "清华大学", english: "Tsinghua University", location: "Beijing" },
    { rank: 18, chinese: "北京大学", english: "Peking University", location: "Beijing" },
    { rank: 22, chinese: "香港大学", english: "The University of Hong Kong", location: "Hong Kong" },
    { rank: 31, chinese: "复旦大学", english: "Fudan University", location: "Shanghai" },
    { rank: 34, chinese: "香港科技大学", english: "The Hong Kong University of Science and Technology", location: "Hong Kong" },
    { rank: 39, chinese: "香港中文大学", english: "The Chinese University of Hong Kong", location: "Hong Kong" },
    { rank: 45, chinese: "浙江大学", english: "Zhejiang University", location: "Zhejiang" },
    { rank: 51, chinese: "上海交通大学", english: "Shanghai Jiao Tong University", location: "Shanghai" },
    { rank: 55, chinese: "香港城市大学", english: "City University of Hong Kong", location: "Hong Kong" },
    { rank: 66, chinese: "香港理工大学", english: "The Hong Kong Polytechnic University", location: "Hong Kong" },
    { rank: 68, chinese: "国立台湾大学", english: "National Taiwan University", location: "Taiwan" },
    { rank: 99, chinese: "中国科学技术大学", english: "University of Science and Technology of China", location: "Anhui" },
    { rank: 132, chinese: "南京大学", english: "Nanjing University", location: "Nanjing" },
    { rank: 212, chinese: "同济大学", english: "Tongji University", location: "Shanghai" },
    { rank: 226, chinese: "武汉大学", english: "Wuhan University", location: "Wuhan" },
    { rank: 237, chinese: "哈尔滨工业大学", english: "Harbin Institute of Technology", location: "Harbin" },
    { rank: 253, chinese: "国立成功大学", english: "National Cheng Kung University", location: "Taiwan" },
    { rank: 262, chinese: "中山大学", english: "Sun Yat-sen University", location: "Guangdong" },
    { rank: 269, chinese: "国立阳明交通大学", english: "National Yang Ming Chiao Tung University", location: "Taiwan" },
    { rank: 272, chinese: "北京师范大学", english: "Beijing Normal University", location: "Beijing" },
    { rank: 277, chinese: "南方科技大学", english: "Southern University of Science and Technology", location: "Guangdong" },
    { rank: 289, chinese: "香港浸会大学", english: "Hong Kong Baptist University", location: "Hong Kong" },
    { rank: 295, chinese: "西安交通大学", english: "Xi’an Jiaotong University", location: "Xi’an" },
    { rank: 325, chinese: "国立台湾科技大学", english: "National Taiwan University of Science and Technology", location: "Taiwan" },
    { rank: 326, chinese: "澳门大学", english: "Universidade de Macau / University of Macau", location: "Macau" },
    { rank: 335, chinese: "华中科技大学", english: "Huazhong University of Science and Technology", location: "Hubei" },
    { rank: 336, chinese: "国立台湾师范大学", english: "National Taiwan Normal University", location: "Taiwan" },
    { rank: 339, chinese: "天津大学", english: "Tianjin University", location: "Tianjin" },
    { rank: 359, chinese: "南开大学", english: "Nankai University", location: "Tianjin" },
    { rank: 374, chinese: "北京理工大学", english: "Beijing Institute of Technology", location: "Beijing" },
    { rank: 385, chinese: "北京航空航天大学", english: "Beijing University of Aeronautics and Astronautics", location: "Beijing" },
  ];


  const universitieslist = [
    {
      name: 'Beijing Normal University',
      image:'/img/bnu.jpg',
      city: 'Beijing',
      totalStudents: 37771,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'Tsinghua University',
      image:'/img/bnu.jpg',
      city: 'Beijing',
      totalStudents: 74572,
      internationalStudents: 3856,
      livingCost: 1600,
    },
    {
      name: 'Peking University',
      image:'/img/bnu.jpg',
      city: 'Beijing',
      totalStudents: 45974,
      internationalStudents: 2783,
      livingCost: 1600,
    },
    {
      name: 'Fudan University',
      image:'/img/bnu.jpg',
      city: 'Shanghai',
      totalStudents: 51993,
      internationalStudents: 2535,
      livingCost: 1650,
    },
    {
      name: 'Zhejiang University',
      image:'/img/bnu.jpg',
      city: 'Hangzhou',
      totalStudents: 65821,
      internationalStudents: 5123,
      livingCost: 1600,
    },
    {
      name: 'Shanghai Jiaotong University',
      image:'/img/bnu.jpg',
      city: 'Shanghai',
      totalStudents: 44550,
      internationalStudents: 2096,
      livingCost: 1650,
    },
    {
      name: 'Nanjing University',
      image:'/img/bnu.jpg',
      city: 'Nanjing',
      totalStudents: 41247,
      internationalStudents: 1396,
      livingCost: 1500,
    },
    {
      name: 'Wuhan University',
      image:'/img/bnu.jpg',
      city: 'Wuhan',
      totalStudents: '/',
      internationalStudents: 2800,
      livingCost: 1200,
    },
    {
      name: 'Harbin Institute of Technology',
      image:'/img/bnu.jpg',
      city: 'Harbin',
      totalStudents: 55901,
      internationalStudents: 3904,
      livingCost: 1200,
    },
    {
      name: 'Tongji University',
      image:'/img/bnu.jpg',
      city: 'Shanghai',
      totalStudents: 37492,
      internationalStudents: 3160,
      livingCost: 1650,
    },
    {
      name: 'Huazhong University of Science and Technology',
      image:'/img/bnu.jpg',
      city: 'Wuhan',
      totalStudents: '/',
      internationalStudents: '/',
      livingCost: 1200,
    },
    {
      name: 'Nankai University',
      image:'/img/bnu.jpg',
      city: 'Tianjin',
      totalStudents: 33195,
      internationalStudents: 3729,
      livingCost: 1300,
    },
    {
      name: 'Tianjin University',
      image:'/img/bnu.jpg',
      city: 'Tianjin',
      totalStudents: 35370,
      internationalStudents: '/',
      livingCost: 1300,
    },
    {
      name: 'Beijing Institute of Technology',
      image:'/img/bnu.jpg',
      city: 'Beijing',
      totalStudents: 30733,
      internationalStudents: 2800,
      livingCost: 1600,
    },
    {
      name: 'Xiamen University',
      image:'/img/bnu.jpg',
      city: 'Xiamen',
      totalStudents: 40000,
      internationalStudents: '/',
      livingCost: 1400,
    },
    {
      name: 'Shanghai University',
      image:'/img/bnu.jpg',
      city: 'Shanghai',
      totalStudents: 57057,
      internationalStudents: 2837,
      livingCost: 1650,
    },
    {
      name: 'University Of Science & Technology Beijing',
      image:'/img/bnu.jpg',
      city: 'Beijing',
      totalStudents: 25000,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'Beihang University',
      image:'/img/bnu.jpg',
      city: 'Beijing',
      totalStudents: 39759,
      internationalStudents: 1137,
      livingCost: 1600,
    },
    {
      name: 'Shandong University',
      image:'/img/bnu.jpg',
      city: 'Jinan, Qingdao, Weihai',
      totalStudents: 61023,
      internationalStudents: '/',
      livingCost: 1100,
    },
    {
      name: 'South China University of Technology',
      image:'/img/bnu.jpg',
      city: 'Guangzhou',
      totalStudents: '/',
      internationalStudents: '/',
      livingCost: 1500,
    },
    {
      name: 'Southeast University',
      image:'/img/bnu.jpg',
      city: 'Nanjing',
      totalStudents: 30664,
      internationalStudents: '/',
      livingCost: 1500,
    },
    {
      name: 'Jilin University',
      image:'/img/bnu.jpg',
      city: 'Changchun',
      totalStudents: 72505,
      internationalStudents: '/',
      livingCost: 1100,
    },
    {
      name: 'Renmin University of China',
      image:'/img/bnu.jpg',
      city: 'Beijing',
      totalStudents: 26757,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'East China University Of Science and Technology',
      image:'/img/bnu.jpg',
      city: 'Shanghai',
      totalStudents: 26000,
      internationalStudents: '/',
      livingCost: 1650,
    },
    {
      name: 'Dalian University of Technology',
      image:'/img/bnu.jpg',
      city: 'Dalian',
      totalStudents: 41241,
      internationalStudents: '/',
      livingCost: 1200,
    },
    {
      name: 'East China Normal University',
      image:'/img/bnu.jpg',
      city: 'Shanghai',
      totalStudents: 34746,
      internationalStudents: '/',
      livingCost: 1650,
    },
    {
      name: 'China Agricultural University',
      image:'/img/bnu.jpg',
      city: 'Beijing',
      totalStudents: 20019,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'Beijing Jiaotong University',
      image:'/img/bnu.jpg',
      city: 'Beijing',
      totalStudents: 25569,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'Sichuan University',
      image:'/img/bnu.jpg',
      city: 'Chengdu',
      totalStudents: 63000,
      internationalStudents: '/',
      livingCost: 1100,
    },
    {
      name: 'Beijing University Of Chemical Technology',
      image:'/img/bnu.jpg',
      city: 'Beijing',
      totalStudents: 26300,
      internationalStudents: 350,
      livingCost: 1600,
    },
    {
      name: 'Chongqing University',
      image:'/img/bnu.jpg',
      city: 'Chongqing',
      totalStudents: 47000,
      internationalStudents: '/',
      livingCost: 1200,
    },
    {
      name: 'Hunan University',
      image:'/img/bnu.jpg',
      city: 'Changsha',
      totalStudents: 36000,
      internationalStudents: '/',
      livingCost: 1100,
    },
    {
      name: 'Central South University',
      image:'/img/bnu.jpg',
      city: 'Changsha',
      totalStudents: 55000,
      internationalStudents: '/',
      livingCost: 1100,
    },
    {
      name: 'Lanzhou University',
      image:'/img/bnu.jpg',
      city: 'Lanzhou',
      totalStudents: 32720,
      internationalStudents: '/',
      livingCost: 1000,
    },
    {
      name: 'Beijing Foreign Studies University',
      image:'/img/bnu.jpg',
      city: 'Beijing',
      totalStudents: 8579,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'Shanghai International Studies University',
      image:'/img/bnu.jpg',
      city: 'Shanghai',
      totalStudents: 13564,
      internationalStudents: '/',
      livingCost: 1650,
    },
    {
      name: 'Wuhan University of Technology',
      image:'/img/bnu.jpg',
      city: 'Wuhan',
      totalStudents: 54000,
      internationalStudents: '/',
      livingCost: 1200,
    },
  ];


  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Get the universities for the current page
  const currentUniversities = universitieslist.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pagination logic
  const totalPages = Math.ceil(universitieslist.length / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="">

      <section
          className="w-full h-[400px] pt-28 sm:pt-16 bg-cover bg-center relative text-white"
          style={{
            backgroundImage: "url('/img/study.jpeg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
            {/* Title and Subtitle */}
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Top Universities</h1>
            </div>
          </div>
        </section>
        <section className="university-section mt-8 mb-8 text-black bg-gray-100 p-8">
  <h2 className="text-3xl font-bold text-center mb-6">Universities</h2>
  <div className="relative">
    {/* University Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {currentUniversities.map((university, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 overflow-hidden"
        >
          {/* University Card */}
          <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
            <img
              src={university.image}
              alt={university.name}
              className="object-cover w-full h-full"
            />
          </div>
          <ul className="space-y-2 text-sm">
            <li className="font-semibold truncate">Name: {university.name}</li>
            <li className="truncate">City: {university.city}</li>
            <li className="truncate">
              Total Students: {university.totalStudents}
            </li>
            <li className="truncate">
              International Students: {university.internationalStudents}
            </li>
            <li className="truncate">
              Monthly Living Cost: ${university.livingCost}
            </li>
          </ul>
        </div>
      ))}
    </div>

    {/* Pagination Controls */}
    <div className="flex justify-center mt-6 space-x-4">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition disabled:opacity-50"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded-md shadow-md ${
            currentPage === page
              ? 'bg-purple-500 text-white'
              : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</section>



      
      
<table className="min-w-full table-auto border-collapse bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg rounded-lg overflow-hidden">
  <thead>
    <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-left text-sm uppercase font-semibold tracking-wider">
      <th className="px-6 py-3 border-b border-gray-300">Rank</th>
      <th className="px-6 py-3 border-b border-gray-300">University (Chinese)</th>
      <th className="px-6 py-3 border-b border-gray-300">University (English)</th>
      <th className="px-6 py-3 border-b border-gray-300">Location</th>
    </tr>
  </thead>
  <tbody className="text-gray-800 text-sm">
    {universities.map((university, index) => (
      <tr
        key={university.rank}
        className={`${
          index % 2 === 0 ? "bg-white" : "bg-gray-100"
        } transition-all duration-300 hover:scale-105 hover:shadow-lg`}
      >
        <td className="px-6 py-3 border-b border-gray-300 text-center font-medium">
          {university.rank}
        </td>
        <td className="px-6 py-3 border-b border-gray-300 text-center">
          {university.chinese}
        </td>
        <td className="px-6 py-3 border-b border-gray-300 text-center">
          {university.english}
        </td>
        <td className="px-6 py-3 border-b border-gray-300 text-center">
          {university.location}
        </td>
      </tr>
    ))}
  </tbody>
</table>



        {/* Additional Content Below the Table */}
        <section className="mt-10 p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-lg">
  <h2 className="text-2xl font-bold text-blue-800 border-b-4 border-blue-500 pb-2">
    Academic Performance of Chinese Universities
  </h2>
  <p className="mt-6 text-gray-700 text-lg leading-relaxed">
    Academic performance in key subjects at Chinese universities continues to be strong, according to newly released rankings. 
    <span className="text-blue-600 font-semibold">88 Chinese universities</span> are included in the Global 400 subjects in the latest 
    <span className="italic"> QS World University Rankings by Subject</span>, released Tuesday by QS Quacquarelli Symonds, a higher education research firm.
  </p>
  <p className="mt-6 text-gray-700 text-lg leading-relaxed">
    This makes China the country with the second most number of universities included in the Global 400 Subjects, according to the QS rankings. 
    This is only after the <span className="text-red-500 font-semibold">United States</span>, which has 164 universities included in the Global 400 subjects. 
    The <span className="text-green-600 font-semibold">UK</span> comes third with 78 universities.
  </p>
  <p className="mt-6 text-gray-700 text-lg leading-relaxed">
    China’s best performances by subject this year come from <span className="text-blue-600 font-semibold">Tsinghua University</span>, with three top-10 places, 
    and <span className="text-blue-600 font-semibold">Peking University</span>, with two top-10 places. Tsinghua University finishes eighth in both 
    <span className="font-medium">Architecture/Built Environment</span> and in <span className="font-medium">Engineering (Civil and Structural)</span>. 
    Peking University also achieves an equally lofty finish, coming eighth in <span className="font-medium">Modern Languages</span> and joint 10th for <span className="font-medium">Linguistics</span>. 
    Tsinghua comes in 10th place in the world’s <span className="font-medium">Materials Science</span> subject rankings.
  </p>

  <h3 className="mt-10 text-xl font-bold text-blue-700 border-b-2 border-gray-300 pb-1">
    Chinese University Rankings
  </h3>
  <p className="mt-6 text-gray-700 text-lg leading-relaxed">
    There is no official Chinese University ranking. However, there are several Chinese organizations and international publications that release university rankings.
  </p>

  <div className="mt-8">
    <h4 className="text-lg font-bold text-blue-600 border-l-4 border-blue-400 pl-3 mb-4">
      Project 211
    </h4>
    <ul className="list-disc pl-8 text-gray-700 text-lg leading-relaxed space-y-2">
      <li>Tsinghua University</li>
      <li>Peking University</li>
      <li>Renmin University of China</li>
      <li>Beihang University</li>
      <li>Central University of Finance and Economics</li>
      <li>Beijing Normal University</li>
      <li>University of International Business and Economics</li>
      <li>Beijing Institute of Technology</li>
      <li>Beijing Foreign Studies University</li>
      <li>China University of Political Science and Law</li>
    </ul>
  </div>

  <div className="mt-8">
    <h4 className="text-lg font-bold text-blue-600 border-l-4 border-blue-400 pl-3 mb-4">
      Project 985
    </h4>
    <ul className="list-disc pl-8 text-gray-700 text-lg leading-relaxed space-y-2">
      <li>Shanghai Jiao Tong University</li>
      <li>Nanjing University</li>
      <li>Wuhan University</li>
      <li>Huazhong University of Science and Technology</li>
      <li>Tianjin University</li>
      <li>University of Science and Technology of China</li>
      <li>Nankai University</li>
      <li>Beijing Normal University</li>
      <li>Xi’an Jiaotong University</li>
      <li>Harbin Institute of Technology</li>
    </ul>
  </div>
</section>

<section className="py-8 bg-gradient-to-r from-blue-100 to-teal-200 rounded-lg shadow-lg">
  <h4 className="text-3xl font-bold text-center text-teal-700 mb-6">
    Universities Accepting CSC Scholarships
  </h4>
  
  <div className="max-w-4xl mx-auto">
    <ul className="list-decimal pl-8 space-y-2 text-lg font-medium text-gray-800">
      <li><span className="text-teal-600">10006 –</span> Beihang University (BUAA)</li>
      <li><span className="text-teal-600">10007 –</span> Beijing Institute of Technology</li>
      <li><span className="text-teal-600">10008 –</span> University of Science and Technology Beijing</li>
      <li><span className="text-teal-600">10010 –</span> Beijing University of Chemical Technology</li>
      <li><span className="text-teal-600">10013 –</span> Beijing University of Posts and Telecommunications</li>
      <li><span className="text-teal-600">10019 –</span> China Agricultural University (CAU)</li>
      <li><span className="text-teal-600">10022 –</span> Beijing Forestry University</li>
      <li><span className="text-teal-600">10026 –</span> Beijing University of Chinese Medicine</li>
      <li><span className="text-teal-600">10027 –</span> Beijing Normal University</li>
      <li><span className="text-teal-600">10028 –</span> Capital Normal University</li>
      <li><span className="text-teal-600">10029 –</span> Capital Institute of Physical Education</li>
      <li><span className="text-teal-600">10030 –</span> Beijing Foreign Studies University</li>
      <li><span className="text-teal-600">10031 –</span> Beijing International Studies University</li>
      <li><span className="text-teal-600">10032 –</span> Beijing Language and Culture University</li>
      <li><span className="text-teal-600">10034 –</span> Central University of Finance and Economics</li>
      <li><span className="text-teal-600">10036 –</span> University of International Business and Economics</li>
      <li><span className="text-teal-600">10038 –</span> Capital University of Business and Economics</li>
      <li><span className="text-teal-600">10040 –</span> China Foreign Affairs University</li>
      <li><span className="text-teal-600">10043 –</span> Beijing Sport University</li>
      <li><span className="text-teal-600">10045 –</span> Central Conservatory of Music</li>
      <li><span className="text-teal-600">10047 –</span> Central Academy of Fine Arts</li>
      <li><span className="text-teal-600">10048 –</span> The Central Academy of Drama</li>
      <li><span className="text-teal-600">10050 –</span> Beijing Film Academy</li>
      <li><span className="text-teal-600">10052 –</span> Central University for Nationalities</li>
      <li><span className="text-teal-600">10053 –</span> China University of Political Science and Law</li>
      <li><span className="text-teal-600">10054 –</span> North China Electric Power University</li>
      <li><span className="text-teal-600">10055 –</span> Nankai University</li>
      <li><span className="text-teal-600">10056 –</span> Tianjin University</li>
      <li><span className="text-teal-600">10057 –</span> Tianjin University of Science and Technology</li>
      <li><span className="text-teal-600">10062 –</span> Tianjin Medical University</li>
      <li><span className="text-teal-600">10063 –</span> Tianjin University of Traditional Chinese Medicine</li>
      <li><span className="text-teal-600">10065 –</span> Tianjin Normal University</li>
      <li><span className="text-teal-600">10066 –</span> Tianjin University of Technology and Education</li>
      <li><span className="text-teal-600">10068 –</span> Tianjin Foreign Studies University (TFSU)</li>
      <li><span className="text-teal-600">10140 –</span> Liaoning University</li>
      <li><span className="text-teal-600">10141 –</span> Dalian University of Technology</li>
      <li><span className="text-teal-600">10145 –</span> Northeastern University</li>
      <li><span className="text-teal-600">10151 –</span> Dalian Maritime University</li>
      <li><span className="text-teal-600">10159 –</span> China Medical University</li>
      <li><span className="text-teal-600">10161 –</span> Dalian Medical University</li>
      <li><span className="text-teal-600">10165 –</span> Liaoning Normal University</li>
      <li><span className="text-teal-600">10166 –</span> Shenyang Normal University</li>
      <li><span className="text-teal-600">10172 –</span> Dalian University of Foreign Languages</li>
      <li><span className="text-teal-600">10173 –</span> Dongbei University of Finance and Economics</li>
      <li><span className="text-teal-600">10183 –</span> Jilin University</li>
      <li><span className="text-teal-600">10184 –</span> Yanbian University</li>
      <li><span className="text-teal-600">10186 –</span> Changchun University of Science and Technology</li>
      <li><span className="text-teal-600">10200 –</span> Northeast Normal University</li>
      <li><span className="text-teal-600">10201 –</span> Beihua University</li>
      <li><span className="text-teal-600">10203 –</span> Jilin Normal University</li>
      <li><span className="text-teal-600">10210 –</span> Heilongjiang University</li>
      <li><span className="text-teal-600">10213 –</span> Harbin Institute of Technology</li>
      <li><span className="text-teal-600">10217 –</span> Harbin Engineering University</li>
      <li><span className="text-teal-600">10222 –</span> Jiamusi University</li>
      <li><span className="text-teal-600">10224 –</span> Northeast Agriculture University</li>
      <li><span className="text-teal-600">10231 –</span> Harbin Normal University</li>
      <li><span className="text-teal-600">10246 – Fudan Univ.</span></li>
<li><span className="text-teal-600">10247 – Tongji Univ.</span></li>
<li><span className="text-teal-600">10248 – Shanghai Jiao Tong Univ.</span></li>
<li><span className="text-teal-600">10251 – East China Univ. of Science and Technology</span></li>
<li><span className="text-teal-600">10252 – Univ. of Shanghai for Science and Tech.</span></li>
<li><span className="text-teal-600">10255 – Donghua Univ.</span></li>
<li><span className="text-teal-600">10268 – Shanghai Univ. of Traditional Chinese Medicine.</span></li>
<li><span className="text-teal-600">10269 – East China Normal University</span></li>
<li><span className="text-teal-600">10270 – Shanghai Normal Univ.</span></li>
<li><span className="text-teal-600">10271 – Shanghai International Studies Univ.</span></li>
<li><span className="text-teal-600">10272 – Shanghai Univ. of Finance and Economics (SUFE)</span></li>
<li><span className="text-teal-600">10277 – Shanghai Univ. of Sport</span></li>
<li><span className="text-teal-600">10278 – Shanghai Conservatory of Music</span></li>
<li><span className="text-teal-600">10280 – Shanghai University</span></li>
<li><span className="text-teal-600">10284 – Nanjing Univ.</span></li>
<li><span className="text-teal-600">10285 – Soochow Univ.</span></li>
<li><span className="text-teal-600">10286 – Southeast University</span></li>
<li><span className="text-teal-600">10287 – Nanjing Univ. of Aeronautics and Astronautics</span></li>
<li><span className="text-teal-600">10288 – Nanjing Univ. of Science and Technology</span></li>
<li><span className="text-teal-600">10290 – China Univ. of Mining and Technology</span></li>
<li><span className="text-teal-600">10294 – Hohai University</span></li>
<li><span className="text-teal-600">10295 – Jiangnan University</span></li>
<li><span className="text-teal-600">10300 – Nanjing Univ. of Information Science and Tech.</span></li>
<li><span className="text-teal-600">10307 – Nanjing Agricultural University</span></li>
<li><span className="text-teal-600">10315 – Nanjing Univ of Chinese Medicine</span></li>
<li><span className="text-teal-600">10335 – Zhejiang University</span></li>
<li><span className="text-teal-600">10337 – Zhejiang Univ of Technology</span></li>
<li><span className="text-teal-600">10338 – Zhejiang Sci-Tech Univ.</span></li>
<li><span className="text-teal-600">10345 – Zhejiang Normal Univ.</span></li>
<li><span className="text-teal-600">10355 – China Academy of Art</span></li>
<li><span className="text-teal-600">10357 – Anhui University</span></li>
<li><span className="text-teal-600">10358 – Univ. of Science and Technology of China (USTC)</span></li>
<li><span className="text-teal-600">10359 – Hefei Univ. of Technology</span></li>
<li><span className="text-teal-600">10370 – Anhui Normal Univ.</span></li>
<li><span className="text-teal-600">10384 – Xiamen Univ.</span></li>
<li><span className="text-teal-600">10403 – Nanchang Univ.</span></li>
<li><span className="text-teal-600">10408 – Jingdezhen Ceramic Institute</span></li>
<li><span className="text-teal-600">10422 – Shandong University</span></li>
<li><span className="text-teal-600">10423 – Ocean University of China</span></li>
<li><span className="text-teal-600">10445 – Shandong Normal University</span></li>
<li><span className="text-teal-600">10459 – Zhengzhou University</span></li>
<li><span className="text-teal-600">10486 – Wuhan University</span></li>
<li><span className="text-teal-600">10487 – Huazhong Univ of Science and Tech</span></li>
<li><span className="text-teal-600">10491 – China Univ. of Geosciences (Wuhan)</span></li>
<li><span className="text-teal-600">10497 – Wuhan Univ. of Technology</span></li>
<li><span className="text-teal-600">10504 – Huazhong Agricultural Univ.</span></li>
<li><span className="text-teal-600">10511 – Huazhong Normal University</span></li>
<li><span className="text-teal-600">10520 – Zhongnan Univ. of Economics and Law</span></li>
<li><span className="text-teal-600">10560 – Shantou University</span></li>
<li><span className="text-teal-600">0081 – Embassy of P.R. China in Albania</span></li>
<li><span className="text-teal-600">0121 – Embassy of P.R. China in Algeria</span></li>
<li><span className="text-teal-600">0241 – Embassy of P.R. China in Angola</span></li>
<li><span className="text-teal-600">0281 – Embassy of P.R. China in Antigua and Barbuda</span></li>
<li><span className="text-teal-600">0311 – Embassy of P.R. China in Azerbaijan</span></li>
<li><span className="text-teal-600">0321 – Embassy of Argentina in P.R. China</span></li>
<li><span className="text-teal-600">0361 – Consulate – General of P.R. China in Sydney</span></li>
<li><span className="text-teal-600">0401 – Embassy of P.R. China in Austria</span></li>
<li><span className="text-teal-600">0441 – Embassy of P.R. China in Bahamas</span></li>
<li><span className="text-teal-600">0481 – Embassy of Bahrain in P.R. China</span></li>
<li><span className="text-teal-600">1041 – Embassy of P.R. China in Myanmar</span></li>
<li><span className="text-teal-600">1081 – Embassy of P.R. China in Burundi</span></li>
<li><span className="text-teal-600">1121 – Embassy of P.R. China in Byelorussia</span></li>
<li><span className="text-teal-600">1321 – Embassy of P.R. China in Cape Verde</span></li>
<li><span className="text-teal-600">1401 – Embassy of P.R. China in Central Africa</span></li>
<li><span className="text-teal-600">1441 – Embassy of P.R. China in Sri Lanka</span></li>
<li><span className="text-teal-600">1481 – Embassy of P.R. China in Chad</span></li>
<li><span className="text-teal-600">1521 – Embassy of P.R. China in Chile</span></li>
<li><span className="text-teal-600">1701 – Embassy of P.R. China in Colombia</span></li>
<li><span className="text-teal-600">1741 – Embassy of P.R. China in Comores</span></li>
<li><span className="text-teal-600">1781 – Embassy of P.R. China in the Republic of Congo</span></li>
<li><span className="text-teal-600">1801 – Embassy of P.R. China in the Democratic Republic of Congo</span></li>
<li><span className="text-teal-600">1881 – Embassy of P.R. China in Costa Rica</span></li>
<li><span className="text-teal-600">1911 – Embassy of P.R. China in Cuba</span></li>
<li><span className="text-teal-600">1991 – Embassy of P.R. China in Denmark</span></li>
<li><span className="text-teal-600">2011 – Embassy of P.R. China in Dominica</span></li>

    </ul>
  </div>
</section>


<section>
          <h4 className="mt-8 text-2xl font-bold text-center text-white">
  Top 20 Most Popular Universities for International Students
</h4>
<div className="overflow-x-auto mt-6 text-black">
  <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
    <thead className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-semibold uppercase border border-gray-200">
          Rank
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold uppercase border border-gray-200">
          University (Chinese)
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold uppercase border border-gray-200">
          University (English)
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold uppercase border border-gray-200">
          Number of International Students
        </th>
      </tr>
    </thead>
    <tbody>
      {[
        { rank: 1, chinese: "北京语言文化大学", english: "Beijing Language and Culture University", students: "9,056" },
        { rank: 2, chinese: "对外经济贸易大学", english: "University of International Business and Economics", students: "8,555" },
        { rank: 3, chinese: "北京大学", english: "Peking University", students: "7,793" },
        { rank: 4, chinese: "上海交通大学", english: "Shanghai Jiaotong University", students: "7,412" },
        { rank: 5, chinese: "浙江大学", english: "Zhejiang University", students: "7,193" },
        { rank: 6, chinese: "复旦大学", english: "Fudan University", students: "7,057" },
        { rank: 7, chinese: "华东师范大学", english: "East China Normal University", students: "6,472" },
        { rank: 8, chinese: "清华大学", english: "Tsinghua University", students: "6,379" },
        { rank: 9, chinese: "云南民族大学", english: "Yunnan Nationalities University", students: "5,812" },
        { rank: 10, chinese: "东华大学", english: "Donghua University", students: "4,865" },
        { rank: 11, chinese: "暨南大学", english: "Jinan University", students: "4,861" },
        { rank: 12, chinese: "上海外国语大学", english: "Shanghai International Studies University", students: "4,712" },
        { rank: 13, chinese: "上海大学", english: "Shanghai University", students: "4,460" },
        { rank: 14, chinese: "同济大学", english: "Tongji University", students: "4,454" },
        { rank: 15, chinese: "哈尔滨工业大学", english: "Harbin Institute of Technology", students: "4,282" },
        { rank: 16, chinese: "山东大学", english: "Shandong University", students: "4,012" },
        { rank: 17, chinese: "四川大学", english: "Sichuan University", students: "3,872" },
        { rank: 18, chinese: "华中科技大学", english: "Huazhong University of Science and Technology", students: "3,680" },
        { rank: 19, chinese: "武汉大学", english: "Wuhan University", students: "3,561" },
        { rank: 20, chinese: "华侨大学", english: "Huaqiao University", students: "3,514" },
      ].map((university) => (
        <tr
          key={university.rank}
          className="hover:bg-purple-50 transition duration-200 ease-in-out"
        >
          <td className="px-6 py-4 text-sm border border-gray-200">
            {university.rank}
          </td>
          <td className="px-6 py-4 text-sm border border-gray-200">
            {university.chinese}
          </td>
          <td className="px-6 py-4 text-sm border border-gray-200">
            {university.english}
          </td>
          <td className="px-6 py-4 text-sm border border-gray-200">
            {university.students}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        </section>


        <div className="space-y-8 mt-10">
      {/* Top 15 Most Affordable Universities */}
{/* Top 15 Most Affordable Universities */}
<section className="bg-blue-50 p-8  shadow-lg mt-6">
  <h2 className="text-3xl font-bold text-blue-700 mb-4">Top 15 Most Affordable Universities</h2>
  <p className="text-lg text-gray-600 mb-6">
    Explore the most affordable universities that offer quality education at a budget-friendly price:
  </p>
  <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 list-inside space-y-2">
    <li className="flex items-center">
      <span className="font-semibold mr-2">1.</span> Bohai University
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">2.</span> Chengdu University
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">3.</span> Wuhan University
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">4.</span> Shenzhen University
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">5.</span> Ningbo University
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">6.</span> Jiangsu University
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">7.</span> Beijing Chinese Language and Culture College
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">8.</span> Tianjin University
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">9.</span> Jinzhou Medical University
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">10.</span> University of Science and Technology Beijing
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">11.</span> Asia Europe Business School
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">12.</span> Beijing Language and Culture University
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">13.</span> Peking University
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">14.</span> Nanjing Medical University
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">15.</span> Tsinghua University
    </li>
  </ul>
</section>

{/* Top 8 Medical Universities */}
<section className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg shadow-lg mt-6">
  <h2 className="text-3xl font-bold text-green-800 mb-4">Top 8 Medical Universities</h2>
  <h3 className="text-xl font-semibold text-green-600 mb-4">Best Medical Universities in China</h3>
  <ol className="list-decimal pl-6 text-gray-700 space-y-3">
    <li className="flex items-center">
      <span className="font-semibold mr-2">1.</span> Shantou University Medical College (SUMC)
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">2.</span> Nanjing Medical University (NJMU)
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">3.</span> Zhejiang University School of Medicine (ZUSM)
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">4.</span> Shanghai Medical College of Fudan University (SHMC)
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">5.</span> Guangzhou Medical University (GMU)
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">6.</span> Capital Medical University (CCMU)
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">7.</span> Tongji University School of Medicine (TUSM)
    </li>
    <li className="flex items-center">
      <span className="font-semibold mr-2">8.</span> Jinzhou Medical University (JZMU)
    </li>
  </ol>
</section>



      {/* University Ranking vs Professional Ranking */}
<section className="mt-10 p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-lg">
  <h2 className="text-3xl font-bold text-blue-800 border-b-4 border-blue-500 pb-2">
    University Ranking VS Professional Ranking
  </h2>
  <p className="mt-6 text-gray-700 text-lg leading-relaxed">
    There are 3 dominant ranking standards when measuring a university: 
    <strong className="text-blue-600">Quacquerelli Symonds World University Rankings (QS)</strong>, 
    <strong className="text-blue-600">Times Higher Education (THE)</strong>, and 
    <strong className="text-blue-600">The Academic Ranking of World Universities (ARWU)</strong>.
  </p>

  <h3 className="text-2xl font-semibold text-blue-700 mt-8">
    1. Quacquerelli Symonds World University Rankings (QS)
  </h3>
  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
    QS is an annual university ranking based on data covering four key areas for students: research, employability, teaching, and internationalization.
  </p>
  <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed mt-4 space-y-2">
    <li>Massachusetts Institute of Technology (MIT)</li>
    <li>University of Oxford</li>
    <li>Stanford University</li>
    <li>University of Cambridge</li>
    <li>Harvard University</li>
    <li>California Institute of Technology (Caltech)</li>
    <li>Imperial College London</li>
    <li>ETH Zurich – Swiss Federal Institute of Technology</li>
    <li>University College London</li>
    <li>University of Chicago</li>
  </ul>

  <h3 className="text-2xl font-semibold text-blue-700 mt-8">
    2. Times Higher Education (THE)
  </h3>
  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
    THE World University Rankings for 2020 include almost 1,400 universities from 92 countries. Some of the top 10 universities include:
  </p>
  <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed mt-4 space-y-2">
    <li>University of Oxford</li>
    <li>Stanford University</li>
    <li>Harvard University</li>
    <li>California Institute of Technology</li>
    <li>Massachusetts Institute of Technology</li>
    <li>University of Cambridge</li>
    <li>University of California, Berkeley</li>
    <li>Yale University</li>
    <li>Princeton University</li>
    <li>The University of Chicago</li>
  </ul>

  <h3 className="text-2xl font-semibold text-blue-700 mt-8">
    3. The Academic Ranking of World Universities (ARWU)
  </h3>
  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
    ARWU is recognized as the precursor of global university rankings. The top universities in ARWU include:
  </p>
  <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed mt-4 space-y-2">
    <li>Harvard University</li>
    <li>Stanford University</li>
    <li>University of Cambridge</li>
    <li>Massachusetts Institute of Technology (MIT)</li>
    <li>University of California, Berkeley</li>
    <li>Princeton University</li>
    <li>University of Oxford</li>
    <li>Columbia University</li>
    <li>California Institute of Technology</li>
    <li>University of Chicago</li>
  </ul>
</section>

{/* How to Choose a University or a Major */}
<section className="mt-10 p-6 bg-gradient-to-r from-green-50 via-white to-green-50 rounded-xl shadow-lg">
  <h2 className="text-3xl font-bold text-green-800 border-b-4 border-green-500 pb-2">
    How to Choose a University or a Major
  </h2>
  <p className="mt-6 text-gray-700 text-lg leading-relaxed">
    In order to choose a university and a major, four aspects need to be carefully considered:
  </p>
  <ol className="list-decimal pl-8 text-gray-700 text-lg leading-relaxed space-y-4 mt-4">
    <li>
      <span className="font-semibold text-green-600">Choice of Major:</span> 
      Each university in China offers more than 40 majors, but only a few are open to foreign students. If you value specialization, this should be your primary focus.
    </li>
    <li>
      <span className="font-semibold text-green-600">Financial Aspect:</span> 
      Scholarships with numerous benefits, such as fee exemptions for tuition and dormitory, are available. Decide whether you want to apply for a graduate or undergraduate program.
    </li>
    <li>
      <span className="font-semibold text-green-600">University Location and Quality:</span> 
      Universities in economically developed cities offer better living conditions, but the cost of living can be higher in places like Jiangsu, Shanghai, Guangdong, and Zhejiang.
    </li>
    <li>
      <span className="font-semibold text-green-600">Field of Study:</span> 
      Science and engineering majors, especially those in technology, are highly regarded and offer better job opportunities and wages.
    </li>
  </ol>
</section>


{/* China University Ranking 2021 */}
<section className="mt-10 p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-lg">
  <h2 className="text-3xl font-bold text-blue-800 border-b-4 border-blue-500 pb-2">
    China University Ranking 2021
  </h2>
  <p className="mt-6 text-gray-700 text-lg leading-relaxed">
    The annual global university ranking is a comprehensive guide to the world’s top universities. 
    <span className="font-semibold text-blue-600">Tsinghua University</span> ranks highest in China, at the world’s Top 17. China leads Asia in the number of top-400 universities.
  </p>
  <p className="mt-6 text-gray-700 text-lg leading-relaxed">
    China has seen significant progress in attracting global talent, with improvements in international faculty and student ratios.
  </p>
  <p className="mt-6 text-gray-700 text-lg leading-relaxed">
    33 Chinese universities are included in the Global 400 universities in the latest QS World University Rankings.
  </p>
</section>

    </div>
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
