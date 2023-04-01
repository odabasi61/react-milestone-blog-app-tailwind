import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-blue-950 text-white text-center">
        <div>
          <ul className="flex gap-4 p-4 justify-center">
            <Link to={"about"} className="hover:text-orange-400 duration-500">
              About Us
            </Link>
            <Link to={"contact"} className="hover:text-orange-400 duration-500">
              Contact Us
            </Link>
            <Link to={"privacy"} className="hover:text-orange-400 duration-500">
              Privacy Policy
            </Link>
            <Link to={"support"} className="hover:text-orange-400 duration-500">
              Support
            </Link>
          </ul>
        </div>
        <div className="text-white border-t lg:border-none">
          <ul className="flex gap-4 p-4 lg:p-8 justify-center">
            <Link to={"https://github.com/odabasi61"}>
              <AiOutlineGithub
                size={40}
                className="hover:scale-105 hover:text-orange-400 duration-500"
              />
            </Link>
            <Link to={"https://www.linkedin.com/in/ali-odaba%C5%9F%C4%B1/"}>
              <AiOutlineLinkedin
                size={40}
                className="hover:scale-105 hover:text-orange-400 duration-500"
              />
            </Link>
            <Link to={"https://www.instagram.com/aliodabas_a/"}>
              <AiOutlineInstagram
                size={40}
                className="hover:scale-105 hover:text-orange-400 duration-500"
              />
            </Link>
          </ul>
        </div>
        <div>
          <div className="p-4 border-t lg:border-none">
            <p>
              copyrigths &copy; {new Date().getFullYear()},{" "}
              <Link
                to={"https://github.com/odabasi61"}
                className="hover:text-orange-400 duration-500"
              >
                Ali ODABAŞI
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
