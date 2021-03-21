import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { logout } from "../../actions/userActions";

// Dropdown menu, show/hide based on menu state.
//
// Entering: "transition ease-out duration-100"
// From: "transform opacity-0 scale-95"
// To: "transform opacity-100 scale-100"
// Leaving: "transition ease-in duration-75"
// From: "transform opacity-100 scale-100"
// To: "transform opacity-0 scale-95"

const UserDropdownMenu = ({ open, hideUserMenu, userMenuButtonRef }) => {
  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref, open) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          userMenuButtonRef.current &&
          !userMenuButtonRef.current.contains(event.target)
        ) {
          hideUserMenu(open);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, open]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, open);

  const dispatch = useDispatch();

  const deleteCookie = (e) => {
    e.preventDefault();
    axios
      .get("http://127.0.0.1:5000/api/cookie/delete", { withCredentials: true })
      .then((res) => {
        dispatch(logout());
        hideUserMenu(open);
      });
  };

  return (
    <div
      ref={wrapperRef}
      className={open ? "block user-menu" : "hidden user-menu"}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <a
        href="/"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        Your Profile
      </a>
      <a
        href="/"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        Settings
      </a>
      <a
        onClick={deleteCookie}
        href="/"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        Sign out
      </a>
    </div>
  );
};

export default UserDropdownMenu;
