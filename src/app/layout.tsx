import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bai = Bai_Jamjuree({
  subsets: ["latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.css"
        />
      </head>
      <body className={bai.className}>
        {children}
        <Analytics />
        <Script
          src="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js"
          strategy="afterInteractive"
        ></Script>
      </body>
    </html>
  );
}
