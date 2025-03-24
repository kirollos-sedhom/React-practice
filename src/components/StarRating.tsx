import React from "react";
import { FaStar } from "react-icons/fa";

/*
1- get empty star and filled star components
2- create empty array of 5 elements.
3- for each element in array, render an empty star with index as id
4- create a clicked state. 
5- when clicking a star, set the clicked state with the star id
6- update rendering stars, to render colored stars until the id.
*/
const StarRating = () => {
  const [selected, setSelected] = React.useState<number>(-1);
  console.log(selected);
  const starsArray = Array(5).fill(0);

  function handleStarClick(starId: number) {
    setSelected(starId);
  }
  return (
    <div className="container flex justify-center p-4">
      {starsArray.map((star, index) => {
        if (index <= selected) {
          return (
            <FaStar
              key={index}
              id={index.toString()}
              className="text-3xl fill-yellow-300"
              onClick={() => handleStarClick(index)}
            />
          );
        } else {
          return (
            <FaStar
              key={index}
              id={index.toString()}
              className="text-3xl "
              onClick={() => handleStarClick(index)}
            />
          );
        }
      })}
    </div>
  );
};

export default StarRating;
