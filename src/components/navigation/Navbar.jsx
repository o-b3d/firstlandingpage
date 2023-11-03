import './Navbar.css'

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <p>Miami Computer Builders LLC</p>
          <div className="links">
          <a id="about" href="#about">About</a>
          <a id="contact" href="#contact">Contact</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
