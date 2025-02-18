"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { NavigationMenuDemo } from "./menubar";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="justify-center flex">
      <div className="z-10 w-11/12 px-10 py-4 flex items-center justify-between font-mono text-sm">
        <Link href={"/"}>
          <h1 className="font-mono text-md font-extrabold">당근빳따쥐~</h1>
        </Link>
        <NavigationMenuDemo />
        <Button variant={"ghost"}>앱 다운로드</Button>
      </div>
    </div>
  );
};
