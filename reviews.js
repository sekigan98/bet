document.addEventListener("DOMContentLoaded", () => {
 const reviews = [
  { nombre: "Lucía G.", texto: "¡Me atendieron al toque! Súper confiable.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/44.jpg" },
  { nombre: "Rodrigo P.", texto: "Pensé que era trucho pero funciona perfecto 👌", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/35.jpg" },
  { nombre: "Sofía M.", texto: "Me llegó el bono rapidísimo, recomendadísimo.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/68.jpg" },
  { nombre: "El Tano", texto: "Ya estoy jugando, todo bien por ahora 🔥", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/62.jpg" },
  { nombre: "Mariela B.", texto: "Super clara la atención, pude entrar sin drama.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/32.jpg" },
  { nombre: "Carlos R.", texto: "Dudé al principio pero está todo bien, gracias!", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/45.jpg" },
  { nombre: "Evelyn J.", texto: "Todo re rápido, cero vueltas. Recomendado 💯", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/19.jpg" },
  { nombre: "Nico D.", texto: "A los 10 minutos ya estaba con mi cuenta creada.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/20.jpg" },
  { nombre: "Laura V.", texto: "Pensé que iba a tardar más. Muy buena atención!", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/50.jpg" },
  { nombre: "Ramiro C.", texto: "Súper recomendable. Me ayudaron enseguida.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/54.jpg" },
  { nombre: "Karen L.", texto: "Respondieron al toque, re copado el trato.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/10.jpg" },
  { nombre: "Julián M.", texto: "Todo legal, entré y ya me estaban esperando.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/13.jpg" },
  { nombre: "Tamara P.", texto: "Nunca me atendieron tan rápido. ¡Gracias!", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/28.jpg" },
  { nombre: "Leo G.", texto: "Muy bueno todo, no esperaba que funcione tan bien.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/38.jpg" },
  { nombre: "Ana L.", texto: "Entré por curiosidad y me sorprendió para bien.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/21.jpg" },
  { nombre: "Pablo S.", texto: "No hay vueltas, lo hacés y listo. Excelente trato.", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/15.jpg" },
  { nombre: "Flor D.", texto: "¡Literal me contestaron en menos de 1 minuto!", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/64.jpg" },
  { nombre: "Damián R.", texto: "Me explicaron todo, muy confiables.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/70.jpg" },
  { nombre: "Noelia T.", texto: "La mejor atención que vi en mucho tiempo.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/77.jpg" },
  { nombre: "Gonza M.", texto: "No dudé ni un segundo. Son muy serios.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/73.jpg" },
  { nombre: "Vane E.", texto: "Todo en orden, cero chamuyo. Muy claro todo.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/80.jpg" },
  { nombre: "Luciano B.", texto: "La atención es de 10. Todo rapidísimo.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/83.jpg" },
  { nombre: "Camila S.", texto: "No esperaba tanta seriedad. Me sorprendió.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/85.jpg" },
  { nombre: "Diego C.", texto: "Me pasaron el link y funcionó al toque.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/88.jpg" },
  { nombre: "Natalia R.", texto: "No tuve que esperar nada, excelente.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/90.jpg" },
  { nombre: "Lautaro M.", texto: "Recomendado, cumplió con todo lo que promete.", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/91.jpg" },
  { nombre: "Marina G.", texto: "Me pareció todo muy claro y transparente.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/92.jpg" },
  { nombre: "Facundo Z.", texto: "Dudaba, pero fue todo de 10. Gracias!", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/95.jpg" },
  { nombre: "Belén F.", texto: "Super atentos, respondieron enseguida.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/97.jpg" },
  { nombre: "Matías J.", texto: "Todo bien, cero problemas.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/99.jpg" },
];

  const container = document.getElementById("fake-reviews");
  if (!container) return;

  container.style.position = "relative";
  container.style.width = "100%";
  container.style.maxWidth = "320px";
  container.style.margin = "0 auto";
  container.style.minHeight = "90px";
  container.style.zIndex = "9999";
  
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
    container.appendChild(div);

    setTimeout(() => {
      div.style.opacity = 1;
    }, 100);

    index = (index + 1) % reviews.length;
  };

  showReview();
  setInterval(showReview, 4000);
});
