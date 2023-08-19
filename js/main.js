// Random number generator between min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Apply the random animation values to each unique container
document.addEventListener("DOMContentLoaded", function() {
  const containers = document.querySelectorAll(".unique-container");
  containers.forEach(container => {
    const randX = getRandomNumber(-2, 2); // Increase range for wilder effect
    const randY = getRandomNumber(-2, 2); // Increase range for wilder effect
    const duration = getRandomNumber(2, 5); // Random duration between 2s and 5s

    container.style.setProperty("--rand-x", randX);
    container.style.setProperty("--rand-y", randY);
    container.style.animationDuration = `${duration}s`;
  });
});
