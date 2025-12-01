import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

const aktivEx = localFont({
  src: [
    {
      path: "../public/fonts/aktiv-grotesk-extended/AktivGroteskEx-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "COURTIER",
  description: "A private indoor padel & leisure club in London.",
  icons: {
    icon: "/courtier_flavicon.png",
    shortcut: "/courtier_flavicon.png",
    apple: "/courtier_flavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={aktivEx.className}>
        <Navbar />
        <div className="page-container">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
