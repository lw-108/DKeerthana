/* ================= TOOL BOX ================= */
const ToolBox = ({ icon, name }) => {
    return (
        <div
            tabIndex={0}
            className="
        relative group
        flex items-center justify-center
        w-20 h-20
        sm:w-28 sm:h-28
        md:w-36 md:h-36
        transition-transform duration-300 ease-out
        hover:scale-105
        focus-visible:scale-105
        outline-none
      "
        >
            {/* ICON */}
            <img
                src={icon}
                alt={name}
                draggable="false"
                className="
          w-full h-full
          object-contain
          opacity-90
          transition-opacity duration-300
          group-hover:opacity-100
          group-focus-visible:opacity-100
        "
            />

            {/* TOOLTIP */}
            <span
                className="
          pointer-events-none
          absolute -bottom-11
          text-sm sm:text-base
          font-medium
          tracking-wide
          text-white/80
          opacity-0
          translate-y-2
          transition-all duration-300 ease-out
          group-hover:opacity-100
          group-hover:translate-y-0
          group-focus-visible:opacity-100
          group-focus-visible:translate-y-0
          whitespace-nowrap
        "
            >
                {name}
            </span>
        </div>
    );
};

/* ================= TOOLS SECTION ================= */
const Tools = () => {
    return (
        <section id="tools" className="relative py-32">
            <div className="max-w-7xl mx-auto px-6">

                {/* ===== HEADING ===== */}
                <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-20">
                    My Expertise in
                </h2>

                <div className="space-y-28 max-w-5xl">

                    {/* ===== FRONTEND ===== */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-medium text-white/80 mb-14">
                            Frontend
                        </h3>

                        <div className="flex flex-wrap gap-14 sm:gap-20 items-center">
                            <ToolBox icon="/assets/html.svg" name="HTML5" />
                            <ToolBox icon="/assets/css.svg" name="CSS3" />
                            <ToolBox icon="/assets/js.svg" name="JavaScript" />
                            <ToolBox icon="/assets/react.svg" name="React" />
                            <ToolBox icon="/assets/nextjs.svg" name="Next.js" />
                            <ToolBox icon="/assets/Bootstrap.svg" name="Bootstrap" />
                        </div>
                    </div>

                    {/* ===== BACKEND ===== */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-medium text-white/80 mb-14">
                            Backend
                        </h3>

                        <div className="flex flex-wrap gap-14 sm:gap-20 items-center">
                            <ToolBox icon="/assets/c.svg" name="C" />
                            <ToolBox icon="/assets/java.svg" name="Java" />
                            <ToolBox icon="/assets/nodejs.svg" name="Node.js" />
                            <ToolBox icon="/assets/mysql.svg" name="MySQL" />
                            <ToolBox icon="/assets/mongodb.svg" name="MongoDB" />
                        </div>
                    </div>

                    {/* ===== OTHER ===== */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-medium text-white/80 mb-14">
                            Other
                        </h3>

                        <div className="flex flex-wrap gap-14 sm:gap-20 items-center">
                            <ToolBox icon="/assets/git.svg" name="Git" />
                            <ToolBox icon="/assets/github.svg" name="GitHub" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Tools;
