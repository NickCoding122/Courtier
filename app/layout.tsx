import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const aktivExtended = localFont({
  src: [
    { path: "../public/fonts/aktiv/AktivGroteskExtended-Regular.woff2", weight: "400" },
    { path: "../public/fonts/aktiv/AktivGroteskExtended-Bold.woff2", weight: "700" },
  ],
  variable: "--font-aktiv-extended",
});

const aktivRegular = localFont({
  src: [
    { path: "../public/fonts/aktiv/AktivGrotesk-Regular.woff2", weight: "400" },
  ],
  variable: "--font-aktiv-regular",
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
      <body className="bg-[#0E0E0E] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
