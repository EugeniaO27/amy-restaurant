import React from "react";
import Menu from "../menu/Menu";
import Link from "next/link";
import CartIcon from "../cartIcon/CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <header>
      <nav>
        <div
          className="h-12 md:h-24 text-red-500 p-4 flex items-center justify-between border-b-2
                    border-b-red-500 lg:px-20 xl:px-40">
          <div className="hidden md:flex gap-4 uppercase flex-1">
            <Link href="/">Home</Link>
            <Link href="/menu">menu</Link>
            <Link href="/contact">contact</Link>
          </div>
          {/*LOGO */}
          <div className="text-xl md:font-bold flex-1 md:text-center">
            <Link href="/">MASSIMO</Link>
          </div>
          {/*mobile menu */}
          <div className="md:hidden">
            <Menu />
          </div>
          <div className="hidden md:flex gap-4 uppercase items-center justify-end flex-1">
            <div className="md:absolute top-3 right-2 lg:static flex gap-2 items-center cursor-pointer bg-orange-300 px-1 rounded-md">
              <Image src="/phone.png" alt="" width={20} height={20} />
              <span>123 456 78</span>
            </div>
            {!user ? (
              <Link href="/login">Login</Link>
            ) : (
              <Link href="/orders">Orders</Link>
            )}
            <CartIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
