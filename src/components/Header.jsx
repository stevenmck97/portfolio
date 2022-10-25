import "../styles/header.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const btnVariants = {
  hover: { scale: 1.1, transition: { duration: 0.5 } },
};

const headerText = "Hi, I'm Steven";

const Header = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(!ready);
    }, 1000);
  }, [ready]);

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
        {/* <motion.h1>
          {headerText.split("").map((letter, index) => () => {
            return (
              <motion.h1
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {letter}
              </motion.h1>
            );
          })}
        </motion.h1> */}

        <motion.h1>
          {headerText.split("").map((letter, index) => {
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {letter}
              </motion.span>
            );
          })}
        </motion.h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="intro-btn-group">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="intro-btn">Reach out</button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="intro-btn">Github</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
