import "./styles.css";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <div className="header-wrapper">
      <Navbar />
      <h2>We are creatives</h2>
      <div className="arrow" />
    </div>
  );
}
