import './Navbar.css'

export function Navbar() {
  return (
    <div className = "navbarContainer">
      <ul>
        <li className="navbarList">
          <p className="corporationName">Miami Computer Builders</p>
          <div className="about">
          <a href="#about">About</a>
          </div>
          <div className="contact">
          <a href="#contact">Contact Us</a>
          </div>
        </li>
      </ul>
    </div>
  );
}