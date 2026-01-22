import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "react-responsive";

import CanvasLoader from "../components/Loading.jsx";
import { HackerRoom } from "../components/HackerRoom.jsx";
// import Button from "../components/Button.jsx";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section
      id="home"
      className="relative min-h-[150vh] w-full overflow-hidden bg-black"

    >
       {/* ✨ GLOBAL STAR FIELD */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(1100)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-[2px] h-[2px] bg-white/70 rounded-full  animate-blink"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              opacity: Math.random() * 0.8,
            }}
          />
        ))}
      </div>
      {/* 🌌 BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0" />
      <div className="absolute inset-0" />

      {/* ✨ GLASS HERO TEXT */}
      <div className="relative z-10 flex flex-col items-center text-center lg:mt-5 pt-32 sm:pt-40 px-6">
        <div className=" px-10 py-8 rounded-3xl">
          <h1
            className="relative inline-block text-5xl sm:text-7xl liquid-glass-text"
            data-text="I'm KEERTHANA DURAISAMY"
          >
          I'm  KEERTHANA DURAISAMY
          </h1>
         
        </div>

        {/* 🌿 SPACER CONTENT (EDIT OR REMOVE FREELY) */}
        <div className="mt-20 max-w-xl liquid-glass-text text-sm sm:text-base leading-relaxed">
           <TypeAnimation
            sequence={[
              "Web Developer",
              2200,
              "Java Full Stack Developer",
              2200,
              "Frontend Engineer",
              2200,
              "Creative Technologist",
              2200,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="text-sm sm:text-base liquid-glass-text tracking-[0.25em] uppercase mt-20"
          />

        </div>
      </div>

      {/* 🎥 3D CANVAS */}
      <div className="absolute inset-0">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault
              position={[0, 3, isMobile ? 38 : 18]}
              fov={45}
            />

            {/* 🌲 FOREST MODEL — UNTOUCHED */}
            <HackerRoom />

            {/* 💡 CINEMATIC LIGHTING */}
            <ambientLight intensity={0.7} />
            <directionalLight
              position={[12, 18, 8]}
              intensity={1.3}
              castShadow
            />
            <spotLight
              position={[-10, 14, 10]}
              angle={0.4}
              penumbra={1}
              intensity={0.6}
            />

            {/* 🌍 ENVIRONMENT DEPTH */}
            <Environment preset="forest" />
          </Suspense>
        </Canvas>
      </div>

      {/* 🚀 CTA */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
  {/* <Button
    name="Let`s Work Together"
    isBeam
    containerClass="sm:min-w-96 w-[90%] bg-transparent"
    className="bg-transparent text-white"
  /> */}
</div>

    </section>
  );
};

export default Hero;
