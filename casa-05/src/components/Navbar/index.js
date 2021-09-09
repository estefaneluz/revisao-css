import "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Sunnyside</h1>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Project </li>
        <li>
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  );
}
