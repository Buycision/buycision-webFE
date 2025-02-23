"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { SearchForm } from "@/components/searchbar";
import { GPSBadge } from "@/components/gpsbadge";
import { BreadcrumbDemo } from "@/components/breadcrumb";
import { Sidebar } from "@/components/sidebar";

const products = [
  {
    id: 1,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 2,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 3,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 4,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 5,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 6,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 7,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 8,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 9,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 10,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 11,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 12,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 13,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 14,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 15,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 16,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 17,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 18,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 19,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
  {
    id: 20,
    name: "제 친구 현성이 맥북 팔아요",
    description: "제 친구 맥북 프로인데 좀 구린 거 같아서 제가 팔려구요",
    location: "성남시 중원구",
    image:
      "https://image.zdnet.co.kr/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg",
    state: "sell",
    price: "140,000",
  },
];

export default function Home() {
  const router = useRouter();

  // const { data: products } = useProducts();

  return (
    <main className="flex min-h-screen flex-col items-center w-[1240px] place-self-center">
      <div className="flex flex-wrap gap-4 min-w-full">
        <div className="min-w-full justify-between flex gap-3">
          <GPSBadge />
          <SearchForm />
        </div>
        <div className="min-w-full mb-6">
          <BreadcrumbDemo />
          <div className="text-[28px] font-bold mt-2">
            서울특별시 성동구 중고거래
          </div>
        </div>
        <div className="flex gap-6 grid-cols-2">
          <Sidebar />
          <div className="flex flex-wrap gap-4 w-[970px] justify-start">
            {products &&
              products.map((product) => {
                return (
                  <button
                    key={product.id}
                    onClick={() => {
                      router.push(`/board/${product.id}`);
                    }}
                    className="text-start justify-start group mb-7"
                  >
                    <Card key={product.id} className="w-[230px] font-mono">
                      <CardHeader>
                        <div className="grid w-full items-center gap-4 rounded-md">
                          <div className="rounded-md overflow-hidden">
                            <Image
                              src={product.image}
                              width={300}
                              height={300}
                              alt=""
                              className="group-hover:scale-105 transition-transform ease-in-out duration-300 object-cover w-[230px] h-[230px]"
                            />
                          </div>
                        </div>
                        <CardTitle>{product.name}</CardTitle>
                        <CardContent>{product.price}원</CardContent>
                      </CardHeader>
                      <CardFooter className="flex justify-between">
                        <CardDescription>{product.location}</CardDescription>
                      </CardFooter>
                    </Card>
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
