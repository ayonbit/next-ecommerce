"use client";
//Dependencies
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";
//NavbarIcons
const NavbarIcons = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);
  // Temporary
  const isLoggedIn = false;

  //profile handler
  const handelProfile = () => {
    if (isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center gap-4  xl:gap-6 relative ">
      <Image
        src={"/profile.png"}
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handelProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-ayon text-sm font-semibold bg-slate-50  shadow-[0_3px-10px_rgb(0,0,0,0.2)] z-20">
          <Link href={"/"}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src={"/notification.png"}
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src={"/cart.png"}
          alt="cart"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-ayon rounded-full text-white text-sm flex items-center justify-center">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavbarIcons;
