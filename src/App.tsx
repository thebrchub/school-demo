
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Infrastructure from './components/Infrastructure';
import Achievements from './components/Achievements';
import Faculty from './components/Faculty';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Infrastructure />
        <Achievements />
        <Faculty />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;