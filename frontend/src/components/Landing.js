import "../styles/Landing.css";
import left from "../assets/svg/intro-graphic-left.svg";
import right from "../assets/svg/intro-graphic-right.svg";
import navicon from "../assets/svg/navicon.svg";
import airbeanlogo from "../assets/svg/airbean-landing.svg";
import { useHistory } from "react-router-dom";
import updateUserData from "./updateUser/UpdateUserData";

const Landing = () => {
  let history = useHistory();
  updateUserData();
  return (
    <section className="landing-container">
      <img
          className="navicon"
          onClick={() => history.push("/navbar")}
          src={navicon}
          alt="navicon"
        />
      <article className="landing-center">
        <img className="ab-logo" src={airbeanlogo} alt="Air Bean Logo"
        />
      </article>
      <img className="left-leafs" src={left} alt="Colored Leafs" />
      <img className="right-leafs" src={right} alt="Colored Leafs" />
    </section>
  );
};

export default Landing;
