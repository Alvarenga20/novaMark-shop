"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../component/Navbar";
import { Footer } from "../../component/Footer";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "../../utils/api";

import FurnitureIcon from "../../assets/icons/FurnitureIcon";
import MiscellaneousIcon from "@/app/assets/icons/MiscellaneousIcon";
import SmartphoneIcon from "@/app/assets/icons/SmartphoneIcon";
import ClothesIcon from "@/app/assets/icons/ClothesIcon";
import ShoesIcon from "@/app/assets/icons/ShoesIcon";
import PlusIcon from "@/app/assets/icons/PlusIcon";
import SearchIcon from "@/app/assets/icons/SearchIcon";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await fetchProducts();
        setProducts(products);
        setFilteredProducts(products);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    }
    loadProducts();
  }, []);

  // Filter products by category or search bar
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category.name === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <main className="max-w-7xl pt-36 mx-auto p-6 space-y-8">
        {/* Search bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-4 pl-12 text-sm bg-white dark:border dark:bg-gray-800 dark:text-white rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300">
              <SearchIcon />
            </div>
          </div>
        </div>

        {/* category filter */}
        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-6">
          <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
            {[
              "All",
              "Electronics",
              "Furniture",
              "Shoes",
              "Clothes",
              "Miscellaneous",
            ].map((category) => (
              <button
                key={category}
                className={`flex items-center space-x-2 px-6 py-3 text-sm md:text-base font-semibold transition-transform duration-300 rounded-md hover:scale-105 focus:outline-none ${
                  selectedCategory === category
                    ? "bg-white text-blue-600 shadow-lg scale-105 dark:bg-gray-700 dark:text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-blue-600 dark:hover:text-gray-900"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "All" && <PlusIcon />}
                {category === "Electronics" && <SmartphoneIcon />}
                {category === "Furniture" && <FurnitureIcon />}
                {category === "Shoes" && <ShoesIcon />}
                {category === "Miscellaneous" && <MiscellaneousIcon />}
                {category === "Clothes" && <ClothesIcon />}
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-white"
            >
              {product.images.length > 0 && (
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="rounded-md mb-4 object-cover w-full"
                />
              )}
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {product.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                {product.description.substring(0, 25)}...{" "}
                <Link
                  href={`/pages/products/${product.id}`}
                  className="text-blue-500 underline dark:text-blue-400"
                >
                  Read More
                </Link>
              </p>
              <div className="max-w-fit text-sm font-semibold bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-1 mb-4">
                {product.category.name}
              </div>
              <div className="flex justify-between w-full items-center">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Price
                  </p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${product.price}
                  </p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-400">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
