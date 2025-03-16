import Work from "./components/Work";
import About from "./components/About";
import GetInTouch from "./components/GetInTouch";
import { Footer } from "./components/Footer";
import Logos from "./components/Logos";
import Home from "./components/Home";
import { Nav } from "./components/Nav";

function App() {
  
  
  return (
    <div className={`App-${theme}`}>
      <main>
        <Nav />
        <Home />
        <About />
        <Work />
        <GetInTouch/>
        <Logos />
        <Footer />
      </main>
    </div>
  );
}

export default App;
