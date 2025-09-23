// Floating bubbles background
function createBubbles() {
  for (let i = 0; i < 15; i++) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(bubble);
  }
}
createBubbles();
