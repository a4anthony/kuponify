import Meta from "../components/Meta";
import AddEditStore from "../components/Store/AddEditStore";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { getStores } from "../actions/storeActions";
import Store from "../components/Store/Store";

const spinner = <FontAwesomeIcon className={"fa-spin"} icon={faCircleNotch} />;
const StoresScreen = () => {
  const dispatch = useDispatch();
  let [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getStoreInfo = useSelector((state) => state.getStores);
  const { stores, loading, error, success } = getStoreInfo;

  useEffect(() => {
    if (loading) {
      dispatch(getStores());
    }
  }, [loading]);

  return (
    <>
      <Meta title={"Stores - Kuponify"} />
      <Modal show={showModal} toggleModal={toggleModal}>
        <AddEditStore toggleModal={toggleModal} />
      </Modal>
      <div className="flex relative items-center min-h-screen-90 bg-black">
        <button
          onClick={toggleModal}
          className="btn default-btn absolute right-4 md:right-12 top-8"
        >
          Add Store
        </button>
        <div className="container mx-auto">
          <div className="max-w-xl  mt-10 ml-4 md:mx-auto">
            <h1 className="text-white font-bold text-xl">
              Stores ({success ? stores.stores.length : 0})
            </h1>
          </div>
          <div className="max-w-xl mx-auto my-10 bg-white py-5 rounded-none md:rounded-md shadow-sm">
            <div className="mx-5 my-7 md:mx-7 text-center">
              {loading ? (
                <span className="">{spinner}</span>
              ) : stores.stores.length === 0 ? (
                <>
                  <h1 className="font-semibold text-xl">
                    You currently have no store added
                  </h1>
                  <button
                    onClick={toggleModal}
                    className="btn default-btn mt-7"
                  >
                    Add Store
                  </button>
                </>
              ) : (
                stores.stores.map((store) => <Store store={store} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoresScreen;
