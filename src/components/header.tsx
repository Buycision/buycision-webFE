"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <div className="z-10 w-full px-10 py-4 flex items-center justify-between font-mono text-sm">
        <Link href={"/"}>
          <h1 className="font-mono text-md font-extrabold">당근빳따쥐~</h1>
        </Link>
        <Button
          variant="ghost"
          onClick={() => {
            router.push("/sell");
          }}
        >
          중고거래
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            router.push("/charge");
          }}
        >
          부동산
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            router.push("/my-buy");
          }}
        >
          중고차
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            router.push("/my-sell");
          }}
        >
          알바
        </Button>
      </div>
    </div>
  );
};
