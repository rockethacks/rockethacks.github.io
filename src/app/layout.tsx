import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const mlh =
  "https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-yellow.svg";

export const metadata: Metadata = {
  title: "Rocket Hacks",
  description: "Created by rocket hacks team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          id="mlh-trust-badge"
          className="block max-w-[100px] min-w-[60px] fixed right-[12px] sm:right-[28px] top-0 w-[10%] z-20 hidden lg:block"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=yellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={mlh}
            alt="Major League Hacking 2025 Hackathon Season"
            width={100}
            height={100}
          />
        </a>
        {children}
      </body>
    </html>
  );
}
