import { login } from "../../actions/userActions";
import { useDispatch } from "react-redux";

const NavLinks = ({ user, loading, linkClass }) => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login("user1@example.com", "12345678"));
  };
  return (
    <>
      {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
      <a href="/" className="nav-links-active">
        Home
      </a>
      <a href="/" className={linkClass}>
        Docs
      </a>
      <a href="/" className={linkClass}>
        Pricing
      </a>
      {user && !loading && (
        <>
          <a href="/" className={linkClass}>
            My Kupons
          </a>{" "}
        </>
      )}{" "}
      {!user && !loading && (
        <>
          <a onClick={submitHandler} href="/" className={linkClass}>
            Login
          </a>
          <a href="/" className={linkClass}>
            Register
          </a>
        </>
      )}
    </>
  );
};

export default NavLinks;
