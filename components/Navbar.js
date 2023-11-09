import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[6%] bg-gray-100 w-full items-center flex justify-between mx-auto px-20">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/LOGO-LIGHT.svg" alt="logo" height={40} width={40} />
        <p className="text-gray-900 text-xl">Codex</p>
      </Link>
      <div className="flex gap-8">
        <Button className="text-sm" variant="outline" href="/Signup">
          Sign Up
        </Button>
        <Button className="text-sm" href="/login">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
