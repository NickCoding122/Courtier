import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const aktivExtended = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-aktiv-extended",
  display: "swap",
});

const aktivRegular = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-aktiv-regular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "COURTIER | Indoor Padel & Leisure Club",
  description:
    "COURTIER is a luxury indoor padel, training, and leisure club blending performance sport with design-led spaces.",
  openGraph: {
    title: "COURTIER | Indoor Padel & Leisure Club",
    description:
      "COURTIER is a luxury indoor padel, training, and leisure club blending performance sport with design-led spaces.",
    type: "website",
    url: "https://courtier.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${aktivExtended.variable} ${aktivRegular.variable}`}>
      <body className={`${aktivRegular.className} bg-[#0E0E0E] text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
