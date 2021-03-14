const FormContainer = ({ title, children }) => {
  return (
    <>
      <div className="flex items-center min-h-screen bg-black">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white py-5 rounded-none md:rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-2 text-xl tracking-widest uppercase font-semibold text-gray-700 dark:text-gray-200">
                {title}
              </h1>
            </div>
            <div className="mx-5 my-7 md:mx-7">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContainer;
