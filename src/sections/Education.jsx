import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    name: "ERODE SENGUNTHAR ENGINEERING COLLEGE",
    degree: "MCA – Master of Computer Application",
    duration: "2024 – 2026",
    description:
      "Focused on core computer science subjects, full-stack development, and Java programming.",
    logo: "assets/esec.png",
  },
  {
    name: "GOBI ARTS & SCIENCE COLLEGE",
    degree: "BCA – Bachelor of Computer Application",
    duration: "2021 – 2024",
    description:
      "Built a strong foundation in computer languages, algorithms, and fundamentals.",
    logo: "assets/gasc.png",
  },
  {
    name: "SHREE GURUKULAM HR SEC SCHOOL",
    degree: "HSC",
    duration: "2019 – 2021",
    description:
      "Built a strong foundation in mathematics and communication skills.",
    logo: "assets/sgks.png",
  },
  {
    name: "ST FRANCIS XAVIER'S HR SEC SCHOOL",
    degree: "SSLC",
    duration: "2018 – 2019",
    description:
      "Learned science fundamentals and basic computer concepts.",
    logo: "assets/sf.png",
  },
];

const Education = () => {
  const [active, setActive] = useState(0);
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  /* ================= SCROLL ANIMATION ================= */
  useGSAP(() => {
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        transformOrigin: "top",
      }
    );
  }, []);

  return (
    <section id="education" className="c-space my-28">

      <div className="max-w-7xl mx-auto">

        <p className="head-text mb-16 text-center lg:text-left">
          Education
        </p>

        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16"
        >

          {/* LEFT – STICKY LOGO */}
          <div className="hidden lg:flex justify-center">
            <div className="sticky mt-60">
              <div className="relative">
                <img
                  src={educationData[active].logo}
                  alt="Education logo"
                  className="w-[300px] object-contain bg-white py-10 px-10 rounded-xl mt-30"
                />
                <div className="absolute inset-0 -z-10 bg-white/10 blur-3xl rounded-full" />
              </div>
            </div>
          </div>


          {/* RIGHT – TIMELINE */}
          <div className="relative">

            {/* STATIC LINE */}
            {/* <div className="absolute left-5 top-0 h-full w-px  hidden sm:block" /> */}

            {/* ANIMATED LINE */}
            <div
              ref={lineRef}
              className="absolute left-5 top-0 h-500 w-px bg-white hidden sm:block"
              style={{ transform: "scaleY(0)" }}
            />

            <div className="space-y-14">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="relative pl-14 group cursor-pointer"
                >
                  {/* DOT */}
                  <span
                    className={`
                      absolute left-3 top-2 w-4 h-4 rounded-full
                      transition-all duration-300
                      ${active === index
                        ? "bg-white scale-125"
                        : "bg-white/40"}
                    `}
                  />

                  {/* MOBILE LOGO */}
                  <div className="sm:hidden mb-4 flex justify-center">
                    <img src={item.logo} className="w-24 object-contain" />
                  </div>

                  {/* CARD */}
                  <div className="rounded-2xl p-6 bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
                    <h3 className="text-xl font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="text-sm text-white/70 mt-1">
                      {item.degree}
                    </p>

                    <p className="text-xs uppercase tracking-widest text-white/50 mt-2">
                      {item.duration}
                    </p>

                    <p className="text-sm text-white/80 mt-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
