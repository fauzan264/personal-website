import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fauzan - Portfolio",
  description: "Web Portfolio Ahmad Fauzan v2",
  keywords: ["fauzan264", "ahmad fauzan mercu buana"],
  openGraph: {
    title: "Fauzan - Portfolio",
    description: "Web Portfolio Ahmad Fauzan",
    url: "https://fauzan264.netlify.app/",
    siteName: "Fauzan264",
    images: [{ url: "https://fauzan264.netlify.app/logo.png" }],
  },
  verification: {
    google: "0iemWzSjOZ2_90kWS4-qgeI_Iy22N2d8I0XF0iSNKP4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
