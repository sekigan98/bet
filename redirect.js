document.addEventListener("DOMContentLoaded", function () {
  const numeros = [
    "https://wa.me/5491169613906",
    "https://wa.me/5491169613856"
  ];
  const elegido = numeros[Math.floor(Math.random() * numeros.length)];

  const mensaje = "?text=¡Hola!%20quiero%20crear%20mi%20cuenta%20gratis%20en%20Bet300";

  // Evento para Google Analytics 4
  if (typeof gtag === "function") {
    gtag('event', 'redireccion_whatsapp', {
      event_category: 'Redireccion',
      event_label: elegido,
      value: 1
    });
  }

  // Redirección con delay
  setTimeout(() => {
    window.location.href = elegido + mensaje;
  }, 1500); // 1.5 segundos de espera
});
