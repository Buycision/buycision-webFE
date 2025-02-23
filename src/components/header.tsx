"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { NavigationMenuDemo } from "./menubar";

export const Header: React.FC = () => {
  return (
    <div className="justify-center flex sticky top-0 bg-white z-50 ">
      <div className="z-10 py-4 w-[1240px] place-self-center flex items-center justify-between font-mono text-sm">
        <Link href={"/"}>
          <h1 className="font-mono text-md font-extrabold">살래말래 👊</h1>
        </Link>
        <NavigationMenuDemo />
        <Button variant={"ghost"} className="border">
          앱 다운로드
        </Button>
      </div>
    </div>
  );
};
