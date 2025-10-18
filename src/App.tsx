import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Tools from './components/Tools/Tools';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Tools />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
