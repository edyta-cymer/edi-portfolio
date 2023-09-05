import Work from "./components/Work";
import About from "./components/About";
import GetInTouch from "./components/GetInTouch";
import { Footer } from "./components/Footer";
import Logos from "./components/Logos";
import Home from "./components/Home";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
      <main>
        <header className="header">
          <nav>
            <ul className="list">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="main-nav-link"
                >
                  Edyta Cymer
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                  className="main-nav-link"
                >
                  Work
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/edytacymer"
                  target="_blank"
                  rel="noreferrer"
                  className="main-nav-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="getintouch"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="main-nav-link"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Home />
        <About />
        <Work />
        <GetInTouch />
        <Logos />
        <Footer />
      </main>
    </div>
  );
}

export default App;
