document.addEventListener("DOMContentLoaded", function () {
const numeros = [
  "https://api.whatsapp.com/send?phone=5491169639518",
  "https://api.whatsapp.com/send?phone=5491169640722",
  "https://api.whatsapp.com/send?phone=5491169606562",
  "https://api.whatsapp.com/send?phone=5491169616397",
  "https://api.whatsapp.com/send?phone=5491169616617",
  "https://api.whatsapp.com/send?phone=5491169648712",
  "https://api.whatsapp.com/send?phone=5491169640767"
];

  const elegido = numeros[Math.floor(Math.random() * numeros.length)];
  const mensaje = "?text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20el%20bono%20que%20vi.%20¿Cómo%20sigo?";

  const urlFinal = elegido + mensaje;

  // Enviar evento a Google Analytics
  if (typeof gtag === "function") {
    gtag('event', 'redireccion_whatsapp', {
      event_category: 'Redireccion',
      event_label: elegido,
      value: 1
    });
  }

  // Establecer URL en el botón de respaldo (si existe)
  const boton = document.getElementById("whatsapp-button");
  if (boton) {
    boton.href = urlFinal;
  }

  // Redireccionar automáticamente
  setTimeout(() => {
    window.location.href = urlFinal;
  }, 10);
});
