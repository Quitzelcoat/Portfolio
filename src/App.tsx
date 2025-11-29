import CustomCursor from './components/CustomCursor/CustomCursor';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Tools from './pages/Tools/Tools';
import MarqueeSection from './components/MarqueeSection/MarqueeSection';
import Project from './pages/Project/Project';
import ProjectNav from './components/ProjectNav/ProjectNav';
import Contact from './pages/Contact/Contact';
import TypographyPage from './pages/typography/Typography';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Home />
      <About />
      <Tools />
      <MarqueeSection />
      <Project />
      <ProjectNav />
      <TypographyPage />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
