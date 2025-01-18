import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#030c1b] text-white text-base sticky top-0 z-20">
      {/* Logo Link */}
      <div className="container px-5 xl:px-96 flex space-x-10 items-center h-[3.8rem] mr-10">
        <div className="font-bold">
          <Link href="https://www.rockethacks.org">
            <Image
              src="/assets/name-logo.svg"
              alt="RocketHacks Logo"
              width={12}
              height={12}
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-10 hidden xl:block">
          <Link href="#about" style={{ scrollBehavior: "smooth" }}>
            About Us
          </Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/sponsor">Sponsor</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
