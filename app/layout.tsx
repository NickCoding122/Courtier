import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
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
      <body className={`${spaceGrotesk.variable} bg-courtier text-white font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
