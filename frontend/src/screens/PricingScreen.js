import Meta from "../components/Meta";

const PricingScreen = () => {
  return (
    <>
      <Meta title={"Pricing - Kuponify"} />
      <div className="flex items-center min-h-screen-90 bg-black">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white py-5 rounded-none md:rounded-md shadow-sm">
            <div className="mx-5 my-7 md:mx-7 text-center">
              <h1 className="font-semibold text-xl">
                This application is currently free. <br /> <br />
                Enjoy!!!
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="text-white">jnfndnf</div>*/}
    </>
  );
};

export default PricingScreen;
