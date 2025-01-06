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
      city: 'Beijing',
      totalStudents: 37771,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'Tsinghua University',
      city: 'Beijing',
      totalStudents: 74572,
      internationalStudents: 3856,
      livingCost: 1600,
    },
    {
      name: 'Peking University',
      city: 'Beijing',
      totalStudents: 45974,
      internationalStudents: 2783,
      livingCost: 1600,
    },
    {
      name: 'Fudan University',
      city: 'Shanghai',
      totalStudents: 51993,
      internationalStudents: 2535,
      livingCost: 1650,
    },
    {
      name: 'Zhejiang University',
      city: 'Hangzhou',
      totalStudents: 65821,
      internationalStudents: 5123,
      livingCost: 1600,
    },
    {
      name: 'Shanghai Jiaotong University',
      city: 'Shanghai',
      totalStudents: 44550,
      internationalStudents: 2096,
      livingCost: 1650,
    },
    {
      name: 'Nanjing University',
      city: 'Nanjing',
      totalStudents: 41247,
      internationalStudents: 1396,
      livingCost: 1500,
    },
    {
      name: 'Wuhan University',
      city: 'Wuhan',
      totalStudents: '/',
      internationalStudents: 2800,
      livingCost: 1200,
    },
    {
      name: 'Harbin Institute of Technology',
      city: 'Harbin',
      totalStudents: 55901,
      internationalStudents: 3904,
      livingCost: 1200,
    },
    {
      name: 'Tongji University',
      city: 'Shanghai',
      totalStudents: 37492,
      internationalStudents: 3160,
      livingCost: 1650,
    },
    {
      name: 'Huazhong University of Science and Technology',
      city: 'Wuhan',
      totalStudents: '/',
      internationalStudents: '/',
      livingCost: 1200,
    },
    {
      name: 'Nankai University',
      city: 'Tianjin',
      totalStudents: 33195,
      internationalStudents: 3729,
      livingCost: 1300,
    },
    {
      name: 'Tianjin University',
      city: 'Tianjin',
      totalStudents: 35370,
      internationalStudents: '/',
      livingCost: 1300,
    },
    {
      name: 'Beijing Institute of Technology',
      city: 'Beijing',
      totalStudents: 30733,
      internationalStudents: 2800,
      livingCost: 1600,
    },
    {
      name: 'Xiamen University',
      city: 'Xiamen',
      totalStudents: 40000,
      internationalStudents: '/',
      livingCost: 1400,
    },
    {
      name: 'Shanghai University',
      city: 'Shanghai',
      totalStudents: 57057,
      internationalStudents: 2837,
      livingCost: 1650,
    },
    {
      name: 'University Of Science & Technology Beijing',
      city: 'Beijing',
      totalStudents: 25000,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'Beihang University',
      city: 'Beijing',
      totalStudents: 39759,
      internationalStudents: 1137,
      livingCost: 1600,
    },
    {
      name: 'Shandong University',
      city: 'Jinan, Qingdao, Weihai',
      totalStudents: 61023,
      internationalStudents: '/',
      livingCost: 1100,
    },
    {
      name: 'South China University of Technology',
      city: 'Guangzhou',
      totalStudents: '/',
      internationalStudents: '/',
      livingCost: 1500,
    },
    {
      name: 'Southeast University',
      city: 'Nanjing',
      totalStudents: 30664,
      internationalStudents: '/',
      livingCost: 1500,
    },
    {
      name: 'Jilin University',
      city: 'Changchun',
      totalStudents: 72505,
      internationalStudents: '/',
      livingCost: 1100,
    },
    {
      name: 'Renmin University of China',
      city: 'Beijing',
      totalStudents: 26757,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'East China University Of Science and Technology',
      city: 'Shanghai',
      totalStudents: 26000,
      internationalStudents: '/',
      livingCost: 1650,
    },
    {
      name: 'Dalian University of Technology',
      city: 'Dalian',
      totalStudents: 41241,
      internationalStudents: '/',
      livingCost: 1200,
    },
    {
      name: 'East China Normal University',
      city: 'Shanghai',
      totalStudents: 34746,
      internationalStudents: '/',
      livingCost: 1650,
    },
    {
      name: 'China Agricultural University',
      city: 'Beijing',
      totalStudents: 20019,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'Beijing Jiaotong University',
      city: 'Beijing',
      totalStudents: 25569,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'Sichuan University',
      city: 'Chengdu',
      totalStudents: 63000,
      internationalStudents: '/',
      livingCost: 1100,
    },
    {
      name: 'Beijing University Of Chemical Technology',
      city: 'Beijing',
      totalStudents: 26300,
      internationalStudents: 350,
      livingCost: 1600,
    },
    {
      name: 'Chongqing University',
      city: 'Chongqing',
      totalStudents: 47000,
      internationalStudents: '/',
      livingCost: 1200,
    },
    {
      name: 'Hunan University',
      city: 'Changsha',
      totalStudents: 36000,
      internationalStudents: '/',
      livingCost: 1100,
    },
    {
      name: 'Central South University',
      city: 'Changsha',
      totalStudents: 55000,
      internationalStudents: '/',
      livingCost: 1100,
    },
    {
      name: 'Lanzhou University',
      city: 'Lanzhou',
      totalStudents: 32720,
      internationalStudents: '/',
      livingCost: 1000,
    },
    {
      name: 'Beijing Foreign Studies University',
      city: 'Beijing',
      totalStudents: 8579,
      internationalStudents: '/',
      livingCost: 1600,
    },
    {
      name: 'Shanghai International Studies University',
      city: 'Shanghai',
      totalStudents: 13564,
      internationalStudents: '/',
      livingCost: 1650,
    },
    {
      name: 'Wuhan University of Technology',
      city: 'Wuhan',
      totalStudents: 54000,
      internationalStudents: '/',
      livingCost: 1200,
    },
  ];


  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change
  const handlePageChange = (pageNumber: any) => {
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
      <main className="flex-1 p-8 mt-20 sm:p-20">

      <div className="university-list">
        {currentUniversities.map((university, index) => (
          <div key={index} className="university-card">
            <img
              src="https://via.placeholder.com/150"
              alt={university.name}
              className="university-image"
            />
            <div className="university-info">
              <h3>{university.name}</h3>
              <p>City: {university.city}</p>
              <p>Total Students: {university.totalStudents}</p>
              <p>International Students: {university.internationalStudents}</p>
              <p>Monthly Living Cost: ${university.livingCost}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
      
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Rank</th>
              <th className="px-4 py-2 border border-gray-300">University (Chinese)</th>
              <th className="px-4 py-2 border border-gray-300">University (English)</th>
              <th className="px-4 py-2 border border-gray-300">Location</th>
            </tr>
          </thead>
          <tbody>
            {universities.map((university) => (
              <tr key={university.rank} className="hover:bg-black">
                <td className="px-4 py-2 border border-gray-300">{university.rank}</td>
                <td className="px-4 py-2 border border-gray-300">{university.chinese}</td>
                <td className="px-4 py-2 border border-gray-300">{university.english}</td>
                <td className="px-4 py-2 border border-gray-300">{university.location}</td>
              </tr>
            ))}
          </tbody>
        </table>


        {/* Additional Content Below the Table */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Academic Performance of Chinese Universities</h2>
          <p className="mt-4">
            Academic performance in key subjects at Chinese universities continues to be strong, according to newly released rankings. 
            88 Chinese universities are included in the Global 400 subjects in the latest QS World University Rankings by Subject, which was released Tuesday by QS Quacquarelli Symonds, a higher education research firm.
          </p>
          <p className="mt-4">
            This makes China the country with the second most number of universities included in the Global 400 Subjects, according to the QS rankings. This is only after the United States, which has 164 universities included in the Global 400 subjects. The UK comes third at 78 universities.
          </p>
          <p className="mt-4">
            China’s best performances by subject this year come from Tsinghua University, with three top-10 places, and Peking University, with two top-10 places. Tsinghua University finishes eighth in both Architecture/Built Environment and in Engineering (Civil and Structural). Peking University also manages an equally lofty finish, coming eighth in Modern Languages; it also lies joint 10th for Linguistics. Tsinghua comes in 10th place in the world’s Materials Science subject rankings.
          </p>

          <h3 className="mt-8 text-lg font-semibold">Chinese University Rankings</h3>
          <p className="mt-4">
            There is no official Chinese University ranking. However, there are a number of Chinese organizations and international publications who release university rankings.
          </p>

          <h4 className="mt-6 text-md font-semibold">Project 211</h4>
          <ul className="list-disc pl-6">
            <li>Tsinghua University</li>
            <li>Peking University</li>
            <li>Renmin University of China</li>
            <li>Beihang University</li>
            <li>Central University of Finance and Economics</li>
            <li>Beijing Normal University</li>
            <li>University of International Business and Economics.</li>
            <li>Beijing Institute of Technology</li>
            <li>Beijing Foreign Studies University</li>
            <li>China University of Political Science and Law</li>
          </ul>

          <h4 className="mt-6 text-md font-semibold">Project 985</h4>
          <ul className="list-disc pl-6">
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

          <h4 className="mt-6 text-md font-semibold">Universities Accepting CSC Scholarships</h4>
          <ul className="list-disc pl-6">
          <li>10006 – Beihang Univ. (BUAA)</li>
  <li>10007 – Beijing Institute of Technology</li>
  <li>10008 – Univ. of Science and Technology Beijing</li>
  <li>10010 – Beijing Univ. of Chemical Tech.</li>
  <li>10013 – Beijing Univ. of Posts and Telecommunications</li>
  <li>10019 – China Agricultural Univ (CAU)</li>
  <li>10022 – Beijing Forestry Univ.</li>
  <li>10026 – Beijing University of Chinese Medicine</li>
  <li>10027 – Beijing Normal Univ.</li>
  <li>10028 – Capital Normal Univ.</li>
  <li>10029 – Capital Institute of Physical Educations</li>
  <li>10030 – Beijing Foreign Studies University</li>
  <li>10031 – Beijing International Studies Univ.</li>
  <li>10032 – Beijing Language and Culture Univ.</li>
  <li>10034 – Central Univ. of Finance and Economics</li>
  <li>10036 – Univ. of International Business and Economics</li>
  <li>10038 – Capital Univ. of Business and Economics</li>
  <li>10040 – China Foreign Affairs Univ.</li>
  <li>10043 – Beijing Sport University</li>
  <li>10045 – Central Conservatory of Music</li>
  <li>10047 – Central Academy of Fine Arts</li>
  <li>10048 – The Central Academy of Drama</li>
  <li>10050 – Beijing Film Academy</li>
  <li>10052 – Central University For Nationalities</li>
  <li>10053 – China University of Political Science and Law</li>
  <li>10054 – North China Electric Power University</li>
  <li>10055 – Nankai University</li>
  <li>10056 – Tianjin Univ.</li>
  <li>10057 – Tianjin Univ. of Science and Technology</li>
  <li>10062 – Tianjin Medical University</li>
  <li>10063 – Tianjin Univ. of Traditional Chinese Medicine</li>
  <li>10065 – Tianjin Normal Univ</li>
  <li>10066 – Tianjin Univ. of Technology and Education</li>
  <li>10068 – Tianjin Foreign Studies Univ. (TFSU)</li>
  <li>10140 – Liaoning University</li>
  <li>10141 – Dalian Univ. of Technology</li>
  <li>10145 – Northeastern University</li>
  <li>10151 – Dalian Maritime Univ.</li>
  <li>10159 – China Medical University</li>
  <li>10161 – Dalian Medical University</li>
  <li>10165 – Liaoning Normal University</li>
  <li>10166 – Shenyang Normal University</li>
  <li>10172 – Dalian Univ. of Foreign Languages</li>
  <li>10173 – Dongbei Univ of Finance and Economics</li>
  <li>10183 – Jilin University</li>
  <li>10184 – Yanbian Univeristy</li>
  <li>10186 – Changchun Univ. of Science and Technology</li>
  <li>10200 – Northeast Normal Univ.</li>
  <li>10201 – Beihua Univ.</li>
  <li>10203 – Jilin Normal Univ.</li>
  <li>10210 – Heilongjiang Univ.</li>
  <li>10213 – Harbin Institute of Technology</li>
  <li>10217 – Harbin Engineering Univ.</li>
  <li>10222 – Jiamusi University</li>
  <li>10224 – Northeast Agriculture Univ.</li>
  <li>10231 – Harbin Normal University</li>
  <li>10246 – Fudan Univ.</li>
  <li>10247 – Tongji Univ.</li>
  <li>10248 – Shanghai Jiao Tong Univ.</li>
  <li>10251 – East China Univ. of Science and Technology</li>
  <li>10252 – Univ. of Shanghai for Science and Tech.</li>
  <li>10255 – Donghua Univ.</li>
  <li>10268 – Shanghai Univ. of Traditional Chinese Medicine.</li>
  <li>10269 – East China Normal University</li>
  <li>10270 – Shanghai Normal Univ.</li>
  <li>10271 – Shanghai International Studies Univ.</li>
  <li>10272 – Shanghai Univ. of Finance and Economics (SUFE)</li>
  <li>10277 – Shanghai Univ. of Sport</li>
  <li>10278 – Shanghai Conservatory of Music</li>
  <li>10280 – Shanghai University</li>
  <li>10284 – Nanjing Univ.</li>
  <li>10285 – Soochow Univ.</li>
  <li>10286 – Southeast University</li>
  <li>10287 – Nanjing Univ. of Aeronautics and Astronautics</li>
  <li>10288 – Nanjing Univ. of Science and Technology</li>
  <li>10290 – China Univ. of Mining and Technology</li>
  <li>10294 – Hohai University</li>
  <li>10295 – Jiangnan University</li>
  <li>10300 – Nanjing Univ. of Information Science and Tech.</li>
  <li>10307 – Nanjing Agricultural University</li>
  <li>10315 – Nanjing Univ of Chinese Medicine</li>
  <li>10335 – Zhejiang University</li>
  <li>10337 – Zhejiang Univ of Technology</li>
  <li>10338 – Zhejiang Sci-Tech Univ.</li>
  <li>10345 – Zhejiang Normal Univ.</li>
  <li>10355 – China Academy of Art</li>
  <li>10357 – Anhui University</li>
  <li>10358 – Univ. of Science and Technology of China (USTC)</li>
  <li>10359 – Hefei Univ. of Technology</li>
  <li>10370 – Anhui Normal Univ.</li>
  <li>10384 – Xiamen Univ.</li>
  <li>10403 – Nanchang Univ.</li>
  <li>10408 – Jingdezhen Ceramic Institute</li>
  <li>10422 – Shandong University</li>
  <li>10423 – Ocean University of China</li>
  <li>10445 – Shandong Normal University</li>
  <li>10459 – Zhengzhou University</li>
  <li>10486 – Wuhan University</li>
  <li>10487 – Huazhong Univ of Science and Tech</li>
  <li>10491 – China Univ. of Geosciences (Wuhan)</li>
  <li>10497 – Wuhan Univ. of Technology</li>
  <li>10504 – Huazhong Agricultural Univ.</li>
  <li>10511 – Huazhong Normal University</li>
  <li>10520 – Zhongnan Univ. of Economics and Law</li>
  <li>10560 – Shantou University</li>
  <li>0081 – Embassy of P.R. China in Albania</li>
  <li>0121 – Embassy of P.R. China in Algeria</li>
  <li>0241 – Embassy of P.R. China in Angola</li>
  <li>0281 – Embassy of P.R. China in Antigua and Barbuda</li>
  <li>0311 – Embassy of P.R. China in Azerbaijan</li>
  <li>0321 – Embassy of Argentina in P.R. China</li>
  <li>0361 – Consulate – General of P.R. China in Sydney</li>
  <li>0401 – Embassy of P.R. China in Austria</li>
  <li>0441 – Embassy of P.R. China in Bahamas</li>
  <li>0481 – Embassy of Bahrain in P.R. China</li>
  <li>1041 – Embassy of P.R. China in Myanmar</li>
  <li>1081 – Embassy of P.R. China in Burundi</li>
  <li>1121 – Embassy of P.R. China in Byelorussia</li>
  <li>1321 – Embassy of P.R. China in Cape Verde</li>
  <li>1401 – Embassy of P.R. China in Central Africa</li>
  <li>1441 – Embassy of P.R. China in Sri Lanka</li>
  <li>1481 – Embassy of P.R. China in Chad</li>
  <li>1521 – Embassy of P.R. China in Chile</li>
  <li>1701 – Embassy of P.R. China in Colombia</li>
  <li>1741 – Embassy of P.R. China in Comores</li>
  <li>1781 – Embassy of P.R. China in the Republic of Congo</li>
  <li>1801 – Embassy of P.R. China in the Democratic Republic of Congo</li>
  <li>1881 – Embassy of P.R. China in Costa Rica</li>
  <li>1911 – Embassy of P.R. China in Cuba</li>
  <li>1991 – Embassy of P.R. China in Denmark</li>
  <li>2011 – Embassy of P.R. China in Dominica</li>
          </ul>



          <h4 className="mt-6 text-xxl font-semibold">Top 20 most popular universities for international students</h4>
          <table className="min-w-full table-auto border-collapse border border-gray-200">
  <thead>
    <tr>
      <th className="px-4 py-2 border border-gray-300">Rank</th>
      <th className="px-4 py-2 border border-gray-300">University (Chinese)</th>
      <th className="px-4 py-2 border border-gray-300">University (English)</th>
      <th className="px-4 py-2 border border-gray-300">Number of International Students</th>
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
      { rank: 20, chinese: "华侨大学", english: "Huaqiao University", students: "3,514" }
    ].map((university) => (
      <tr key={university.rank} className="hover:bg-black">
        <td className="px-4 py-2 border border-gray-300">{university.rank}</td>
        <td className="px-4 py-2 border border-gray-300">{university.chinese}</td>
        <td className="px-4 py-2 border border-gray-300">{university.english}</td>
        <td className="px-4 py-2 border border-gray-300">{university.students}</td>
      </tr>
    ))}
  </tbody>
</table>

        </section>


        <div className="space-y-8 mt-10">
      {/* Top 15 Most Affordable Universities */}
      <section>
        <h2 className="text-2xl font-semibold">Top 15 Most Affordable Universities</h2>
        <ul className="list-disc pl-5">
          <li>Bohai University</li>
          <li>Chengdu University</li>
          <li>Wuhan University</li>
          <li>Shenzhen University</li>
          <li>Ningbo University</li>
          <li>Jiangsu University</li>
          <li>Beijing Chinese Language and Culture College</li>
          <li>Tianjin University</li>
          <li>Jinzhou Medical University</li>
          <li>University of Science and Technology Beijing</li>
          <li>Asia Europe Business School</li>
          <li>Beijing Language and Culture University</li>
          <li>Peking University</li>
          <li>Nanjing Medical University</li>
          <li>Tsinghua University</li>
        </ul>
      </section>

      {/* Top 8 Medical Universities */}
      <section>
        <h2 className="text-2xl font-semibold">Top 8 Medical Universities</h2>
        <h3 className="text-xl font-medium">Best Medical Universities In China</h3>
        <ol className="list-decimal pl-5">
          <li>Shantou University Medical College (SUMC)</li>
          <li>Nanjing Medical University (NJMU)</li>
          <li>Zhejiang University School of Medicine (ZUSM)</li>
          <li>Shanghai Medical College of Fudan University (SHMC)</li>
          <li>Guangzhou Medical University (GMU)</li>
          <li>Capital Medical University (CCMU)</li>
          <li>Tongji University School of Medicine (TUSM)</li>
          <li>Jinzhou Medical University (JZMU)</li>
        </ol>
      </section>

      {/* University Ranking vs Professional Ranking */}
      <section>
        <h2 className="text-2xl font-semibold">University Ranking VS Professional Ranking</h2>
        <p>
          There are 3 dominant ranking standards when measuring a university: 
          <strong>Quacquerelli Symonds World University Rankings (QS)</strong>, 
          <strong>Times Higher Education (THE)</strong>, and 
          <strong>The Academic Ranking of World Universities (ARWU)</strong>.
        </p>

        <h3 className="text-xl font-medium">1. Quacquerelli Symonds World University Rankings (QS)</h3>
        <p>
          QS is an annual university ranking based on data covering four key areas for students: research, employability, teaching, and internationalization.
        </p>
        <ul className="list-disc pl-5">
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

        <h3 className="text-xl font-medium">2. Times Higher Education (THE)</h3>
        <p>
          THE World University Rankings for 2020 include almost 1,400 universities from 92 countries. Some of the top 10 universities include:
        </p>
        <ul className="list-disc pl-5">
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

        <h3 className="text-xl font-medium">3. The Academic Ranking of World Universities (ARWU)</h3>
        <p>
          ARWU is recognized as the precursor of global university rankings. The top universities in ARWU include:
        </p>
        <ul className="list-disc pl-5">
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
      <section>
        <h2 className="text-2xl font-semibold">How to Choose a University or a Major</h2>
        <p>
          In order to choose a university and a major, four aspects have to be taken into consideration:
        </p>
        <ol className="list-decimal pl-5">
          <li><strong>Choice of Major:</strong> Each university in China offers more than 40 majors, but only a few are open to foreign students. If you value specialization, then you should focus on it.</li>
          <li><strong>Financial Aspect:</strong> Scholarships are available with many benefits, such as fee exemptions for tuition and dormitory. Decide if you want to apply for a graduate or undergraduate program.</li>
          <li><strong>University Location and Quality:</strong> Universities in economically developed cities offer better living conditions, but the cost of living can be higher in places like Jiangsu, Shanghai, Guangdong, and Zhejiang.</li>
          <li><strong>Field of Study:</strong> Science and engineering majors, especially those in technology, are highly regarded and have better job opportunities and wages.</li>
        </ol>
      </section>

      {/* China University Ranking 2021 */}
      <section>
        <h2 className="text-2xl font-semibold">China University Ranking 2021</h2>
        <p>
          The annual global university ranking is a comprehensive guide to the world’s top universities. Tsinghua University ranks highest in China, at the world’s Top 17. China leads Asia in the number of top-400 universities.
        </p>
        <p>
          China has seen significant progress in attracting global talent, with improvements in international faculty and student ratios. 
        </p>
        <p>
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
