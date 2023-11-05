import './Navbar.css'

export function Navbar() {
  return (
    <div className = "navbarContainer">
      <ul>
        <li className="navbarList">
          <p className="corporationName">Miami Computer Builders</p>
          <div className="about">
          <a href="#bottom">About</a>
          </div>
          <div className="contact">
          <a href="mailto:obed@ogtesting.com">Contact Us</a>
          </div>
        </li>
      </ul>
    </div>
  );
}