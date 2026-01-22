const skillGroups = [
  {
    title: "Web Development",
    desc: "Core technologies used to build responsive and modern web interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript (Basics)",
    ],
  },
  {
    title: "Programming",
    desc: "Strong foundation in programming concepts and object-oriented development.",
    skills: [
      "C",
      "Java",
    ],
  },
  {
    title: "Databases",
    desc: "Experience working with relational databases and data management.",
    skills: [
      "MySQL",
    ],
  },
  {
    title: "Version Control",
    desc: "Tools used for source code management and collaboration.",
    skills: [
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Developer Tools",
    desc: "Essential tools and practices required for professional software development.",
    skills: [
      "VS Code",
      "Command Line (Basics)",
      "Chrome DevTools",
      "REST API Basics",
      "Debugging Techniques",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-24">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            Skills
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            A practical skill set focused on building, debugging, and delivering
            real-world web applications with industry-relevant tools.
          </p>
        </div>

        {/* ================= SKILL GROUPS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-2xl
              bg-white/5 border border-white/10
              hover:bg-white/8 transition"
            >
              {/* TITLE */}
              <h3 className="text-2xl font-medium text-white mb-3">
                {group.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-white/60 leading-relaxed mb-6 max-w-xl">
                {group.desc}
              </p>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-sm rounded-full
                    bg-white/10 border border-white/20
                    text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* SUBTLE EDGE */}
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px]
              bg-white/20 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
