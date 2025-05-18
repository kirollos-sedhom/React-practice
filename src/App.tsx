import "./App.css";
import React, { useContext, useEffect } from "react";
import Accordion from "./components/Accordion";
import ColorGenerator from "./components/ColorGenerator";
import ImageSlider from "./components/ImageSlider";
import Products from "./components/Products";
import StarRating from "./components/StarRating";
import TreeView from "./components/TreeView";
import QRGenerator from "./components/QRGenerator";
import DarkMode from "./components/DarkMode";
import Tabs from "./components/Tabs";
import ProgressIndicator from "./components/ProgressIndicator";
import Modal from "./components/Modal";
import PlaceHolderPage from "./components/PlaceHolderPage"; // contains the modal
import FramerMotion from "./components/FramerMotionTutorial/FramerMotion";
import GithubProfileFinder from "./components/GithubProfileFinder";
import TicTacToe from "./components/TicTacToe";
import useFetch from "./hooks/useFetch";
import { FlagsContext } from "./context/FeatureFlags";
function App() {
  const context = useContext(FlagsContext);
  const data = useFetch("https://jsonplaceholder.typicode.com", "todos", {
    limit: "5",
  });
  // console.log(data);
  return (
    <>
      {/* {context?.Accordion && <Accordion />}
      {context?.ColorGenerator && <ColorGenerator />}
      {context?.StarRating && <StarRating />} */}
      {/* <ImageSlider />
      <Products />
      <TreeView />
      <QRGenerator />
      <DarkMode />
      <ProgressIndicator />
      <Tabs />
      <PlaceHolderPage /> */}
      {/* <GithubProfileFinder /> */}
      {/* <TicTacToe /> */}
    </>
  );
}

export default App;
