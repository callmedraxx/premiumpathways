"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Animate from "../../components/Animate";

const universities = [
  { rank: 17,  chinese: "清华大学",       english: "Tsinghua University",                              location: "Beijing"   },
  { rank: 18,  chinese: "北京大学",       english: "Peking University",                                location: "Beijing"   },
  { rank: 22,  chinese: "香港大学",       english: "The University of Hong Kong",                      location: "Hong Kong" },
  { rank: 31,  chinese: "复旦大学",       english: "Fudan University",                                 location: "Shanghai"  },
  { rank: 34,  chinese: "香港科技大学",   english: "HK University of Science and Technology",          location: "Hong Kong" },
  { rank: 39,  chinese: "香港中文大学",   english: "The Chinese University of Hong Kong",              location: "Hong Kong" },
  { rank: 45,  chinese: "浙江大学",       english: "Zhejiang University",                              location: "Zhejiang"  },
  { rank: 51,  chinese: "上海交通大学",   english: "Shanghai Jiao Tong University",                   location: "Shanghai"  },
  { rank: 55,  chinese: "香港城市大学",   english: "City University of Hong Kong",                     location: "Hong Kong" },
  { rank: 66,  chinese: "香港理工大学",   english: "The Hong Kong Polytechnic University",             location: "Hong Kong" },
  { rank: 68,  chinese: "国立台湾大学",   english: "National Taiwan University",                       location: "Taiwan"    },
  { rank: 99,  chinese: "中国科学技术大学", english: "University of Science and Technology of China", location: "Anhui"     },
  { rank: 132, chinese: "南京大学",       english: "Nanjing University",                               location: "Nanjing"   },
  { rank: 212, chinese: "同济大学",       english: "Tongji University",                                location: "Shanghai"  },
  { rank: 226, chinese: "武汉大学",       english: "Wuhan University",                                 location: "Wuhan"     },
  { rank: 237, chinese: "哈尔滨工业大学", english: "Harbin Institute of Technology",                   location: "Harbin"    },
  { rank: 253, chinese: "国立成功大学",   english: "National Cheng Kung University",                   location: "Taiwan"    },
  { rank: 262, chinese: "中山大学",       english: "Sun Yat-sen University",                           location: "Guangdong" },
  { rank: 272, chinese: "北京师范大学",   english: "Beijing Normal University",                        location: "Beijing"   },
  { rank: 277, chinese: "南方科技大学",   english: "Southern University of Science and Technology",    location: "Guangdong" },
  { rank: 295, chinese: "西安交通大学",   english: "Xi'an Jiaotong University",                        location: "Xi'an"     },
  { rank: 335, chinese: "华中科技大学",   english: "Huazhong University of Science and Technology",    location: "Hubei"     },
  { rank: 339, chinese: "天津大学",       english: "Tianjin University",                               location: "Tianjin"   },
  { rank: 359, chinese: "南开大学",       english: "Nankai University",                                location: "Tianjin"   },
  { rank: 374, chinese: "北京理工大学",   english: "Beijing Institute of Technology",                  location: "Beijing"   },
  { rank: 385, chinese: "北京航空航天大学", english: "Beihang University",                             location: "Beijing"   },
];

const universitieslist = [
  { name: "Beijing Normal University",                    image: "/img/bnu.jpg",                                           city: "Beijing",              totalStudents: 37771,   internationalStudents: null,  livingCost: 1600 },
  { name: "Tsinghua University",                          image: "/img/tsinghua-university.jpg",                           city: "Beijing",              totalStudents: 74572,   internationalStudents: 3856,  livingCost: 1600 },
  { name: "Peking University",                            image: "/img/full-scholarship-of-a-university-in-beijing21.jpg", city: "Beijing",              totalStudents: 45974,   internationalStudents: 2783,  livingCost: 1600 },
  { name: "Fudan University",                             image: "/img/full-scholarship-in-shanghai-university.jpg",       city: "Shanghai",             totalStudents: 51993,   internationalStudents: 2535,  livingCost: 1650 },
  { name: "Zhejiang University",                          image: "/img/hangzhou.jpeg",                                     city: "Hangzhou",             totalStudents: 65821,   internationalStudents: 5123,  livingCost: 1600 },
  { name: "Shanghai Jiao Tong University",                image: "/img/shangai.jpeg",                                      city: "Shanghai",             totalStudents: 44550,   internationalStudents: 2096,  livingCost: 1650 },
  { name: "Nanjing University",                           image: "/img/Nanjing.jpeg",                                      city: "Nanjing",              totalStudents: 41247,   internationalStudents: 1396,  livingCost: 1500 },
  { name: "Wuhan University",                             image: "/img/Wuhan.jpeg",                                        city: "Wuhan",                totalStudents: null,    internationalStudents: 2800,  livingCost: 1200 },
  { name: "Harbin Institute of Technology",               image: "/img/full-scholarship-in-harbin-1.jpg",                  city: "Harbin",               totalStudents: 55901,   internationalStudents: 3904,  livingCost: 1200 },
  { name: "Tongji University",                            image: "/img/shangai.jpeg",                                      city: "Shanghai",             totalStudents: 37492,   internationalStudents: 3160,  livingCost: 1650 },
  { name: "Huazhong University of Science and Technology",image: "/img/Wuhan.jpeg",                                        city: "Wuhan",                totalStudents: null,    internationalStudents: null,  livingCost: 1200 },
  { name: "Nankai University",                            image: "/img/Tianjin.jpeg",                                      city: "Tianjin",              totalStudents: 33195,   internationalStudents: 3729,  livingCost: 1300 },
  { name: "Tianjin University",                           image: "/img/Tianjin.jpeg",                                      city: "Tianjin",              totalStudents: 35370,   internationalStudents: null,  livingCost: 1300 },
  { name: "Beijing Institute of Technology",              image: "/img/beijing.jpeg",                                      city: "Beijing",              totalStudents: 30733,   internationalStudents: 2800,  livingCost: 1600 },
  { name: "Xiamen University",                            image: "/img/Xiamen.jpeg",                                       city: "Xiamen",               totalStudents: 40000,   internationalStudents: null,  livingCost: 1400 },
  { name: "Shanghai University",                          image: "/img/full-scholarship-in-shanghai-university.jpg",       city: "Shanghai",             totalStudents: 57057,   internationalStudents: 2837,  livingCost: 1650 },
  { name: "University of Science & Technology Beijing",   image: "/img/beijing.jpeg",                                      city: "Beijing",              totalStudents: 25000,   internationalStudents: null,  livingCost: 1600 },
  { name: "Beihang University",                           image: "/img/beijing-jiaotong-university.jpg",                   city: "Beijing",              totalStudents: 39759,   internationalStudents: 1137,  livingCost: 1600 },
  { name: "Shandong University",                          image: "/img/Qingdao.jpeg",                                      city: "Jinan / Qingdao / Weihai", totalStudents: 61023, internationalStudents: null, livingCost: 1100 },
  { name: "South China University of Technology",         image: "/img/south-china-university-of-technology.jpg",          city: "Guangzhou",            totalStudents: null,    internationalStudents: null,  livingCost: 1500 },
  { name: "Southeast University",                         image: "/img/southeast-university.jpg",                          city: "Nanjing",              totalStudents: 30664,   internationalStudents: null,  livingCost: 1500 },
  { name: "Jilin University",                             image: "/img/jilin-university-1.jpg",                            city: "Changchun",            totalStudents: 72505,   internationalStudents: null,  livingCost: 1100 },
  { name: "Renmin University of China",                   image: "/img/renmin-university-of-china.jpg",                    city: "Beijing",              totalStudents: 26757,   internationalStudents: null,  livingCost: 1600 },
  { name: "East China University of Science and Technology", image: "/img/east-china-university-of-science-and-technology.jpg", city: "Shanghai",      totalStudents: 26000,   internationalStudents: null,  livingCost: 1650 },
  { name: "Dalian University of Technology",              image: "/img/dalian-university-of-technology.jpg",               city: "Dalian",               totalStudents: 41241,   internationalStudents: null,  livingCost: 1200 },
  { name: "East China Normal University",                 image: "/img/east-china-normal-university.jpg",                  city: "Shanghai",             totalStudents: 34746,   internationalStudents: null,  livingCost: 1650 },
  { name: "China Agricultural University",                image: "/img/china-agricultural-university-campus7.jpg",         city: "Beijing",              totalStudents: 20019,   internationalStudents: null,  livingCost: 1600 },
  { name: "Beijing Jiaotong University",                  image: "/img/beijing-jiaotong-university.jpg",                   city: "Beijing",              totalStudents: 25569,   internationalStudents: null,  livingCost: 1600 },
  { name: "Sichuan University",                           image: "/img/sichuan-university.jpg",                            city: "Chengdu",              totalStudents: 63000,   internationalStudents: null,  livingCost: 1100 },
  { name: "Beijing University of Chemical Technology",    image: "/img/beijing.jpeg",                                      city: "Beijing",              totalStudents: 26300,   internationalStudents: 350,   livingCost: 1600 },
  { name: "Chongqing University",                         image: "/img/chongqing-university.jpg",                          city: "Chongqing",            totalStudents: 47000,   internationalStudents: null,  livingCost: 1200 },
  { name: "Hunan University",                             image: "/img/hunan-university_1617088177.jpg",                   city: "Changsha",             totalStudents: 36000,   internationalStudents: null,  livingCost: 1100 },
  { name: "Central South University",                     image: "/img/changsha.jpeg",                                     city: "Changsha",             totalStudents: 55000,   internationalStudents: null,  livingCost: 1100 },
  { name: "Beijing Foreign Studies University",           image: "/img/bnu.jpg",                                           city: "Beijing",              totalStudents: 8579,    internationalStudents: null,  livingCost: 1600 },
  { name: "Shanghai International Studies University",    image: "/img/shanghai-international-studies-university.jpg",     city: "Shanghai",             totalStudents: 13564,   internationalStudents: null,  livingCost: 1650 },
  { name: "Wuhan University of Technology",               image: "/img/wuhan-university-of-technology.jpg",                city: "Wuhan",                totalStudents: 54000,   internationalStudents: null,  livingCost: 1200 },
];

const popularUniversities = [
  { rank: 1,  chinese: "北京语言文化大学", english: "Beijing Language and Culture University",      students: "9,056" },
  { rank: 2,  chinese: "对外经济贸易大学", english: "University of International Business & Economics", students: "8,555" },
  { rank: 3,  chinese: "北京大学",         english: "Peking University",                            students: "7,793" },
  { rank: 4,  chinese: "上海交通大学",     english: "Shanghai Jiaotong University",                 students: "7,412" },
  { rank: 5,  chinese: "浙江大学",         english: "Zhejiang University",                          students: "7,193" },
  { rank: 6,  chinese: "复旦大学",         english: "Fudan University",                             students: "7,057" },
  { rank: 7,  chinese: "华东师范大学",     english: "East China Normal University",                 students: "6,472" },
  { rank: 8,  chinese: "清华大学",         english: "Tsinghua University",                          students: "6,379" },
  { rank: 9,  chinese: "云南民族大学",     english: "Yunnan Nationalities University",              students: "5,812" },
  { rank: 10, chinese: "东华大学",         english: "Donghua University",                           students: "4,865" },
  { rank: 11, chinese: "暨南大学",         english: "Jinan University",                             students: "4,861" },
  { rank: 12, chinese: "上海外国语大学",   english: "Shanghai International Studies University",    students: "4,712" },
  { rank: 13, chinese: "上海大学",         english: "Shanghai University",                          students: "4,460" },
  { rank: 14, chinese: "同济大学",         english: "Tongji University",                            students: "4,454" },
  { rank: 15, chinese: "哈尔滨工业大学",   english: "Harbin Institute of Technology",               students: "4,282" },
  { rank: 16, chinese: "山东大学",         english: "Shandong University",                          students: "4,012" },
  { rank: 17, chinese: "四川大学",         english: "Sichuan University",                           students: "3,872" },
  { rank: 18, chinese: "华中科技大学",     english: "Huazhong University of Science and Technology",students: "3,680" },
  { rank: 19, chinese: "武汉大学",         english: "Wuhan University",                             students: "3,561" },
  { rank: 20, chinese: "华侨大学",         english: "Huaqiao University",                           students: "3,514" },
];

const affordableUniversities = [
  "Bohai University", "Chengdu University", "Wuhan University", "Shenzhen University",
  "Ningbo University", "Jiangsu University", "Beijing Chinese Language and Culture College",
  "Tianjin University", "Jinzhou Medical University", "University of Science and Technology Beijing",
  "Asia Europe Business School", "Beijing Language and Culture University",
  "Peking University", "Nanjing Medical University", "Tsinghua University",
];

const medicalUniversities = [
  { name: "Shantou University Medical College", short: "SUMC" },
  { name: "Nanjing Medical University", short: "NJMU" },
  { name: "Zhejiang University School of Medicine", short: "ZUSM" },
  { name: "Shanghai Medical College of Fudan University", short: "SHMC" },
  { name: "Guangzhou Medical University", short: "GMU" },
  { name: "Capital Medical University", short: "CCMU" },
  { name: "Tongji University School of Medicine", short: "TUSM" },
  { name: "Jinzhou Medical University", short: "JZMU" },
];

const cscList = [
  "10006 – Beihang University (BUAA)", "10007 – Beijing Institute of Technology",
  "10008 – University of Science and Technology Beijing", "10010 – Beijing University of Chemical Technology",
  "10013 – Beijing University of Posts and Telecommunications", "10019 – China Agricultural University (CAU)",
  "10022 – Beijing Forestry University", "10026 – Beijing University of Chinese Medicine",
  "10027 – Beijing Normal University", "10028 – Capital Normal University",
  "10030 – Beijing Foreign Studies University", "10031 – Beijing International Studies University",
  "10032 – Beijing Language and Culture University", "10034 – Central University of Finance and Economics",
  "10036 – University of International Business and Economics", "10040 – China Foreign Affairs University",
  "10043 – Beijing Sport University", "10045 – Central Conservatory of Music",
  "10047 – Central Academy of Fine Arts", "10052 – Central University for Nationalities",
  "10053 – China University of Political Science and Law", "10054 – North China Electric Power University",
  "10055 – Nankai University", "10056 – Tianjin University",
  "10062 – Tianjin Medical University", "10065 – Tianjin Normal University",
  "10068 – Tianjin Foreign Studies University (TFSU)", "10140 – Liaoning University",
  "10141 – Dalian University of Technology", "10145 – Northeastern University",
  "10151 – Dalian Maritime University", "10159 – China Medical University",
  "10161 – Dalian Medical University", "10172 – Dalian University of Foreign Languages",
  "10173 – Dongbei University of Finance and Economics", "10183 – Jilin University",
  "10184 – Yanbian University", "10200 – Northeast Normal University",
  "10210 – Heilongjiang University", "10213 – Harbin Institute of Technology",
  "10217 – Harbin Engineering University", "10224 – Northeast Agriculture University",
  "10231 – Harbin Normal University", "10246 – Fudan University",
  "10247 – Tongji University", "10248 – Shanghai Jiao Tong University",
  "10251 – East China University of Science and Technology", "10269 – East China Normal University",
  "10270 – Shanghai Normal University", "10271 – Shanghai International Studies University",
  "10272 – Shanghai University of Finance and Economics", "10280 – Shanghai University",
  "10284 – Nanjing University", "10286 – Southeast University",
  "10290 – China University of Mining and Technology", "10294 – Hohai University",
  "10307 – Nanjing Agricultural University", "10335 – Zhejiang University",
  "10357 – Anhui University", "10358 – University of Science and Technology of China (USTC)",
  "10384 – Xiamen University", "10422 – Shandong University",
  "10423 – Ocean University of China", "10459 – Zhengzhou University",
  "10486 – Wuhan University", "10487 – Huazhong University of Science and Technology",
  "10491 – China University of Geosciences (Wuhan)", "10497 – Wuhan University of Technology",
  "10504 – Huazhong Agricultural University", "10511 – Huazhong Normal University",
  "10520 – Zhongnan University of Economics and Law", "10560 – Shantou University",
];

const ITEMS_PER_PAGE = 8;

export default function TopUniversities() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
    setPage(1);
  }, [searchParams]);

  const matches = query
    ? universitieslist.filter(u =>
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.city.toLowerCase().includes(query.toLowerCase())
      )
    : universitieslist;

  // If query produced no matches, fall back to full list so page isn't empty
  const filtered = matches.length > 0 ? matches : universitieslist;

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const visible = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const clearSearch = () => {
    router.push("/Universities/Top");
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex flex-1 flex-col">

        {/* ── Hero ── */}
        <section className="relative flex h-[420px] items-end justify-center overflow-hidden">
          <Image src="/img/tsinghua-university.jpg" alt="Top universities in China" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 pb-14 text-center px-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">QS World Rankings</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Top Universities</h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              China is home to some of the world's highest-ranked institutions — explore the best and find your fit.
            </p>
          </div>
        </section>

        {/* ── QS Rankings Table ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">QS Rankings</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">China's Global Standing</h2>
              <p className="mt-3 text-slate-400">33 Chinese universities are included in the QS Global Top 400.</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-teal-400">Rank</th>
                    <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-teal-400">Chinese</th>
                    <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-teal-400">English</th>
                    <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-teal-400">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {universities.map((u, i) => (
                    <tr key={u.rank} className={`border-b border-white/5 transition hover:bg-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                      <td className="px-5 py-3.5 font-bold text-teal-400">#{u.rank}</td>
                      <td className="px-5 py-3.5 text-slate-300">{u.chinese}</td>
                      <td className="px-5 py-3.5 text-white font-medium">{u.english}</td>
                      <td className="px-5 py-3.5 text-slate-400">{u.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── University Cards ── */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">Detailed Profiles</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">University Profiles</h2>
              <p className="mt-3 text-slate-400">Student numbers and estimated monthly living costs for international students.</p>
            </div>

            {/* Search result banner */}
            {query && (
              <div className="mb-6 flex items-center justify-between rounded-xl border border-teal-500/20 bg-teal-500/10 px-4 py-3">
                <p className="text-sm text-slate-300">
                  {filtered.length > 0
                    ? <><span className="font-semibold text-white">{filtered.length}</span> result{filtered.length !== 1 ? "s" : ""} for <span className="font-semibold text-teal-300">&ldquo;{query}&rdquo;</span></>
                    : <>No results for <span className="font-semibold text-teal-300">&ldquo;{query}&rdquo;</span> — showing all universities</>
                  }
                </p>
                <button
                  onClick={clearSearch}
                  className="ml-4 flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/20"
                >
                  <i className="fas fa-times text-xs" aria-hidden /> Clear
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((u, idx) => (
                <Animate key={u.name} variant="fade-up" delay={Math.min(idx * 60, 360)} threshold={0.05}>
                <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-teal-500/30">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={u.image} alt={u.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-sm font-semibold text-white leading-snug">{u.name}</h3>
                    <div className="mt-3 flex-1 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <i className="fas fa-map-marker-alt text-teal-400 w-3.5 text-center" aria-hidden />
                        {u.city}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <i className="fas fa-users text-teal-400 w-3.5 text-center" aria-hidden />
                        {u.totalStudents ? u.totalStudents.toLocaleString() : "N/A"} students
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <i className="fas fa-globe text-teal-400 w-3.5 text-center" aria-hidden />
                        {u.internationalStudents ? u.internationalStudents.toLocaleString() : "N/A"} intl. students
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white font-medium">
                        <i className="fas fa-dollar-sign text-teal-400 w-3.5 text-center" aria-hidden />
                        ~${u.livingCost}/mo living cost
                      </div>
                    </div>
                  </div>
                </div>
                </Animate>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-30"
              >
                <i className="fas fa-chevron-left text-xs" aria-hidden />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition ${
                    n === page
                      ? "bg-teal-500 text-white"
                      : "border border-white/20 bg-white/5 text-slate-400 hover:bg-white/10"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-30"
              >
                <i className="fas fa-chevron-right text-xs" aria-hidden />
              </button>
            </div>
          </div>
        </section>

        {/* ── Most Popular for Intl Students ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">International Students</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Top 20 Most Popular Universities</h2>
              <p className="mt-3 text-slate-400">Ranked by number of enrolled international students.</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-teal-400">#</th>
                    <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-teal-400">Chinese</th>
                    <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-teal-400">English</th>
                    <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wider text-teal-400">Intl. Students</th>
                  </tr>
                </thead>
                <tbody>
                  {popularUniversities.map((u, i) => (
                    <tr key={u.rank} className={`border-b border-white/5 transition hover:bg-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                      <td className="px-5 py-3 font-bold text-teal-400">{u.rank}</td>
                      <td className="px-5 py-3 text-slate-400">{u.chinese}</td>
                      <td className="px-5 py-3 text-white font-medium">{u.english}</td>
                      <td className="px-5 py-3 text-right text-slate-300">{u.students}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Affordable + Medical side by side ── */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
            {/* Affordable */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                  <i className="fas fa-tag text-sm" aria-hidden />
                </span>
                <h2 className="text-xl font-bold text-white">Top 15 Most Affordable</h2>
              </div>
              <ol className="space-y-2">
                {affordableUniversities.map((name, i) => (
                  <li key={name} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-xs font-bold text-teal-400">{i + 1}</span>
                    {name}
                  </li>
                ))}
              </ol>
            </div>

            {/* Medical */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                  <i className="fas fa-stethoscope text-sm" aria-hidden />
                </span>
                <h2 className="text-xl font-bold text-white">Top 8 Medical Universities</h2>
              </div>
              <ol className="space-y-3">
                {medicalUniversities.map((u, i) => (
                  <li key={u.name} className="flex items-start gap-3 text-sm">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-xs font-bold text-teal-400 mt-0.5">{i + 1}</span>
                    <div>
                      <span className="text-white font-medium">{u.name}</span>
                      <span className="ml-2 text-xs text-teal-400">({u.short})</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── Projects 211 & 985 ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">Government Programs</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Project 211 & Project 985</h2>
              <p className="mt-3 max-w-2xl mx-auto text-slate-400">
                China's two flagship government initiatives designating elite universities for additional funding and development.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "Project 211",
                  desc: "112 universities selected by the Ministry of Education for priority development — representing the top tier of Chinese higher education.",
                  universities: ["Tsinghua University", "Peking University", "Renmin University of China", "Beihang University", "Central University of Finance and Economics", "Beijing Normal University", "University of International Business and Economics", "Beijing Institute of Technology", "Beijing Foreign Studies University", "China University of Political Science and Law"],
                },
                {
                  title: "Project 985",
                  desc: "A subset of 39 universities receiving the highest level of government support — China's equivalent of the Ivy League.",
                  universities: ["Shanghai Jiao Tong University", "Nanjing University", "Wuhan University", "Huazhong University of Science and Technology", "Tianjin University", "University of Science and Technology of China", "Nankai University", "Beijing Normal University", "Xi'an Jiaotong University", "Harbin Institute of Technology"],
                },
              ].map((proj) => (
                <div key={proj.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white mb-1">{proj.title}</h3>
                  <p className="text-sm text-slate-400 mb-5">{proj.desc}</p>
                  <ul className="space-y-2">
                    {proj.universities.map((name) => (
                      <li key={name} className="flex items-center gap-2 text-sm text-slate-300">
                        <i className="fas fa-check text-teal-400 text-xs flex-shrink-0" aria-hidden />
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CSC Scholarship Universities ── */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">CSC Scholarships</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Universities Accepting CSC Scholarships</h2>
              <p className="mt-3 text-slate-400">Chinese Government Scholarship (CSC) eligible institutions.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 max-h-96 overflow-y-auto">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cscList.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <i className="fas fa-university text-teal-400/60 text-xs mt-1 flex-shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── How to Choose ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">Decision Guide</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How to Choose a University</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: "fa-book-open",     title: "Choice of Major",              body: "Each university offers 40+ majors but only a subset are open to international students. Prioritise universities strong in your chosen field." },
                { icon: "fa-coins",          title: "Financial Aspect",             body: "Full scholarships covering tuition and dormitory are available. Weigh scholarship options carefully against your budget." },
                { icon: "fa-map-marker-alt", title: "Location & Quality",           body: "Economically developed cities offer better facilities and job access, but Jiangsu, Shanghai, Guangdong, and Zhejiang carry higher living costs." },
                { icon: "fa-flask",          title: "Field of Study",               body: "Science, technology, and engineering majors are highly regarded and consistently offer stronger employment outcomes and wages." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                    <i className={`fas ${item.icon} text-sm`} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-white/5 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 px-4 py-14 sm:px-6 md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to apply to a top university?</h2>
              <p className="text-lg text-slate-300">Our consultants will match you with the right institution and guide your application from start to finish.</p>
            </div>
            <a
              href="/About/Contact"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-950/40 transition hover:bg-teal-400 whitespace-nowrap"
            >
              Get in touch
              <i className="fas fa-arrow-right text-sm" aria-hidden />
            </a>
          </div>
        </section>

      </main>

      <WhatsAppWidget phoneNumber="+18683181079" message="Hi, I would like to enquire about your services!" />
      <Footer height="300px" />
    </div>
  );
}
