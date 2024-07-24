import './App.css';
import NavSection from './components/NavSection';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavSection />
        <HeroSection />
        <AboutMeSection />
        <Projects />
        <Footer />
      </header>
    </div>
  );
}

export default App;
