export function generateStars(count = 2500) {
  let shadows = [];
  for (let i = 0; i < count; i++) {
    shadows.push(
      `${Math.random() * 100}vw ${Math.random() * 100}vh rgba(255,255,255,${Math.random()})`
    );
  }
  return shadows.join(",");
}
