const Lander = ({ getStarted, goToDocumentation }) => {
  return (
    <div className="container mx-auto  bg-black py-16 md:py-24">
      <div className="grid grid-cols-1">
        <div className="my-auto text-center">
          <span className="header text-white text-5xl md:text-6xl block mb-16 md:px-20 lg:px-16 xl:px-32 2xl:px-96">
            Create and manage discount coupons for your online store.
          </span>
          <button
            onClick={getStarted}
            className="btn default-btn  mr-0 md:mr-4"
          >
            Get Started For Free
          </button>
          <button
            onClick={goToDocumentation}
            className="btn default-btn-alt mt-5 md:mt-0  ml-0 md:ml-4"
          >
            View Documentation
          </button>
          {/*<span className="text-gray-300 text-1xl block mt-16 md:px-60 lg:px-60 xl:px-72">*/}
          {/*  Vercel combines the best developer experience with an obsessive*/}
          {/*  focus on end-user performance. Our platform enables frontend teams*/}
          {/*  to do their best work.*/}
          {/*</span>*/}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-16">
            <div>
              <h5 className="text-white text-sm tracking-widest	font-bold uppercase  mb-4">
                Generate Coupons
              </h5>
              <span className="text-gray-400 text-sm font-light block px-6 lg:px-16">
                Vercel combines the best developer experience with an obsessive
                focus on end-user performance. Our platform enables frontend
                teams to do their best work.
              </span>
            </div>
            <div>
              <h5 className="text-white text-sm tracking-widest	font-bold uppercase  mb-4">
                Validate Coupons
              </h5>
              <span className="text-gray-400 text-sm px-6 font-light block lg:px-16">
                Vercel combines the best developer experience with an obsessive
                focus on end-user performance. Our platform enables frontend
                teams to do their best work.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lander;
