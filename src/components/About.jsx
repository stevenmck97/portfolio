import "../styles/about.css";

export const About = () => {
  return (
    <section className="About">
      <div className="about_container">
        <h1>About Me</h1>
        <p>
          A software developer and graduate from Waterford Institute of
          Technology. "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
        <div className="technologies">
          <h1>Technologies</h1>
          <div className="tech_list">
            <ul>
              <li>
                <img src="html-5.svg" alt="html" />
              </li>
              <li>
                <img src="css3.svg" alt="html" />
              </li>
              <li>
                <img src="javascript.svg" alt="html" />
              </li>
              <li>
                <img src="react.svg" alt="html" />
              </li>
            </ul>
            <ul>
              <li>
                <img src="git.svg" alt="html" />
              </li>
              <li>
                <img src="webpack.svg" alt="html" />
              </li>
              <li>
                <img src="nodejs.svg" alt="html" />
              </li>
              <li>
                <img className="li-express" src="express-js.svg" alt="html" />
              </li>
            </ul>
            <ul>
              <li>
                <img src="mongodb.svg" alt="html" />
              </li>
              <li>
                <img src="my-sql.svg" alt="html" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
