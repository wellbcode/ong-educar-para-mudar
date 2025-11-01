let slideIndex = 1;
showSlides(slideIndex);

// Botões prev/next
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Quando clicar no dot
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Esconde todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove 'active' de todos os dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Exibe o slide atual e acende o dot correspondente
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

setInterval(() => {
  plusSlides(1);
}, 5000);