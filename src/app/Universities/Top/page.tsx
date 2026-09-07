"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PageShell from "../../components/page/PageShell";
import PageHero from "../../components/page/PageHero";
import { Section, SectionHead } from "../../components/page/Section";
import CtaBand from "../../components/page/CtaBand";
import { inputClass } from "../../components/page/Field";
import Reveal from "../../components/Reveal";

/* Product truth from the previous build: every list below is kept entire. */
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
  "10006 | Beihang University (BUAA)", "10007 | Beijing Institute of Technology",
  "10008 | University of Science and Technology Beijing", "10010 | Beijing University of Chemical Technology",
  "10013 | Beijing University of Posts and Telecommunications", "10019 | China Agricultural University (CAU)",
  "10022 | Beijing Forestry University", "10026 | Beijing University of Chinese Medicine",
  "10027 | Beijing Normal University", "10028 | Capital Normal University",
  "10030 | Beijing Foreign Studies University", "10031 | Beijing International Studies University",
  "10032 | Beijing Language and Culture University", "10034 | Central University of Finance and Economics",
  "10036 | University of International Business and Economics", "10040 | China Foreign Affairs University",
  "10043 | Beijing Sport University", "10045 | Central Conservatory of Music",
  "10047 | Central Academy of Fine Arts", "10052 | Central University for Nationalities",
  "10053 | China University of Political Science and Law", "10054 | North China Electric Power University",
  "10055 | Nankai University", "10056 | Tianjin University",
  "10062 | Tianjin Medical University", "10065 | Tianjin Normal University",
  "10068 | Tianjin Foreign Studies University (TFSU)", "10140 | Liaoning University",
  "10141 | Dalian University of Technology", "10145 | Northeastern University",
  "10151 | Dalian Maritime University", "10159 | China Medical University",
  "10161 | Dalian Medical University", "10172 | Dalian University of Foreign Languages",
  "10173 | Dongbei University of Finance and Economics", "10183 | Jilin University",
  "10184 | Yanbian University", "10200 | Northeast Normal University",
  "10210 | Heilongjiang University", "10213 | Harbin Institute of Technology",
  "10217 | Harbin Engineering University", "10224 | Northeast Agriculture University",
  "10231 | Harbin Normal University", "10246 | Fudan University",
  "10247 | Tongji University", "10248 | Shanghai Jiao Tong University",
  "10251 | East China University of Science and Technology", "10269 | East China Normal University",
  "10270 | Shanghai Normal University", "10271 | Shanghai International Studies University",
  "10272 | Shanghai University of Finance and Economics", "10280 | Shanghai University",
  "10284 | Nanjing University", "10286 | Southeast University",
  "10290 | China University of Mining and Technology", "10294 | Hohai University",
  "10307 | Nanjing Agricultural University", "10335 | Zhejiang University",
  "10357 | Anhui University", "10358 | University of Science and Technology of China (USTC)",
  "10384 | Xiamen University", "10422 | Shandong University",
  "10423 | Ocean University of China", "10459 | Zhengzhou University",
  "10486 | Wuhan University", "10487 | Huazhong University of Science and Technology",
  "10491 | China University of Geosciences (Wuhan)", "10497 | Wuhan University of Technology",
  "10504 | Huazhong Agricultural University", "10511 | Huazhong Normal University",
  "10520 | Zhongnan University of Economics and Law", "10560 | Shantou University",
];

const ITEMS_PER_PAGE = 8;

const projects = [
  {
    title: "Project 211",
    desc: "112 universities chosen by the Ministry of Education for priority development, the top tier of Chinese higher education.",
    universities: ["Tsinghua University", "Peking University", "Renmin University of China", "Beihang University", "Central University of Finance and Economics", "Beijing Normal University", "University of International Business and Economics", "Beijing Institute of Technology", "Beijing Foreign Studies University", "China University of Political Science and Law"],
  },
  {
    title: "Project 985",
    desc: "A subset of 39 universities with the highest level of government support, China's equivalent of the Ivy League.",
    universities: ["Shanghai Jiao Tong University", "Nanjing University", "Wuhan University", "Huazhong University of Science and Technology", "Tianjin University", "University of Science and Technology of China", "Nankai University", "Beijing Normal University", "Xi'an Jiaotong University", "Harbin Institute of Technology"],
  },
];

const howToChoose = [
  { icon: "fa-book-open", title: "Start from the major", body: "Each university offers 40+ majors but only a subset are open to international students. Prioritise universities strong in your chosen field." },
  { icon: "fa-coins", title: "Then the money", body: "Full scholarships covering tuition and dormitory are available. Weigh scholarship options carefully against your budget." },
  { icon: "fa-map-marker-alt", title: "Then the city", body: "Developed cities offer better facilities and job access, but Jiangsu, Shanghai, Guangdong and Zhejiang carry higher living costs." },
  { icon: "fa-flask", title: "Science and engineering pay", body: "Science, technology and engineering majors are highly regarded and consistently offer stronger employment outcomes and wages." },
];

function TopUniversitiesInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
    setDraft(q);
    setPage(1);
  }, [searchParams]);

  const matches = query
    ? universitieslist.filter((u) =>
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.city.toLowerCase().includes(query.toLowerCase())
      )
    : universitieslist;

  /* No matches falls back to the whole list, so the page is never empty. */
  const filtered = matches.length > 0 ? matches : universitieslist;
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const visible = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const search = (e: React.FormEvent) => {
    e.preventDefault();
    const q = draft.trim();
    router.push(q ? `/Universities/Top?q=${encodeURIComponent(q)}` : "/Universities/Top");
  };
  const clearSearch = () => router.push("/Universities/Top");

  return (
    <PageShell>
      <PageHero
        image="/img/tsinghua-university.jpg"
        alt="The old gate at Tsinghua University, Beijing"
        title="The universities worth the flight."
        lede="Twenty-six Chinese universities sit in the QS global top 400. Here are the ones our students choose, what they cost to live at, and how to pick between them."
        aside={
          <form onSubmit={search} className="flex rounded-full border border-chalk/[0.14] bg-night-900/70 p-1.5 shadow-lift backdrop-blur-md transition focus-within:border-ember/60">
            <label htmlFor="uni-search" className="sr-only">Search universities by name or city</label>
            <i className="fas fa-search ml-4 self-center text-sm text-chalk/40" aria-hidden />
            <input
              id="uni-search" type="search" value={draft} onChange={(e) => setDraft(e.target.value)}
              placeholder="Search by university or city"
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-[0.95rem] text-chalk placeholder:text-chalk/45 focus:outline-none"
            />
            <button type="submit" className="btn-ember !px-5 !py-2.5 text-sm">Search</button>
          </form>
        }
      />

      {/* ---- Profiles: the searchable, paginated list ---- */}
      <Section id="profiles">
        <SectionHead
          title="University profiles."
          lede="Student numbers and estimated monthly living costs for international students, in US dollars."
        />

        {query && (
          <Reveal from="up" className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-full border border-chalk/[0.12] bg-night-900/70 py-2 pl-5 pr-2">
            <p className="text-sm text-chalk/80">
              {matches.length > 0
                ? <><span className="font-semibold text-chalk">{matches.length}</span> result{matches.length !== 1 ? "s" : ""} for <span className="font-semibold text-ember">&ldquo;{query}&rdquo;</span></>
                : <>Nothing matched <span className="font-semibold text-ember">&ldquo;{query}&rdquo;</span>, so here is every university</>}
            </p>
            <button type="button" onClick={clearSearch} className="btn-ghost !px-4 !py-2 text-xs">
              <i className="fas fa-times text-[10px]" aria-hidden /> Clear
            </button>
          </Reveal>
        )}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((u, idx) => (
            <Reveal key={u.name} from="up" delay={Math.min(idx * 0.05, 0.3)}>
              <article className="group flex h-full flex-col overflow-hidden rounded-card border border-chalk/[0.08] bg-night-900/70">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={u.image} alt={u.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-sm text-chalk/85">{u.city}</p>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-chalk">{u.name}</h3>
                  <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-chalk/10 pt-4 text-xs">
                    <div>
                      <dt className="text-chalk/50">Students</dt>
                      <dd className="mt-1 font-mono text-sm tabular-nums text-chalk">{u.totalStudents ? u.totalStudents.toLocaleString("en-US") : "n/a"}</dd>
                    </div>
                    <div>
                      <dt className="text-chalk/50">International</dt>
                      <dd className="mt-1 font-mono text-sm tabular-nums text-chalk">{u.internationalStudents ? u.internationalStudents.toLocaleString("en-US") : "n/a"}</dd>
                    </div>
                    <div>
                      <dt className="text-chalk/50">Living / mo</dt>
                      <dd className="mt-1 font-mono text-sm tabular-nums text-ember">${u.livingCost}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Profile pages">
            <button
              type="button" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-chalk/20 text-chalk/80 transition hover:border-chalk/50 disabled:opacity-30"
            >
              <i className="fas fa-arrow-left text-xs" aria-hidden />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n} type="button" onClick={() => setPage(n)} aria-current={n === page ? "page" : undefined}
                className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm tabular-nums transition ${
                  n === page ? "bg-ember text-night-950" : "border border-chalk/20 text-chalk/70 hover:border-chalk/50"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-chalk/20 text-chalk/80 transition hover:border-chalk/50 disabled:opacity-30"
            >
              <i className="fas fa-arrow-right text-xs" aria-hidden />
            </button>
          </nav>
        )}
      </Section>

      {/* ---- QS ledger ---- */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHead title="China's global standing." lede="Every Chinese university in the QS World University Rankings top 400, with its home city. Hong Kong and Taiwan included." />
            </div>
          </div>
          <Reveal from="up" className="lg:col-span-8">
            <ol className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
              {universities.map((u) => (
                <li key={u.rank} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-3 border-b border-chalk/10 py-3.5">
                  <span className="font-mono text-sm tabular-nums text-ember">{u.rank}</span>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-chalk">{u.english}</p>
                    <p className="mt-0.5 flex flex-wrap gap-x-3 text-xs text-chalk/55">
                      <span lang="zh">{u.chinese}</span>
                      <span>{u.location}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* ---- Most popular with international students ---- */}
      <Section>
        <SectionHead title="Where international students actually go." lede="The twenty universities with the most enrolled international students." />
        <Reveal from="up" delay={0.08}>
          <ol className="no-bar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {popularUniversities.map((u) => (
              <li key={u.rank} className="panel-solid flex w-[16rem] shrink-0 snap-start flex-col justify-between p-5">
                <span className="font-mono text-sm tabular-nums text-chalk/50">{String(u.rank).padStart(2, "0")}</span>
                <div className="mt-8">
                  <p className="font-semibold leading-snug text-chalk">{u.english}</p>
                  <p className="mt-1 text-xs text-chalk/55" lang="zh">{u.chinese}</p>
                </div>
                <p className="mt-6 border-t border-chalk/10 pt-4 text-sm text-chalk/70">
                  <span className="font-mono text-lg tabular-nums text-chalk">{u.students}</span> international students
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* ---- Affordable and medical ---- */}
      <Section>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHead title="The fifteen most affordable." lede="Where tuition and living costs are lowest for an international student." />
            <Reveal from="up" delay={0.08}>
              <ol className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {affordableUniversities.map((name, i) => (
                  <li key={name} className="grid grid-cols-[2rem_1fr] items-baseline gap-2 border-b border-chalk/10 py-3">
                    <span className="font-mono text-xs tabular-nums text-chalk/45">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[0.95rem] text-chalk/90">{name}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <SectionHead title="Eight for medicine." lede="The medical schools our MBBS and clinical medicine students apply to most." />
            <Reveal from="up" delay={0.1}>
              <ol className="mt-8">
                {medicalUniversities.map((u, i) => (
                  <li key={u.name} className="grid grid-cols-[2rem_1fr_auto] items-baseline gap-2 border-b border-chalk/10 py-3">
                    <span className="font-mono text-xs tabular-nums text-chalk/45">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[0.95rem] text-chalk/90">{u.name}</span>
                    <span className="font-mono text-xs text-ember">{u.short}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ---- 211 and 985 ---- */}
      <Section>
        <SectionHead title="Project 211 and Project 985." lede="China's two flagship government programs, naming the universities that receive extra funding and development. A name on either list is a mark of quality." />
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {projects.map((proj, k) => (
            <Reveal key={proj.title} from="up" delay={k * 0.08} className="border-t border-ember/60 pt-6">
              <h3 className="display-md text-chalk">{proj.title}</h3>
              <p className="mt-3 max-w-[48ch] leading-relaxed text-chalk/70">{proj.desc}</p>
              <ul className="mt-6 columns-1 gap-8 sm:columns-2">
                {proj.universities.map((name) => (
                  <li key={name} className="break-inside-avoid py-1.5 text-[0.95rem] text-chalk/85">{name}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- CSC ---- */}
      <Section>
        <SectionHead title="Universities that take the Chinese Government Scholarship." lede="Every institution below accepts CSC applicants. The number is the university's official code, which you will need on the form." />
        <Reveal from="up" delay={0.08} className="mt-10">
          <details className="group rounded-card border border-chalk/[0.1] bg-night-900/60 open:bg-night-900/80">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-chalk [&::-webkit-details-marker]:hidden">
              <span className="font-semibold">All {cscList.length} CSC universities</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-chalk/20 text-chalk/70 transition group-open:rotate-45">
                <i className="fas fa-plus text-xs" aria-hidden />
              </span>
            </summary>
            <ul className="grid grid-cols-1 gap-x-10 border-t border-chalk/10 px-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
              {cscList.map((item) => {
                const [code, name] = item.split(" | ");
                return (
                  <li key={item} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-2 border-b border-chalk/[0.06] py-2.5 text-sm">
                    <span className="font-mono text-xs tabular-nums text-ember">{code}</span>
                    <span className="text-chalk/85">{name}</span>
                  </li>
                );
              })}
            </ul>
          </details>
        </Reveal>
      </Section>

      {/* ---- How to choose ---- */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHead title="How to choose between them." lede="Four questions, in the order we ask them in a consultation." />
              <Reveal from="up" delay={0.12} className="relative mt-8 aspect-[4/3] overflow-hidden rounded-card border border-chalk/[0.08]">
                <Image src="/img/journey/students-bench.jpg" alt="International students together on a campus bench" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </Reveal>
            </div>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {howToChoose.map((item, i) => (
              <Reveal key={item.title} as="li" from="up" delay={i * 0.06} className="grid grid-cols-[3rem_1fr] gap-5 border-t border-chalk/10 py-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ember/50 text-ember"><i className={`fas ${item.icon} text-sm`} aria-hidden /></span>
                <div>
                  <h3 className="display-md text-chalk">{item.title}</h3>
                  <p className="mt-3 max-w-[52ch] leading-relaxed text-chalk/70">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBand title="Ready to apply to one of these?" lede="An advisor will match you with the right university and carry the application from first form to offer letter." />
    </PageShell>
  );
}

export default function TopUniversities() {
  return (
    <Suspense fallback={null}>
      <TopUniversitiesInner />
    </Suspense>
  );
}
