import "./styles/styles.global.css";
import Header from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.div>
        <Header />
        <About />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
