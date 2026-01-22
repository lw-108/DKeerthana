import { useEffect } from "react";
import { generateStars } from "../utils/stars";

const StarField = () => {
  useEffect(() => {
    const count = window.innerWidth < 768 ? 1200 : 2500;
    document.documentElement.style.setProperty(
      "--stars",
      generateStars(count)
    );
  }, []);

  return (
    <>
      <div class="star-field">
  <div class="star-layer slow"></div>
  <div class="star-layer medium"></div>
  <div class="star-layer fast"></div>
</div>

    </>
  );
};

export default StarField;
