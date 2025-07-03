document.addEventListener("DOMContentLoaded", () => {
const reviews = [
  { nombre: "Martina S.", texto: "Nunca había ganado tan fácil, genial experiencia.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/12.jpg" },
  { nombre: "Emiliano T.", texto: "Lo probé de curioso y terminé retirando plata.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/46.jpg" },
  { nombre: "Sabrina L.", texto: "Súper entretenido y muy fácil registrarse.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/33.jpg" },
  { nombre: "Julián R.", texto: "Me ayudaron en el momento. Excelente trato.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/51.jpg" },
  { nombre: "Daniela G.", texto: "Muy buena atención, todo rápido y seguro.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/41.jpg" },
  { nombre: "Tobías M.", texto: "Gané en la primera jugada. Es real!", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/39.jpg" },
  { nombre: "Melina R.", texto: "Cero vueltas para registrarme. Re fácil.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/15.jpg" },
  { nombre: "Franco D.", texto: "Pensé que era trampa pero es 100% confiable.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/67.jpg" },
  { nombre: "Romina E.", texto: "Me mandaron el link y entré al toque.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/17.jpg" },
  { nombre: "Maxi V.", texto: "Súper fluido todo, se nota que es serio.", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/11.jpg" },
  { nombre: "Gabriela M.", texto: "Muy confiable y buen soporte.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/48.jpg" },
  { nombre: "Leandro J.", texto: "Me explicaron todo y en minutos estaba jugando.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/52.jpg" },
  { nombre: "Yesica C.", texto: "Me contestaron enseguida. 10 puntos.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/55.jpg" },
  { nombre: "Oscar A.", texto: "Nunca me sentí tan cómodo apostando online.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/24.jpg" },
  { nombre: "Luz H.", texto: "Mi primera vez y ya gané algo 😍", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/25.jpg" },
  { nombre: "Federico I.", texto: "No esperaba mucho, pero me sorprendió para bien.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/27.jpg" },
  { nombre: "Nadia T.", texto: "Todo rápido, sin vueltas. Muy buena onda.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/38.jpg" },
  { nombre: "Elías B.", texto: "La app anda rápido y es segura.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/60.jpg" },
  { nombre: "Julieta Z.", texto: "Re fácil registrarme, en 2 minutos ya estaba.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/66.jpg" },
  { nombre: "Tomás G.", texto: "Le pasé a mis amigos, todos contentos.", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/29.jpg" },
  { nombre: "Cintia V.", texto: "Me dieron el bono sin problemas. Todo bien.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/70.jpg" },
  { nombre: "Mauricio F.", texto: "Buena atención y plataforma estable.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/72.jpg" },
  { nombre: "Agustina B.", texto: "La atención es real, me ayudaron de verdad.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/74.jpg" },
  { nombre: "Cristian S.", texto: "Muy claro todo, sin vueltas raras.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/76.jpg" },
  { nombre: "Celeste M.", texto: "No tuve ni que esperar, genial trato.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/78.jpg" },
  { nombre: "Andrés R.", texto: "Me pareció muy transparente. Recomendado.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/80.jpg" },
  { nombre: "Florencia D.", texto: "Todo como lo prometieron. 10/10.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/82.jpg" },
  { nombre: "Ignacio Q.", texto: "¡Y sí, gané! Re fácil todo.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/85.jpg" },
  { nombre: "Ayelén S.", texto: "La mejor atención, súper rápidos.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/87.jpg" },
  { nombre: "Hernán D.", texto: "Funciona perfecto. Nada que criticar.", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/89.jpg" },
];

 // 🔀 Mezclar reseñas para que aparezcan en orden aleatorio al cargar
  reviews.sort(() => Math.random() - 0.5);

  const container = document.getElementById("fake-reviews");
  if (!container) return;

  // 💄 Estilos del contenedor
  Object.assign(container.style, {
    position: "relative",
    width: "100%",
    maxWidth: "320px",
    margin: "30px auto 0",
    minHeight: "90px",
    zIndex: "9994"
  });

  let index = 0;

  const showReview = () => {
    const r = reviews[index];
    container.innerHTML = ""; // Limpiar anterior

    const div = document.createElement("div");
    Object.assign(div.style, {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: "#fff",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      opacity: 0,
      transition: "opacity 0.5s ease"
    });

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
