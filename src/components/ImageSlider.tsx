import React from "react";

type CatResponse = {
  // todo: get types of the response
};
const ImageSlider = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    const url = "https://cataas.com/cat?json=true";
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
      console.log(data);
    }
  }
  return data ? (
    <div>
      <img src={data.url} />
    </div>
  ) : (
    <div>ImageSlider</div>
  );
};

export default ImageSlider;
