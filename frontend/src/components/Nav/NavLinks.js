import { NavLink } from "react-router-dom";

const NavLinks = ({ user, loading, linkClass }) => {
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
          <NavLink
            to="/register"
            activeClassName="nav-links-active"
            className={linkClass}
          >
            Register
          </NavLink>
        </>
      )}
    </>
  );
};

export default NavLinks;
