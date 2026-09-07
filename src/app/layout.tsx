import type { Metadata } from "next";
import localFont from "next/font/local";
import { Spectral } from "next/font/google";
import "./globals.css";
// Icons are used on every page (contact, services, universities…), so the
// FontAwesome stylesheet belongs here, not imported per-page — without it the
// sub-pages rendered empty icon chips.
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
/* The editorial voice: Spectral is a screen-built serif with real weight range,
   academic without being a newspaper. Headlines only; Geist runs the text. */
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Premium Pathways — Study & Work Abroad",
  description:
    "Higher education and career pathways in China and Europe. Clear, personal guidance from application to arrival.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spectral.variable} font-sans antialiased`}
      >
        <Loader />
        <Background />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
