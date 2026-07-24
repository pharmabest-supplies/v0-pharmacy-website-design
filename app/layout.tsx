import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pharmabest Supplies | Pharmacy Thermal Labels, Receipts & Printers — Ontario",
  description:
    "Pharmabest Supplies provides high-quality thermal labels, receipt rolls, thermal printers, and accessories to pharmacies across Ontario. Best price guaranteed, fast shipping, free tech support.",
  keywords: [
    "pharmacy supplies",
    "thermal labels",
    "thermal printers",
    "thermal receipt rolls",
    "custom pharmacy labels",
    "Pharmasave labels",
    "Toronto",
    "Ontario",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#202324]">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
