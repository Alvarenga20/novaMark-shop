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

const BASE_URL = "/products.json";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(BASE_URL);
  return await response.json();
}

/** Fetch a single product by ID */
export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const response = await fetch(BASE_URL);
    const products: Product[] = await response.json();
    return products.find((product) => product.id === Number(id)) || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
