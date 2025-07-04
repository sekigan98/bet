document.addEventListener("DOMContentLoaded", function () {
  const numeros = [
    "https://wa.me/5491169613906",
    "https://wa.me/5491169613856",
    "https://wa.me/5491169619639"
  ];
  const elegido = numeros[Math.floor(Math.random() * numeros.length)];

  const mensaje = "?text=¡Hola!%20Me%20interesa%20arrancar%20con%20el%20beneficio%20de%20bienvenida%20que%20vi.%20¿%C3%93mo%20sigo?";

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
