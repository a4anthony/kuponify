import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";

const MenuDropdown = ({ open }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const { loading, user } = userInfo;
  return (
    <div
      className={open ? "block sm:hidden" : "hidden sm:hidden"}
      id="mobile-menu"
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
        <NavLinks user={user} loading={loading} linkClass={"nav-links"} />
      </div>
    </div>
  );
};

export default MenuDropdown;
