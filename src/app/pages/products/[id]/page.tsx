"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchProductById } from "../../../utils/api";
import Image from "next/image";
import { Navbar } from "../../../component/Navbar";
import { Footer } from "../../../component/Footer";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: { name: string };
}

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      // console.log("Fetching product with ID:", id);
      async function loadProduct() {
        try {
          const productData = await fetchProductById(id);
          // console.log("Product data:", productData);
          if (productData && productData.images?.length > 0) {
            setProduct(productData);
            setMainImage(productData.images[0]);
          }
        } catch (error) {
          console.error("Error loading product:", error);
        }
      }
      loadProduct();
    }
  }, [id]);

  const handleBackClick = () => {
    router.back();
  };

  const handleAddToCart = () => {
    // console.log(`Product ${product?.title} added to cart.`);
  };

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <main className="max-w-7xl mx-auto p-6">
          <p className="text-center text-red-500 dark:text-red-400">
            Product not found.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <main className="max-w-7xl mx-auto  p-6">
        <div className="bg-white  mt-20 dark:bg-gray-800 shadow-md border border-gray-500 dark:border-gray-700 rounded-lg p-4">
          <button
            onClick={handleBackClick}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4"
          >
            &larr; Back
          </button>
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            {product.title}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-1 max-w-fit">
            Category:{" "}
            <span className="font-semibold">{product.category.name}</span>
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-300">
            {product.description}
          </p>
          <p className="text-lg font-bold text-green-600 mb-4 dark:text-green-400">
            Price: ${product.price}
          </p>

          {/* Main Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group border-2 border-blue-600 rounded-lg">
              <Image
                src={mainImage || product.images[0]}
                alt={product.title}
                width={600}
                height={600}
                priority
                className="object-cover rounded-md transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className={`object-cover rounded-md transition-transform duration-300 transform ${
                    mainImage === image ? "scale-110" : "scale-100"
                  } group-hover:scale-110`}
                />
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
