import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavLinks = ({ user, loading, linkClass }) => {
  // const dispatch = useDispatch();
  //
  const submitHandler = (e) => {
    console.log(e.target.classList);
    e.target.classList.add("nav-links-active");
    // dispatch(login("user1@example.com", "12345678"));
  };
  return (
    <>
      {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
      <NavLink
        exact
        to="/"
        activeClassName="nav-links-active"
        className={linkClass}
      >
        Home
      </NavLink>{" "}
      <NavLink
        to="/documentation"
        activeClassName="nav-links-active"
        className={linkClass}
      >
        Docs
      </NavLink>{" "}
      <NavLink
        to="/pricing"
        activeClassName="nav-links-active"
        className={linkClass}
      >
        Pricing
      </NavLink>
      {user && !loading && (
        <>
          <NavLink
            to="/kupons"
            activeClassName="nav-links-active"
            className={linkClass}
          >
            My Kupons
          </NavLink>
        </>
      )}{" "}
      {!user && !loading && (
        <>
          <NavLink
            to="/login"
            activeClassName="nav-links-active"
            className={linkClass}
          >
            Login
          </NavLink>
          <Link
            to="/register"
            activeClassName="nav-links-active"
            className={linkClass}
          >
            Register
          </Link>
        </>
      )}
    </>
  );
};

export default NavLinks;
