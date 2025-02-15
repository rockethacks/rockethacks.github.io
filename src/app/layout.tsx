import type { Metadata } from "next";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ weight: "400", subsets: ["latin"] });

const mlh =
  "https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-blue.svg";

export const metadata: Metadata = {
  title: "Rocket Hacks",
  description:
    "RocketHacks is a 24-hour Hackathon hosted by The University of Toledo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className}`}>
        <a
          id="mlh-trust-badge"
          className="z-30 fixed right-8 top-0 hidden lg:block"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=yellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={mlh}
            alt="Major League Hacking 2025"
            height={100}
            width={100}
          />
        </a>
        {children}
      </body>
    </html>
  );
}
