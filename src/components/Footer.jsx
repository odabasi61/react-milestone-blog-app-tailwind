import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
// import axios from "axios";

const Footer = () => {

  // const API = process.env.REACT_APP_WEATHER_API;

  // const getWeather = async() => {
  // try {
  //   const {data} = await axios(`
  //   https://api.openweathermap.org/data/2.5/weather?q=Sinop&appid=${API}
  //   `)
  //   console.log(data)
  // } catch (error) {
  //   console.log(error);
  //   }
    
  // }
  return <div className="mt-20">
    <div className="flex flex-col md:flex-row justify-between bg-blue-950 text-white text-center">
        <div className="border-t  md:border-none">
          <ul className="flex gap-4 p-4 justify-center">
            <Link to={"about"} className="hover:text-green-500 duration-500">
              About Us
            </Link>
            <Link to={"contact"} className="hover:text-green-500 duration-500">
              Contact Us
            </Link>
            <Link to={"privacy"} className="hover:text-green-500 duration-500">
              Privacy Policy
            </Link>
            <Link to={"support"} className="hover:text-green-500 duration-500">
              Support
            </Link>
          </ul>
        </div>
        <div>
          <div className="p-4 border-t md:border-none">
            <p>
              copyrigths &copy; {new Date().getFullYear()},{" "}
              <Link
                to={"https://github.com/odabasi61"}
                className="hover:text-green-500 duration-500"
              >
                Ali ODABAŞI
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="text-white">
        <ul className="flex gap-4 p-4 md:p-8 justify-center">
          <Link to={"https://github.com/odabasi61"}>
            <AiOutlineGithub
              size={40}
              className="hover:scale-105 hover:text-green-500 duration-500"
            />
          </Link>
          <Link to={"https://www.linkedin.com/in/ali-odaba%C5%9F%C4%B1/"}>
            <AiOutlineLinkedin
              size={40}
              className="hover:scale-105 hover:text-green-500 duration-500"
            />
          </Link>
          <Link to={"https://www.instagram.com/aliodabas_a/"}>
            <AiOutlineInstagram
              size={40}
              className="hover:scale-105 hover:text-green-500 duration-500"
            />
          </Link>
        </ul>
      </div>
  </div>;
};

export default Footer;
