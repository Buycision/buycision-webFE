"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useProduct from "@/hooks/useProduct";
import Image from "next/image";
import { useParams } from "next/navigation";

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
];

export default function Home() {
  const params = useParams();
  const { id } = params as { id: string };
  //   const { data: product } = useProduct(id);
  const product = products;

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      {product &&
        products.map((product) => {
          return (
            <div
              key={product.id}
              className="z-10 w-full max-w-md font-mono text-white space-y-5"
            >
              <Image src={product.image} width={500} height={500} alt={""} />
              <Badge key={product.id} variant="secondary" className="text-2xl">
                {product.state}
              </Badge>
              <h1 className="text-2xl font-extrabold">{product.name}</h1>
              <h1>{product.description}</h1>

              <div className="space-y-5">
                <h1>Price : {product.price} ₩</h1>

                {/* {product?.state == "Sell" && product?.owner !== account && (
              <div className="flex space-x-4">
                <Button>Buy</Button>
              </div>
            )}

            {product?.state === "Sell" && product?.owner === account && (
              <div className="flex space-x-4">
                <Button>Delete</Button>
              </div>
            )}
            {product?.state === "Reserved" && product?.buyer === account && (
              <div className="flex space-x-4">
                <Button>Approve</Button>
              </div>
            )}
            {product?.state === "Approve" && product?.owner === account && (
              <div className="flex space-x-4">
                <Button>Receive</Button>
              </div>
            )} */}
              </div>
            </div>
          );
        })}
    </main>
  );
}
