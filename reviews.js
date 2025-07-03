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
  if (container) {
    reviews.forEach(r => {
      const div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "flex-start";
      div.style.gap = "12px";
      div.style.marginBottom = "18px";
      div.style.background = "#fff";
      div.style.borderRadius = "10px";
      div.style.padding = "12px";
      div.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";

      div.innerHTML = `
        <img src="${r.foto}" alt="Foto de ${r.nombre}" style="width:48px; height:48px; border-radius:50%; object-fit:cover;">
        <div>
          <strong>${r.nombre}</strong> <span style="color:#888; font-size: 13px;">· ${r.fecha}</span><br>
          <span style="color: #FFD700;">${"★".repeat(r.estrellas)}</span><br>
          <p style="margin: 5px 0 0; font-size: 15px; color: #444;">${r.texto}</p>
        </div>
      `;
      container.appendChild(div);
    });
  }
});
