import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <span
        className="logo uppercase font-bold text-xl"
        style={{ letterSpacing: ".2em" }}
      >
        Kuponify
      </span>
    </Link>
  );
};

export default Logo;
