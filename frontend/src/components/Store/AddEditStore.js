import { useState } from "react";

const AddEditStore = ({ toggleModal }) => {
  const [store, setStore] = useState("");

  return (
    <>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <form action="">
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
              value={store}
              onChange={(e) => setStore(e.target.value)}
            />
            {/*{nameError && <span className="form-error">{nameError}</span>}*/}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="name" className="label">
              Brief Description
            </label>
            <textarea
              name="name"
              id="name"
              className="ta10em"
              placeholder="Enter a brief description of your store"
              required
              value={store}
              onChange={(e) => setStore(e.target.value)}
            />
            {/*{nameError && <span className="form-error">{nameError}</span>}*/}
          </div>
        </form>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Add Store
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
