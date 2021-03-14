import Lander from "../components/Home/Lander";

const HomeScreen = ({ history }) => {
  const getStarted = () => {
    history.push("/get-started");
  };
  const goToDocumentation = () => {
    history.push("/documentation");
  };

  return (
    <>
      <div className="min-h-screen">
        <Lander goToDocumentation={goToDocumentation} getStarted={getStarted} />
      </div>
    </>
  );
};

export default HomeScreen;
