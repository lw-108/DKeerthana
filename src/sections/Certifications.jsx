import { Award } from "lucide-react";

const certifications = [
  {
    title: "Bug Free Browsing using Java Selenium",
    desc: "Attended a professional workshop focused on automated testing and bug-free browsing using Java Selenium. Gained practical exposure to test automation concepts and tools.",
    image: "/assets/heart.png",
  },
  {
    title: "MERN Full Stack Development",
    desc: "Currently enrolled in a comprehensive MERN full-stack development course provided by Revamp Academy, covering frontend, backend, databases, and deployment.",
    image: "/assets/logo.png",
    ongoing: true,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="c-space my-28" >
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-24">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            Certifications
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Recognized learning achievements that represent my continuous growth
            and commitment to mastering modern technologies.
          </p>
        </div>

        {/* ================= CERTIFICATION CARDS ================= */}
        <div className="space-y-16">

          {certifications.map((item, index) => (
            <div
              key={index}
              className="group relative grid grid-cols-1 md:grid-cols-2 gap-12
              p-10 rounded-2xl bg-white/5 backdrop-blur-40 border border-white/10
              hover:bg-white/8 transition"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[260px] rounded-xl overflow-hidden
              bg-white/10 border border-white/15 hover:border-white/25 transition 100 ease-out">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-white/80" />
                  <h3 className="text-2xl font-medium text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed text-lg max-w-xl">
                  {item.desc}
                </p>

                {item.ongoing && (
                  <span className="inline-block mt-6 w-fit text-sm px-4 py-1 rounded-full
                  bg-white/10 border border-white/20 text-white/80">
                    Ongoing
                  </span>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;
