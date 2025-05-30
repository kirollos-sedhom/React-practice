import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

type weatherResponse = {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  name: string;
  weather: [
    {
      // this is an array that contains an object
      main: string;
      description: string;
    }
  ];
  wind: { speed: number };
};
export default function WeatherApp() {
  const [data, setData] = useState<weatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [location, setLocation] = useState<string | null>(null);

  // input field state
  const [inputValue, setInputValue] = useState<string>("");
  const currentDate = new Date();

  async function getData() {
    const token = import.meta.env.VITE_WEATHER_TOKEN;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${token}`;
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        console.log("response error");
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  // useEffect(() => {
  //   // set user Location
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const lat = position.coords.latitude;
  //     setLatitude(lat);
  //     const lon = position.coords.longitude;
  //     setLongitude(lon);
  //   });

  //   getData();
  // }, []);
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return isLoading ? (
    <div>loading</div>
  ) : (
    <div className="bg-[url('/public/weather/clear.jpg')] h-screen bg-cover flex flex-col items-center justify-center relative text-white font-bold">
      {/* <h2>{data?.name}</h2>
      <p>
        {currentDate.getDay()}/{currentDate.getMonth()}/
        {currentDate.getFullYear()}
      </p>
      <p>{data?.main.temp}</p>
      <div className="flex gap-4">
        <p>wind speed: {data?.wind.speed}</p>
        <p>humidity: {data?.main.humidity}</p>
      </div> */}
      <h2 className="absolute top-10">Bilbeis</h2>
      <div className="info bg-white/10 backdrop-blur-md backdrop-brightness-75 rounded-md overflow-hidden flex flex-col items-center justify-center p-2 text-xl">
        <p>
          {currentDate.getDay()}/{currentDate.getMonth()}/
          {currentDate.getFullYear()}
        </p>
        <p>32.39 C</p>
        <div className="flex gap-4">
          <p>wind speed: 6.85</p>
          <p>humidity: 20</p>
        </div>
      </div>
    </div>
  );
}
/*
todo:
current city name
current date
tempretaure in celsius
wind speed bottom left
humidity bottom right
stretch goal: show temperature for next 5 days

add search bar at the top to change current city
*/
