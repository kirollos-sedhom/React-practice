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

function App() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {/* <Accordion /> */}
      {/* <ColorGenerator /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider /> */}
      {/* <Products /> */}
      {/* <TreeView /> */}
      {/* <QRGenerator /> */}
      {/* <DarkMode /> */}
      <ProgressIndicator />
      {/* <Tabs /> */}
      <div className="w-full flex justify-center">
        <button
          onClick={() => setShowModal((prev) => !prev)}
          className="px-2 py-1 rounded-md bg-blue-300"
        >
          show modal
        </button>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        header="this is a header"
        body="this is the body"
        footer="this is the footer"
      />
    </>
  );
}

export default App;
