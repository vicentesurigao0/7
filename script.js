const envelope = document.getElementById('envelope');
const message = document.getElementById('message');
const bubble = document.getElementById('bubble');
const biuSound = document.getElementById('biuSound');
const arrow = document.getElementById('arrow');
const heartContainer = document.getElementById('heartContainer');

let isOpen = false;
let heartInterval;

envelope.addEventListener('click', () => {
  biuSound.play();
  bubble.style.animation = "bubbleFade 2s ease-in-out forwards";

  if (!isOpen) {
    // Hide envelope
    envelope.style.opacity = 0;
    envelope.style.pointerEvents = "none";

    // Hide arrow
    arrow.style.display = "none";

    // Show message
    message.style.display = "block";
    message.style.animation = "slideOut 1.5s ease forwards";

    // Start floating hearts
    heartInterval = setInterval(() => {
      launchHeart();
    }, 500);

    isOpen = true;
  } else {
    // Hide message
    message.style.animation = "slideIn 1.5s ease forwards";
    setTimeout(() => {
      message.style.display = "none";
    }, 1500);

    // Show envelope again
    envelope.style.opacity = 1;
    envelope.style.pointerEvents = "auto";

    // Show arrow again
    arrow.style.display = "block";

    // Stop hearts
    clearInterval(heartInterval);

    isOpen = false;
  }
});

function launchHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";

  const x = 150 + (Math.random() * 200 - 100);
  const y = 400;

  heart.style.left = x + "px";
  heart.style.top = y + "px";
  heart.style.animationDelay = (Math.random() * 1) + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}
