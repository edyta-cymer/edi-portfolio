import { createContext, useContext, useState } from "react";
import Work from "./components/Work";
import About from "./components/About";
import GetInTouch from "./components/GetInTouch";
import { Footer } from "./components/Footer";
import Logos from "./components/Logos";
import Home from "./components/Home";
import { Nav } from "./components/Nav";

const ThemeContext = createContext('light');

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  return theme;
}

function App() {
  const [theme, setTheme] = useState('light');
  
  
  return (
    <ThemeContext.Provider value={theme}>
    <div className={`App-${theme}`}>
      <main>
        <button onClick={() => setTheme(currTheme => currTheme === 'light' ? 'dark' : 'light')} >dupa click me</button>
        <Nav />
        <Home />
        <About />
        <Work />
        <GetInTouch/>
        <Logos />
        <Footer />
      </main>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
