import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
    <html lang="en">
      <body className={`${montserrat.className} bg-black text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
