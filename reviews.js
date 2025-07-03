document.addEventListener("DOMContentLoaded", () => {
  const reviews = [
    {
      nombre: "Lucía G.",
      texto: "¡Me atendieron al toque! Súper confiable.",
      fecha: "Hace 2 días",
      estrellas: 5,
      foto: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      nombre: "Rodrigo P.",
      texto: "Pensé que era trucho pero funciona perfecto 👌",
      fecha: "Hace 4 días",
      estrellas: 5,
      foto: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      nombre: "Sofía M.",
      texto: "Me llegó el bono rapidísimo, recomendadísimo.",
      fecha: "Hace 1 día",
      estrellas: 5,
      foto: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      nombre: "El Tano",
      texto: "Ya estoy jugando, todo bien por ahora 🔥",
      fecha: "Hace 3 días",
      estrellas: 5,
      foto: "https://randomuser.me/api/portraits/men/62.jpg"
    },
  ];

  const container = document.getElementById("fake-reviews");
  if (!container) return;

  container.style.position = "relative";
  container.style.width = "100%";
  container.style.maxWidth = "320px";
  container.style.margin = "0 auto";
  container.style.minHeight = "90px";

  let index = 0;
  const showReview = () => {
    const r = reviews[index];
    container.innerHTML = "";

    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.gap = "10px";
    div.style.background = "#fff";
    div.style.borderRadius = "10px";
    div.style.padding = "10px";
    div.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    div.style.opacity = 0;
    div.style.transition = "opacity 0.5s ease";

 div.innerHTML = `
  <img src="${r.foto}" alt="Foto de ${r.nombre}" style="width:40px; height:40px; border-radius:50%; object-fit:cover;">
  <div style="font-size: 14px; color: #222;">
    <strong>${r.nombre}</strong> <span style="color:#666; font-size:12px;">· ${r.fecha}</span><br>
    <span style="color: #FFD700;">${"★".repeat(r.estrellas)}</span><br>
    <span>${r.texto}</span>
  </div>
`;
    `;
    container.appendChild(div);

    setTimeout(() => {
      div.style.opacity = 1;
    }, 100);

    index = (index + 1) % reviews.length;
  };

  showReview();
  setInterval(showReview, 4000);
});
