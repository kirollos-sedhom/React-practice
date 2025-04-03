import React from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

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

  const bulletsArr = Array(5).fill(0);
  // console.log(data[0]);
  console.log(currentIndex);
  console.log("data length:", data?.length);
  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    // automatic slide change every 7 seconds

    let timerId: number | undefined = setTimeout(() => {
      increaseIndex();
      timerId = undefined;
    }, 7000);

    return () => clearTimeout(timerId);
  }, [currentIndex]);

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
    <div className="flex flex-col justify-center items-center select-none relative">
      <div className="flex justify-center items-center">
        <IoMdArrowDropleftCircle
          onClick={decreaseIndex}
          className="text-4xl mx-2 cursor-pointer"
        />
        <div
          style={{ backgroundImage: `url(${data[currentIndex].url})` }}
          className="duration-500 w-[500px] h-[500px] bg-cover bg-center duration-300 ease-in-out"
        />
        <IoMdArrowDroprightCircle
          onClick={increaseIndex}
          className="text-4xl mx-2 cursor-pointer"
        />
      </div>
      <div className="flex gap-2 absolute bottom-5">
        {bulletsArr.map((item, index) => {
          if (index === currentIndex) {
            return <FaCircle key={index} size={16} className="fill-white" />;
          } else {
            return <FaCircle key={index} className="fill-black/50" />;
          }
        })}
      </div>
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
