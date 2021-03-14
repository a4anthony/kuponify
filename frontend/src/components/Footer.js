import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;

const Footer = () => {
  return (
    <footer>
      <div
        className="container mx-auto py-12 text-white"
        style={{ borderTop: "1px solid", borderColor: "#b5b1b1" }}
      >
        <div className="text-center mb-4">
          <Logo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-white text-center md:text-left  text-sm">
            {" "}
            Copyright © {new Date().getFullYear()} Kuponify. All rights
            reserved.
          </div>
          <div className="text-white mt-6 md:mt-0 text-center md:text-right">
            <ul className="m-0 p-0 h-list footer-social-icons">
              <li>
                <a href="/">{twitterIcon}</a>
              </li>{" "}
              <li>
                <a href="/">{instagramIcon}</a>
              </li>{" "}
              <li>
                <a href="/">{mailIcon}</a>
              </li>{" "}
            </ul>
          </div>
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
