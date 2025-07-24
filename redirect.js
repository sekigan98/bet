document.addEventListener("DOMContentLoaded", function () {
  const numeros = [
    "5491169628596",
    "5491169606562",
    "5491169648712",
    "5491169616397",
    "5491169651371",
    "5491169640722",
    "5491169640767"
  ];

  const mensajePlano = "Hola! Vi el bono y me interesa. ¿Podés contarme cómo funciona?";
  const mensaje = "&text=" + encodeURIComponent(mensajePlano);

  const numero = numeros[Math.floor(Math.random() * numeros.length)];
  const urlFinal = `https://api.whatsapp.com/send?phone=${numero}${mensaje}`;

  // Evento GA
  if (typeof gtag === "function") {
    gtag('event', 'redireccion_whatsapp', {
      event_category: 'Redireccion',
      event_label: numero,
      value: 1
    });
  }

  // Botón fallback
  const boton = document.getElementById("whatsapp-button");
  if (boton) {
    boton.href = urlFinal;
  }

  // Redirección automática
  setTimeout(() => {
    window.location.href = urlFinal;
  }, 10);
});
