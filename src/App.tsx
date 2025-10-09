import styles from "./App.module.scss";
import { About, Contact, Footer, Hero, Projects, Skills } from "./components/sections";
import "./styles/App.scss";

export default function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
