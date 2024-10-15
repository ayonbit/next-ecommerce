//Dependencies
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import NavbarIcons from "./NavbarIcons";
import SearchBar from "./SearchBar";
//Navbar
const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative ">
      {/* MOBILE */}
      <div className=" h-full flex items-center justify-between md:hidden">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide ">AYON</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden md:flex justify-between items-center h-full gap-8">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide ">AYON</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex justify-between items-center gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
