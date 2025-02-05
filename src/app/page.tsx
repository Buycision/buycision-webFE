"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useProducts from "@/hooks/useProducts";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-21256.jpg",
    state: "sell",
    price: "140,000",
  },
];

export default function Home() {
  const router = useRouter();

  // const { data: products } = useProducts();

  return (
    <main className="flex min-h-screen flex-col items-center py-10">
      <div className="flex flex-wrap gap-10 w-3/5">
        {products &&
          products.map((product) => {
            return (
              <button
                key={product.id}
                onClick={() => {
                  router.push(`/board/${product.id}`);
                }}
                className="text-start justify-start group"
              >
                <Card
                  key={product.id}
                  className="w-[230px] h-[320px] font-mono"
                >
                  <CardHeader>
                    <div className="grid w-full items-center gap-4 rounded-md">
                      <div className="flex flex-col space-y-1.5 rounded-md w-[230px] overflow-hidden">
                        <Image
                          src={product.image}
                          width={300}
                          height={300}
                          alt={""}
                          className=" group-hover:scale-105 transition-transform ease-in-out duration-300"
                        />
                      </div>
                    </div>
                    <CardTitle>{product.name}</CardTitle>
                    <CardContent>{product.price}원</CardContent>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <CardDescription>{product.location}</CardDescription>
                    {/* {product.state === "Sell" && product.owner !== account && (
                    <Button
                      onClick={() => router.push(`/products/${product.id}`)}
                    >
                      ${product.price}XRP Buy
                    </Button>
                  )} */}
                  </CardFooter>
                </Card>
              </button>
            );
          })}
      </div>
    </main>
  );
}
