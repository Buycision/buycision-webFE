"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useProduct from "@/hooks/useProduct";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  const { id } = params as { id: string };
  //   const { data: product } = useProduct(id);
  const product = undefined;

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      {product && (
        <div className="z-10 w-full max-w-md font-mono text-white space-y-5">
          <Image src={product.image} width={500} height={500} alt={""} />
          <Badge variant="secondary" className="text-2xl">
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
      )}
    </main>
  );
}
