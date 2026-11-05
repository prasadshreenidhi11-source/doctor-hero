import "./Header.css";
function Header() {
  return (
    <header className="header">
      <a href="#top" className="header-logo"><span className="logo-icon"><span>✚</span></span><span>Nuvica</span></a>
      <nav className="header-nav" aria-label="Main navigation"><a href="#top" className="active">Home</a><a href="#about">About</a><a href="#departments" className="nav-dropdown">Departments</a><a href="#doctors">Doctors</a><a href="#career">Career</a></nav>
      <a href="#contact" className="contact-button"><span>Contact Us</span><span className="contact-arrow">↗</span></a>
    </header>
  );
}
export default Header;

