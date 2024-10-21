"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex shadow-md py-4 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href={"/"}>Shopping Card</Link>
      </div>
      <div>
        <ul className="flex gap-6 items-center justify-center m-10">
          <li className="text-lg font-semibold">
            <Link href={"/"}>Products</Link>
          </li>
          <li className="text-lg font-semibold">
            <Link href={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-3">
        <form>
          <Button>Login</Button>
        </form>
      </div>
    </header>
  );
}
