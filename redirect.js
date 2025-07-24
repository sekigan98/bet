document.addEventListener("DOMContentLoaded", function () {
  const numeros = [
    "5491169628596", //wp3
    "5491169606562", //wp6
    "5491169648712", //wp5
    "5491169616397", //wp7
    "5491169650944", //wp4
    "5491169640722", //wp2
    "5491169640767" //wp1
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
  window.location.replace(urlFinal);
}, 600);
});
