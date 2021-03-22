import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStore, getStores } from "../../actions/storeActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { setAlert } from "../../actions/alertActions";

const spinner = <FontAwesomeIcon className={"fa-spin"} icon={faCircleNotch} />;

const AddEditStore = ({ toggleModal }) => {
  const [name, setName] = useState("");
  const [briefDescription, setBriefDescription] = useState("");
  const dispatch = useDispatch();

  const addStoreInfo = useSelector((state) => state.addStore);
  const { stores, loading, error, success } = addStoreInfo;

  const [nameError, setNameError] = useState("");
  const [briefDescriptionError, setBriefDescriptionError] = useState("");

  useEffect(() => {
    if (!loading && error && error.store.name && error.store.name.message) {
      setNameError(error.store.name.message);
    } else {
      setNameError("");
    }
    if (
      !loading &&
      error &&
      error.store.briefDescription &&
      error.store.briefDescription.message
    ) {
      setBriefDescriptionError(error.store.briefDescription.message);
    } else {
      setBriefDescriptionError("");
    }
    if (success) {
      dispatch(getStores());
      toggleModal();
      setTimeout(function () {
        dispatch(setAlert({ msg: "fjfdjnngj" }));
      }, 500);
    }
  }, [dispatch, stores, error, loading, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addStore({
        name: name,
        briefDescription: briefDescription,
      })
    );
  };
  return (
    <>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <form onSubmit={submitHandler}>
          <div className="mb-7 relative">
            <label htmlFor="name" className="label">
              Store Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your store name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span className="form-error">{nameError}</span>}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="briefDescription" className="label">
              Brief Description
            </label>
            <textarea
              name="briefDescription"
              id="briefDescription"
              className="ta10em"
              placeholder="Enter a brief description of your store"
              required
              value={briefDescription}
              onChange={(e) => setBriefDescription(e.target.value)}
            />
            {briefDescriptionError && (
              <span className="form-error" style={{ top: "13em" }}>
                {briefDescriptionError}
              </span>
            )}
          </div>
        </form>
      </div>
      <div className="bg-gray-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 sm:flex sm:flex-row-reverse">
        <button
          type="submit"
          onClick={submitHandler}
          className="w-full md:w-32 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3  sm:text-sm"
        >
          {loading ? (
            <span className="">{spinner}</span>
          ) : (
            <span>Add Store</span>
          )}
        </button>
        <button
          onClick={toggleModal}
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default AddEditStore;
