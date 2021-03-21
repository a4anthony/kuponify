import Lander from "../components/Home/Lander";
import Meta from "../components/Meta";

const HomeScreen = ({ history }) => {
  const getStarted = () => {
    history.push("/stores");
  };
  const goToDocumentation = () => {
    history.push("/docs");
  };

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Lander goToDocumentation={goToDocumentation} getStarted={getStarted} />
      </div>
    </>
  );
};

export default HomeScreen;
