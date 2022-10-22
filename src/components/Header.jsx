import "../styles/header.css";

const Header = () => {
  return (
    <section className="Header">
      <div className="appear">
        <img src="react.svg" alt="react" />
      </div>

      <div className="nav-wrapper">
        <nav>
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">CV</li>
        </nav>
      </div>

      <div className="Intro">
        <h1>Hi, I'm Steven</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="intro-btn-group">
          <button className="intro-btn">Reach out</button>
          <button className="intro-btn">Github</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
