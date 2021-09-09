import "./styles.css";
import MilkImg from "../../assets/image-gallery-milkbottles.jpg";
import OrangeImg from "../../assets/image-gallery-orange.jpg";
import ConeImg from "../../assets/image-gallery-cone.jpg";
import CubesImg from "../../assets/image-gallery-sugarcubes.jpg";

import IconFacebook from "../../assets/icon-facebook.svg";
import IconTwitter from "../../assets/icon-twitter.svg";
import IconPinterest from "../../assets/icon-pinterest.svg";
import IconInstagram from "../../assets/icon-instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-imgs">
        <img src={MilkImg} alt="" />
        <img src={OrangeImg} alt="" />
        <img src={ConeImg} alt="" />
        <img src={CubesImg} alt="" />
      </div>
      <div className="footer-wrapper">
        <h1>sunnyside</h1>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <ul className="social-media">
          <li>
            <img src={IconFacebook} alt="" />
          </li>
          <li>
            <img src={IconTwitter} alt="" />
          </li>
          <li>
            <img src={IconPinterest} alt="" />
          </li>
          <li>
            <img src={IconInstagram} alt="" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
