// import products from "../products";
import Link from "next/link";
import Image from "next/image";
import { useProducts } from "../hooks/products";
import Loader from "./loader";
import { useEffect } from "react";

export default function ProductList() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <Loader />;
  if (isError) return <div>error</div>;

  const products = data.result.data;

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Object.keys(products).map((key) => {
            const product = products[key];
            return (
              <Link
                key={key}
                href={"/products/[key]"}
                as={`/products/${product.id}`}
              >
                <div className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-400 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.images[0]}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-contain group-hover:opacity-75 h-60 bg-white"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    &#8377;{product.default_price.unit_amount / 100}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
