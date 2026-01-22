

const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="c-space py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        {/* <div className="flex items-center gap-3 text-white/60 text-sm">
          <span className="hover:text-white transition cursor-pointer">
            <a href="/NotFound">Terms & Conditions</a>
          </span>
          <span className="opacity-40">•</span>
          <span className="hover:text-white transition cursor-pointer">
            <a href="/NotFound"> Privacy Policy</a>
          </span>
        </div> */}

        {/* Center */}
        <p className="text-white/50 text-sm text-center">
          © 2026 <span className="text-white">Keerthana Duraisamy</span>.
          All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/keerthana-duraisamy"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-icon"
            aria-label="GitHub Profile"
          >
            <img src="/assets/github.svg" alt="github" />
          </a>

          <a
            href="https://www.linkedin.com/in/keerthanaduraisamy7"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-icon"
            aria-label="LinkedIn Profile"
          >
            <img src="/assets/linkedin.svg" alt="twitter" />
          </a>

          <a
            href="keerthanaduraisamy7@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-icon"
            aria-label="Mail Id"
          >
            <img src="/assets/mail.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
