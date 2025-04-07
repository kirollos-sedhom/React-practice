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
      const url = "https://dummyjson.com/products?limit=10";
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
      <div className="items flex flex-wrap">
        {data.map((item, index) => {
          return (
            <Product
              images={item.images}
              description={item.description}
              title={item.title}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>

      <button className="bg-zinc-300 p-2 rounded-md font-medium mx-auto my-6 block cursor-pointer">
        load more
      </button>
    </div>
  ) : (
    <div>Products</div>
  );
};

export default Products;

function Product(props: Product) {
  return (
    <div className="w-7/10 sm:w-[300px] md:w-[320px] mx-auto">
      <img
        src={props.images[0]}
        className="max-h-64 mx-auto"
        alt={props.description}
      />
      <div className="p-4">
        <p>{props.title}</p>
        <p>{props.price}</p>
        <button className="bg-yellow-300 px-2 py-1 rounded-md my-2 cursor-pointer hover:bg-yellow-400">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
