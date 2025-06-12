const chipsContainer = document.querySelector(".chips-container");

const colors = ['#D32F2F', '#9C27B0', '#FFD700', '#030001']; // rojo, violeta, dorado

function createChip() {
  const chip = document.createElement("div");
  chip.classList.add("chip");

  // Color aleatorio
  const color = colors[Math.floor(Math.random() * colors.length)];
  chip.style.color = color;

  // Posición aleatoria
  chip.style.left = Math.random() * 100 + "vw";

  // Tamaño aleatorio
  const size = 30 + Math.random() * 20;
  chip.style.width = chip.style.height = size + "px";

  // Duración de la caída
  const duration = 3 + Math.random() * 3;
  chip.style.animationDuration = `${duration}s, 3s`;

  // Rotaciones iniciales aleatorias
  const rotX = Math.floor(Math.random() * 360);
  const rotY = Math.floor(Math.random() * 360);
  chip.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

  chipsContainer.appendChild(chip);

  // Eliminar después de la animación
  setTimeout(() => {
    chip.remove();
  }, duration * 1000 + 1000);
}

// Lanzar una ficha cada 250ms
setInterval(createChip, 250);

// Numeros

document.addEventListener("DOMContentLoaded", () => {
  const whatsappButton = document.getElementById("whatsapp-button");

  const links = [
    "https://wa.link/pu3jiq", // 011-7075-4211
    "https://wa.link/7s8kzv", // ***-****-****
    "https://wa.link/a4c1hj", // ***-****-****
    "https://wa.link/r8m2yf" // ***-****-****
  ];

  

  const randomIndex = Math.floor(Math.random() * links.length);
  whatsappButton.href = links[randomIndex];

  whatsappButton.addEventListener("click", () => {

    gtag('event', 'click_whatsapp', {
      event_category: 'engagement',
      event_label: 'Botón WhatsApp',
    });
});
});
