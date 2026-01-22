const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button
      className={`btn ${containerClass} bg-white/10 backdrop-blur-md border border-white/20`}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
