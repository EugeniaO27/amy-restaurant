import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" h-12 md:h-24 p-4 lg:px-20 xl:px-40 ">
      <div className=" text-xl flex items-center justify-between  text-red-500">
        <Link className="font-bold" href="/">
          MASSIMO
        </Link>
        <p>© ALL RIGHT RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
