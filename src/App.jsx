import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Tools from "./sections/Tools.jsx";
import Footer from "./sections/Footer.jsx";
// import Skills from "./sections/Skills.jsx";
import Navbar from "./sections/Navbar.jsx";
import Contact from "./sections/Contact.jsx";
import Projects from "./sections/Projects.jsx";
import Education from "./sections/Education.jsx";
import ForestCanvas from "./components/ForestCanvas";
import Certifications from "./sections/Certifications.jsx";

const App = () => {
  return (
    <>
      {/* 🌲 3D Background */}
      <ForestCanvas />
      <div className="star-field">
        {Array.from({ length: 400 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 6}s`,
              opacity: Math.random() * 0.8 + 0.2,
              transform: `scale(${Math.random() * 0.8 + 0.4})`,
            }}
          />
        ))}
      </div>


      {/* 🌌 MAIN WRAPPER */}
      <main className="relative overflow-hidden">

        {/* 🌐 CONTENT */}
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Education />
        <Tools />
        {/* <Skills /> */}
        <Certifications />
        <Contact />
        <Footer />

      </main>
    </>
  );
};

export default App;
