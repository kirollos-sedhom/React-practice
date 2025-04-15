import React, { useEffect, useState } from "react";
type Product = {
  id: number;
  title: string;
};
type ApiResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};
const ProgressIndicator = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollLevel, setScrollLevel] = useState(0);
  const [barColor, setBarColor] = useState("green");

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (window.scrollY / maxScroll) * 100;
    setScrollLevel(scrollPercent);
    if (scrollPercent <= 50) {
      const red = Math.round((scrollPercent / 50) * 255); // 0 → 255
      setBarColor(`rgb(${red}, 255, 0)`);
    } else {
      const green = Math.round(255 - ((scrollPercent - 50) / 50) * 255); // 255 → 0
      setBarColor(`rgb(255, ${green}, 0)`);
    }
  }
  async function getData() {
    setLoading(true);
    const url = "https://dummyjson.com/products?limit=100&select=title";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const json: ApiResponse = await response.json();

      setData(json.products);
      //   console.log(json.products);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return data ? (
    <div className="width-cover flex flex-col items-center gap-3 relative">
      <div
        style={{ width: `${scrollLevel}%`, backgroundColor: `${barColor}` }}
        className={`h-4 fixed top-0 left-0 transition-all duration-100`}
      ></div>
      {/* {data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })} */}
    </div>
  ) : (
    <h1>loading</h1>
  );
};

export default ProgressIndicator;
