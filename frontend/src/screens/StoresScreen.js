import Meta from "../components/Meta";
import AddEditStore from "../components/Store/AddEditStore";
import Modal from "../components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../actions/alertActions";

const StoresScreen = () => {
  const dispatch = useDispatch();
  let [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const addAlert = () => {
    dispatch(setAlert({ msg: "fjfdjnngj" }));
  };
  return (
    <>
      <Meta title={"Stores - Kuponify"} />
      <Modal show={showModal} toggleModal={toggleModal}>
        <AddEditStore toggleModal={toggleModal} />
      </Modal>
      <div className="flex relative items-center min-h-screen-90 bg-black">
        <button
          onClick={toggleModal}
          className="btn default-btn absolute right-4 md:right-32 top-8"
        >
          Add Store
        </button>
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto my-10 bg-white py-5 rounded-none md:rounded-md shadow-sm">
            <div className="mx-5 my-7 md:mx-7 text-center">
              <h1 className="font-semibold text-xl">
                You currently have no store added
              </h1>
              <button onClick={toggleModal} className="btn default-btn mt-7">
                Add Store
              </button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={addAlert} className="btn default-btn">
        Add alert
      </button>
    </>
  );
};

export default StoresScreen;
