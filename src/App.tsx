import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Tools from './pages/Tools/Tools';
import MarqueeSection from './components/MarqueeSection/MarqueeSection';
import Project from './pages/Project/Project';
import ProjectNav from './components/ProjectNav/ProjectNav';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Tools />
      <MarqueeSection />
      <Project />
      <ProjectNav />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
