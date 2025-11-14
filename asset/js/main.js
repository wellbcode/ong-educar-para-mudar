document.addEventListener("DOMContentLoaded", () => {
  console.log("Plataforma Conecta ONG carregada com sucesso.");
});

// Detecta retorno do Mercado Pago e redireciona
if (window.location.search.includes("approved")) {
  window.location.href = "agradecimento-doacoes.html";
}
