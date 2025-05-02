import "./App.css";
import React from "react";
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

function App() {
  return (
    <>
      {/* <Accordion />
      <ColorGenerator />
      <StarRating />
      <ImageSlider />
      <Products />
      <TreeView />
      <QRGenerator />
      <DarkMode />
      <ProgressIndicator />
      <Tabs />
      <PlaceHolderPage /> */}
      {/* <GithubProfileFinder /> */}
      <TicTacToe />
    </>
  );
}

export default App;
