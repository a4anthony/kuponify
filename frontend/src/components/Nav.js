import { useEffect, useRef, useState } from "react";
import MenuDropdown from "./Nav/MenuDropdown";
import UserDropdownMenu from "./Nav/UserDropdownMenu";
import NavLinks from "./Nav/NavLinks";
import NavToggle from "./Nav/NavToggle";
import { useSelector } from "react-redux";
import Logo from "./Logo";

const Nav = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const userInfo = useSelector((state) => state.userInfo);
  const { loading, user } = userInfo;

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };
  const hideUserMenu = (showUserMenu) => {
    if (showUserMenu) {
      setShowUserMenu(!showUserMenu);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const userMenuButtonRef = useRef(null);

  useEffect(() => {
    console.log(user);
    console.log(loading);
  }, [loading, user]); // <-- here put the parameter to listen

  return (
    // This example requires Tailwind CSS v2.0
    <nav
      className="bg-black sticky top-0 z-10"
      style={{ borderBottom: "1px solid", borderColor: "rgb(43 42 42)" }}
    >
      <div className="container">
        <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/*Mobile menu button*/}
              <NavToggle toggleMenu={toggleMenu} />
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Logo />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <NavLinks
                    user={user}
                    loading={loading}
                    linkClass={"nav-links-bg"}
                  />
                </div>
              </div>{" "}
              {/*Profile dropdown*/}
              {user && !loading && (
                <div className="ml-5 relative">
                  <div>
                    <button
                      ref={userMenuButtonRef}
                      type="button"
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => toggleUserMenu(!showUserMenu)}
                    >
                      <span className="sr-only">Open user menu</span>
                      <span className="bg-gray-900 h-8 user-icon w-8 rounded-full" />
                    </button>
                  </div>
                  {/*User dropdown menu*/}
                  <UserDropdownMenu
                    open={showUserMenu}
                    hideUserMenu={hideUserMenu}
                    userMenuButtonRef={userMenuButtonRef}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/*Mobile menu, show/hide based on menu state. */}
        <MenuDropdown open={showMenu} />
      </div>
    </nav>
  );
};

export default Nav;
