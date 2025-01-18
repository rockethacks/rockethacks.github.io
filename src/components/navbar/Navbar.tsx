import Link from "next/link";
import RocketHacks from "../../../public/assets/name-logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-[#030c1b] text-white text-base sticky top-0 z-20">
      {/* Logo Link */}
      <div className="container ml-10 xl:ml-80 mt-3 mb-3 px-4 py-3 flex space-x-10 items-center h-[3.8rem] mr-10">
        <div className="font-bold">
          <Link href="https://www.rockethacks.org">
            <RocketHacks className="h-16 w-auto" />
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
