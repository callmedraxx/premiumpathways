import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
// Icons are used on every page (contact, services, universities), so the
// FontAwesome stylesheet belongs here, not imported per page.
import "@fortawesome/fontawesome-free/css/all.min.css";
import Background from "./components/three/Background";
import Loader from "./components/Loader";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});
/* The display voice. A grotesk with optical sizes and a width axis, so the
   headlines can be set tight and large without the letterforms thinning out.
   Geist runs the text; Geist Mono is reserved for the cabin readout. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Pathways | Study in China from Nigeria and beyond",
  description:
    "Admissions, scholarships, visas and arrival support for students heading to Chinese universities. From your first call in Lagos to your first day on campus.",
  openGraph: {
    title: "Premium Pathways",
    description: "Your degree in China, guided from Lagos to landing.",
    images: ["/img/journey/shanghai-night.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#06080f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} font-sans antialiased`}>
        <Loader />
        <Background />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
