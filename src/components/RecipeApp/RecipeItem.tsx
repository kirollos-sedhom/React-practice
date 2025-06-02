import React from "react";
import { FaHeart } from "react-icons/fa";

export default function RecipeItem({
  title,
  image,
  likes,
}: {
  title: string;
  image: string;
  likes: number;
}) {
  return (
    <div className="border-1 border-slate-300 rounded-xl h-64 w-64 flex flex-col overflow-hidden p-4 relative">
      <img src={image} alt={title} className="rounded-xl h-1/2" />
      <p className="font-bold text-slate-900">{title}</p>
      <span className="flex items-center gap-1 absolute bottom-3">
        <FaHeart />
        <p>{likes}</p>
      </span>
    </div>
  );
}
