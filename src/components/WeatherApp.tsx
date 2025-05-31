import React, { useEffect, useState } from "react";

// type weatherResponse = {
//   main: {
//     temp: number;
//     feels_like: number;
//     temp_min: number;
//     temp_max: number;
//     humidity: number;
//   };
//   name: string;
//   weather: [
//     {
//       // this is an array that contains an object
//       main: string;
//       description: string;
//     }
//   ];
//   wind: { speed: number };
// };

type weatherResponse = {
  current: {
    condition: {
      text: string;
    };
    humidity: number;
    temp_c: number;
    wind_kph: number;
  };
  location: {
    name: string;
  };
};
export default function WeatherApp() {
  const [data, setData] = useState<weatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  // input field state
  const [inputValue, setInputValue] = useState<string>("");
  const currentDate = new Date();

  async function getData(city?: string) {
    const token = import.meta.env.VITE_WEATHER_TOKEN2;

    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${token}`;
    let url = `http://api.weatherapi.com/v1/current.json?q=${latitude},${longitude}&key=${token}`;
    if (city) {
      url = `http://api.weatherapi.com/v1/current.json?q=${city}&key=${token}`;
    }

    try {
      setIsLoading(true);
      setError("");
      const response = await fetch(url);
      if (!response.ok) {
        console.log("response error");
      }
      const json = await response.json();
      if (json.error) {
        setError(json.error.message); // Display "No matching location found"
        setData(null); // Clear data if invalid
        return;
      }
      setData(json);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setData(null);
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleInputKeyPressed(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      // change country logic
      console.log("searching...");
      getData(inputValue);
      setInputValue("");
    } else {
      return;
    }
  }

  useEffect(() => {
    // set user Location
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      setLatitude(lat);
      const lon = position.coords.longitude;
      setLongitude(lon);
      console.log("current lat and lon:", lat, lon);
    });
  }, []);

  useEffect(() => {
    getData();
  }, [latitude, longitude]);
  useEffect(() => {
    console.log("found this data:", data);
  }, [data]);
  return isLoading ? (
    <div>loading</div>
  ) : (
    <div className="bg-[url('/public/weather/clear.jpg')] h-screen bg-cover flex flex-col items-center justify-center relative text-white font-bold">
      {error && <p className="text-red-500 absolute top-20">{error}</p>}

      <div className="location absolute top-10 flex flex-col items-center justify-center">
        <h2>{data?.location.name}</h2>

        <input
          type="text"
          className="focus:outline-none focus:border-2 rounded-md px-2 placeholder:text-center "
          placeholder="different location?"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyUp={handleInputKeyPressed}
        />
      </div>

      <div className="info bg-white/10 backdrop-blur-md backdrop-brightness-75 rounded-md overflow-hidden flex flex-col items-center justify-center p-2 text-xl">
        <p>
          {currentDate.getDate()}/{currentDate.getMonth() + 1}/
          {currentDate.getFullYear()}
        </p>
        <p>{data?.current.temp_c}</p>
        <div className="flex gap-4">
          <p>wind speed: {data?.current.wind_kph}</p>
          <p>humidity: {data?.current.humidity}</p>
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
