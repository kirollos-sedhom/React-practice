import React from "react";
import Modal from "./Modal";
const PlaceHolderPage = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => setShowModal((prev) => !prev)}
          className="px-2 py-1 rounded-md bg-blue-300"
        >
          show modal
        </button>
        <input type="text" className="bg-white" placeholder="something here" />
        <input
          type="text"
          className="bg-white"
          placeholder="something here 2"
        />
        <input
          type="text"
          className="bg-white"
          placeholder="something here 3"
        />
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        header="this is a header"
        body="this is the body"
        footer="this is the footer"
      />
    </div>
  );
};

export default PlaceHolderPage;
