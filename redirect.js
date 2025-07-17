document.addEventListener("DOMContentLoaded", function () {
  const numeros = [
    "5491169639518",
    "5491169640722",
    "5491169606562",
    "5491169616397",
    "5491169616617",
    "5491169648712",
    "5491169640767"
  ];

  const numero = numeros[Math.floor(Math.random() * numeros.length)];
  const mensajePlano = "¡Hola! Me gustaría más información sobre el bono que vi. ¿Cómo sigo?";
  const mensaje = "&text=" + encodeURIComponent(mensajePlano);
  const urlFinal = `https://api.whatsapp.com/send?phone=${numero}${mensaje}`;


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
