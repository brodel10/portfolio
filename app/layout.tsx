import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rodel Advincula",
};

const plexMono = IBM_Plex_Mono({
  variable: "--plex-mono",
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--inter",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plexMono.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
