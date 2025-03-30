import React from "react";

type CatResponse = {
  height: number;
  id: string;
  url: string;
  width: number;
};
const ImageSlider = () => {
  const [data, setData] = React.useState<CatResponse[] | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  // console.log(data[0]);
  console.log(currentIndex);
  console.log("data length:", data?.length);
  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    const apiKey = import.meta.env.VITE_CAT_API_KEY;
    const url = `https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=beng&api_key=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const json = await response.json();
      setData(json);
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
    } finally {
      console.log("data is");
      console.log(data);
    }
  }
  return data ? (
    <div>
      <button onClick={decreaseIndex}>prev</button>
      <img
        className="w-[500px] h-[500px] object-cover  transition-all  duration-300 ease-in-out"
        src={data[currentIndex].url}
      />
      <button onClick={increaseIndex}>next</button>
    </div>
  ) : (
    <div>ImageSlider</div>
  );

  function increaseIndex() {
    if (data) {
      if (currentIndex === data?.length - 1) setCurrentIndex(0);
      else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  }
  function decreaseIndex() {
    if (data) {
      if (currentIndex === 0) {
        setCurrentIndex(data.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
  }
};

export default ImageSlider;
