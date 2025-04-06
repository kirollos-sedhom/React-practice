import React from "react";
type Product = {
  id: number;
  description: string;
  images: string[];
  price: number;
  title: string;
};
type ApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
const Products = () => {
  const [data, setData] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getData();
  }, []);
  React.useEffect(() => {
    console.log(data);
  }, [data]);
  async function getData() {
    setIsLoading(true);
    try {
      const url = "https://dummyjson.com/products?limit=50";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const json: ApiResponse = await response.json();
      setData(json.products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        console.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }
  return data.length > 0 ? (
    <div>
      {data.map((item, index) => {
        return (
          <img
            className="w-[300px]"
            src={item.images[0]}
            alt={item.description}
          />
        );
      })}
    </div>
  ) : (
    <div>Products</div>
  );
};

export default Products;
