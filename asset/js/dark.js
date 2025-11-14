document.querySelector(".container").addEventListener("click", () => {
  const body = document.body;
  const sun = document.querySelector(".sun-logo");
  const moon = document.querySelector(".moon-logo");

  // Alterna classes de animação
  sun.classList.toggle("animate-sun");
  moon.classList.toggle("animate-moon");

  // Alterna modo escuro
  body.classList.toggle("dark-mode");

  // Atualiza atributo aria para acessibilidade
  const isDark = body.classList.contains("dark-mode");
  body.setAttribute("aria-label", isDark ? "Modo escuro ativado" : "Modo claro ativado");

  if (localStorage.getItem("modo") === "dark") {
  body.classList.add("dark-mode");
  sun.classList.add("animate-sun");
  moon.classList.add("animate-moon");
}

// Alterna modo ao clicar no botão
document.querySelector(".container").addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  sun.classList.toggle("animate-sun");
  moon.classList.toggle("animate-moon");

const isDark = body.classList.contains("dark-mode");
  body.setAttribute("aria-label", isDark ? "Modo escuro ativado" : "Modo claro ativado");
  localStorage.setItem("modo", isDark ? "dark" : "light");
});
})
