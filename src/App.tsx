import styles from "./App.module.scss";
import {
  About,
  Contact,
  Header,
  Projects,
  Skills,
} from "./components/sections";
import "./styles/App.scss";

export default function App() {
  return (
    <div className={styles.App}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
