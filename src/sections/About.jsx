import { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const contentRefs = useRef([]);

  const handleCopy = () => {
    navigator.clipboard.writeText("keerthanaduraisamy7@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  useEffect(() => {
    // Add slide-in animation to each content element with staggered delays
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = index * 100; // 100ms between each element
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translate(0, 0) rotate(0deg) scale(1)";
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    // Observe all content elements
    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Function to generate random direction and transform for slide-in
  const getRandomTransform = () => {
    const transforms = [
      { x: -80, y: 0, rotate: -5, scale: 0.9 },     // slide from left with slight rotation
      { x: 80, y: 0, rotate: 5, scale: 0.9 },      // slide from right with slight rotation
      { x: 0, y: -60, rotate: 0, scale: 0.9 },     // slide from top
      { x: 0, y: 60, rotate: 0, scale: 0.9 },      // slide from bottom
      { x: -60, y: -40, rotate: -3, scale: 0.9 },  // from top-left
      { x: 60, y: -40, rotate: 3, scale: 0.9 },    // from top-right
      { x: -60, y: 40, rotate: -3, scale: 0.9 },   // from bottom-left
      { x: 60, y: 40, rotate: 3, scale: 0.9 }      // from bottom-right
    ];
    return transforms[Math.floor(Math.random() * transforms.length)];
  };

  // Get transition delay based on index
  const getTransitionDelay = (index) => {
    return `${index * 0.1}s`;
  };

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div 
          ref={el => contentRefs.current[0] = el}
          className="max-w-2xl mb-28 slide-in-content"
          style={{
            opacity: 0,
            transform: `translate(${getRandomTransform().x}px, ${getRandomTransform().y}px)`,
            transition: "opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transitionDelay: getTransitionDelay(0)
          }}
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            About
          </h2>
        </div>

        {/* ================= HERO SPLIT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          {/* LEFT — TEXT */}
          <div className="space-y-6 max-w-2xl">
            {[
              "I'm a passionate Computer Science student with expertise in modern web development and Java programming. My focus is on building clean, scalable applications that deliver exceptional user experiences while maintaining robust backend systems.",
              "Currently seeking internship opportunities to apply my technical skills in real-world environments, learn from experienced developers, and contribute to meaningful projects that make a tangible impact.",
              "I believe in writing maintainable code, embracing best practices, and continuously expanding my skill set through hands-on projects and collaborative learning."
            ].map((text, index) => {
              const transform = getRandomTransform();
              return (
                <p
                  key={index}
                  ref={el => contentRefs.current[1 + index] = el}
                  className="text-lg md:text-xl text-white/90 leading-relaxed md:leading-loose slide-in-content"
                  style={{
                    opacity: 0,
                    transform: `translate(${transform.x}px, ${transform.y}px)`,
                    transition: `opacity 0.8s ease-out ${getTransitionDelay(1 + index)}, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${getTransitionDelay(1 + index)}`
                  }}
                >
                  {text}
                </p>
              );
            })}
          </div>

          {/* RIGHT — FLOATING ORB VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] aspect-square">
              {/* ORB CONTAINER */}
              <div 
                ref={el => contentRefs.current[4] = el}
                className="relative w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] aspect-square flex items-center justify-center slide-in-content"
                style={{
                  opacity: 0,
                  transform: `translate(${getRandomTransform().x}px, ${getRandomTransform().y}px) scale(0.8)`,
                  transition: "opacity 0.9s ease-out, transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transitionDelay: getTransitionDelay(4)
                }}
              >
                {/* ORB LAYER 1 — OUTER */}
                <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_160px_rgba(255,255,255,0.12)] animate-float-slow" />

                {/* ORB LAYER 2 — MID */}
                <div className="absolute inset-[10%] rounded-full bg-white/6 backdrop-blur-lg border border-white/15 shadow-[0_0_120px_rgba(255,255,255,0.15)] animate-float-mid" />

                {/* IMAGE CORE */}
                <div className="relative z-10 w-[65%] h-[65%] rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.25)] animate-float-slow">
                  <img
                    src="assets/girl.png"
                    alt="Developer portrait"
                    className="w-[100%] h-[100%] object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= EDITORIAL GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* PROFILE */}
          <div 
            ref={el => contentRefs.current[5] = el}
            className="space-y-6 slide-in-content"
            style={{
              opacity: 0,
              transform: `translate(${getRandomTransform().x}px, ${getRandomTransform().y}px)`,
              transition: `opacity 0.8s ease-out ${getTransitionDelay(5)}, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${getTransitionDelay(5)}`
            }}
          >
            <img
              src="assets/avatar.png"
              alt="avatar"
              className="w-full h-[280px] object-contain"
            />
            <div>
              <h4 className="text-xl font-medium text-white mb-2">
                Keerthana Duraisamy
              </h4>
              <p className="text-white/70 leading-relaxed">
                A curious developer constantly exploring better ways to design,
                code, and communicate through technology.
              </p>
            </div>
          </div>

          {/* TECH */}
          <div 
            ref={el => contentRefs.current[6] = el}
            className="space-y-6 slide-in-content"
            style={{
              opacity: 0,
              transform: `translate(${getRandomTransform().x}px, ${getRandomTransform().y}px)`,
              transition: `opacity 0.8s ease-out ${getTransitionDelay(6)}, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${getTransitionDelay(6)}`
            }}
          >
            <img
              src="assets/grid2.png"
              alt="tech"
              className="w-full h-[280px] object-contain"
            />
            <div>
              <h4 className="text-xl font-medium text-white mb-2">
                Technology Stack
              </h4>
              <p className="text-white/70 leading-relaxed">
                Java, React, modern JavaScript, UI frameworks, and tools focused
                on performance and scalability.
              </p>
            </div>
          </div>

          {/* GLOBE */}
          <div 
            ref={el => contentRefs.current[7] = el}
            className="space-y-6 slide-in-content"
            style={{
              opacity: 0,
              transform: `translate(${getRandomTransform().x}px, ${getRandomTransform().y}px)`,
              transition: `opacity 0.8s ease-out ${getTransitionDelay(7)}, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${getTransitionDelay(7)}`
            }}
          >
            <div className="h-[280px] flex items-center justify-center">
              <Globe
                height={260}
                width={260}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
              />
            </div>
            <div>
              <h4 className="text-xl font-medium text-white mb-2">
                Open to remote collaboration
              </h4>
              <p className="text-white/70 leading-relaxed">
                Comfortable working across time zones and global teams.
              </p>
              <Button 
                name="Contact Me" 
                isBeam 
                containerClass="mt-6" 
              />
            </div>
          </div>

          {/* PASSION */}
          <div 
            ref={el => contentRefs.current[8] = el}
            className="md:col-span-2 space-y-6 slide-in-content"
            style={{
              opacity: 0,
              transform: `translate(${getRandomTransform().x}px, ${getRandomTransform().y}px)`,
              transition: `opacity 0.8s ease-out ${getTransitionDelay(8)}, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${getTransitionDelay(8)}`
            }}
          >
            <img
              src="assets/grid3.png"
              alt="passion"
              className="w-full h-[260px] object-contain"
            />
            <div>
              <h4 className="text-xl font-medium text-white mb-2">
                Passion for problem-solving
              </h4>
              <p className="text-white/70 leading-relaxed max-w-2xl">
                I enjoy breaking down complex problems, learning new tools, and
                continuously refining my craft through hands-on practice.
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div 
            ref={el => contentRefs.current[9] = el}
            className="space-y-6 slide-in-content"
            style={{
              opacity: 0,
              transform: `translate(${getRandomTransform().x}px, ${getRandomTransform().y}px)`,
              transition: `opacity 0.8s ease-out ${getTransitionDelay(9)}, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${getTransitionDelay(9)}`
            }}
          >
            <img
              src="assets/grid4.png"
              alt="contact"
              className="w-full h-[260px] object-cover object-top rounded-xl"
            />
            <div
              onClick={handleCopy}
              className="flex items-center gap-3 cursor-pointer select-none slide-in-content"
              style={{
                opacity: 0,
                transform: `translate(${getRandomTransform().x}px, ${getRandomTransform().y}px)`,
                transition: `opacity 0.6s ease-out ${getTransitionDelay(10)}, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${getTransitionDelay(10)}`
              }}
              ref={el => contentRefs.current[10] = el}
            >
              <img
                src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                alt="copy"
              />
              <p className="text-lg text-white">
                keerthanaduraisamy7@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;