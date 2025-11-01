const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar');
const closeBtn = document.querySelector('.close-btn');
const searchInput = document.getElementById('searchInput');

// searchIcon.addEventListener('click', () => {
//   searchBar.classList.toggle('active');
// });

// closeBtn.addEventListener('click', () => {
//   searchBar.classList.remove('active');
// });


// Abrir barra
searchIcon.addEventListener('click', (e) => {
  searchBar.classList.add('active');
  searchInput.focus();
  e.stopPropagation();
});

// Fechar barra
closeBtn.addEventListener('click', (e) => {
  searchBar.classList.remove('active');
  searchInput.value = '';
  e.stopPropagation();
});

// Evitar fechar ao clicar dentro
searchBar.addEventListener('click', (e) => e.stopPropagation());

// Fechar clicando fora
document.addEventListener('click', () => {
  searchBar.classList.remove('active');
  searchInput.value = '';
});

// Função ENTER
function checkEnter(event) {
  if (event.key === "Enter") {
    searchRedirect();
  }
}

// Buscar no JSON e redirecionar
// searchInput.addEventListener('input', buscarEmTempoReal);

// function checkEnter(event) {
//   if (event.key === "Enter") {
//     buscarEmTempoReal();
//   }
// }

// async function buscarEmTempoReal() {
//   const query = searchInput.value.trim().toLowerCase();
//   const container = document.getElementById("resultados");
//   container.innerHTML = "";

//   if (!query) return;

//   try {
//     const response = await fetch('search.json');
//     const data = await response.json();

//     const results = data.filter(item =>
//       (item.title && item.title.toLowerCase().includes(query)) ||
//       (item.url && item.url.toLowerCase().includes(query)) ||
//       (item.content && item.content.toLowerCase().includes(query)) ||
//       (Array.isArray(item.cards) && item.cards.some(card =>
//         (card.title && card.title.toLowerCase().includes(query)) ||
//         (card.text && card.text.toLowerCase().includes(query))
//       )) ||
//       (Array.isArray(item.images) && item.images.some(img =>
//         (img.alt && img.alt.toLowerCase().includes(query))
//       )) ||
//       (Array.isArray(item.people) && item.people.some(p =>
//         (p.name && p.name.toLowerCase().includes(query)) ||
//         (p.role && p.role.toLowerCase().includes(query))
//       ))
//     );

//     if (results.length === 0) {
//       container.innerHTML = `<p>Nenhum resultado encontrado para: <strong>${query}</strong></p>`;
//       return;
//     }

//     results.forEach(item => {
//       const imagens = (item.images || []).map(img =>
//         `<img src="${img.src}" alt="${img.alt}" class="card-img">`
//       ).join("");

//       const pessoas = (item.people || []).map(p =>
//         `<div class="pessoa">
//           <strong>${p.name}</strong><br><small>${p.role}</small>
//         </div>`
//       ).join("");

//       const cardsInternos = (item.cards || []).map(card =>
//         `<div class="subcard">
//           <h4>${card.title}</h4>
//           <p>${card.text}</p>
//         </div>`
//       ).join("");

//       container.innerHTML += `
//         <div class="resultado-card">
//           <h3>${item.title}</h3>
//           <a href="${item.url}" target="_blank">${item.url}</a>
//           <p>${item.content ? item.content.substring(0, 200) + "..." : ""}</p>
//           <div class="card-imagens">${imagens}</div>
//           <div class="card-pessoas">${pessoas}</div>
//           <div class="card-subcards">${cardsInternos}</div>
//         </div>
//       `;
//     });
//   } catch (err) {
//     console.error("Erro ao buscar:", err);
//     container.innerHTML = `<p>Erro ao carregar os dados. Tente novamente mais tarde.</p>`;
//   }
// }

searchInput.addEventListener('input', buscarEmTempoReal);

function checkEnter(event) {
  if (event.key === "Enter") {
    buscarEmTempoReal();
  }
}

// Função para destacar o termo buscado
function destacarTexto(texto, termo) {
  const regex = new RegExp(`(${termo})`, 'gi');
  return texto.replace(regex, '<mark>$1</mark>');
}

async function buscarEmTempoReal() {
  const query = searchInput.value.trim().toLowerCase();
  const container = document.getElementById("resultados");
  container.innerHTML = "";

  if (!query) return;

  try {
    const response = await fetch('search.json');
    const data = await response.json();

    const results = data.filter(item =>
      (item.title && item.title.toLowerCase().includes(query)) ||
      (item.url && item.url.toLowerCase().includes(query)) ||
      (item.content && item.content.toLowerCase().includes(query)) ||
      (Array.isArray(item.cards) && item.cards.some(card =>
        (card.title && card.title.toLowerCase().includes(query)) ||
        (card.text && card.text.toLowerCase().includes(query))
      )) ||
      (Array.isArray(item.images) && item.images.some(img =>
        (img.alt && img.alt.toLowerCase().includes(query))
      )) ||
      (Array.isArray(item.people) && item.people.some(p =>
        (p.name && p.name.toLowerCase().includes(query)) ||
        (p.role && p.role.toLowerCase().includes(query))
      ))
    );

    if (results.length === 0) {
      container.innerHTML = `<p>Nenhum resultado encontrado para: <strong>${query}</strong></p>`;
      return;
    }

    results.forEach(item => {
      const tituloDestacado = destacarTexto(item.title || "", query);
      const conteudoDestacado = destacarTexto(item.content || "", query);

      const imagens = (item.images || []).map(img =>
        `<img src="${img.src}" alt="${img.alt}" class="card-img">`
      ).join("");

      const pessoas = (item.people || []).map(p =>
        `<div class="pessoa">
          <strong>${destacarTexto(p.name || "", query)}</strong><br>
          <small>${destacarTexto(p.role || "", query)}</small>
        </div>`
      ).join("");

      const cardsInternos = (item.cards || []).map(card =>
        `<div class="subcard">
          <h4>${destacarTexto(card.title || "", query)}</h4>
          <p>${destacarTexto(card.text || "", query)}</p>
        </div>`
      ).join("");

      container.innerHTML += `
        <div class="resultado-card">
          <h3>${tituloDestacado}</h3>
          <a href="${item.url}" target="_blank">${item.url}</a>
          <p>${conteudoDestacado.substring(0, 200)}...</p>
          <div class="card-imagens">${imagens}</div>
          <div class="card-pessoas">${pessoas}</div>
          <div class="card-subcards">${cardsInternos}</div>
        </div>
      `;
    });
  } catch (err) {
    console.error("Erro ao buscar:", err);
    container.innerHTML = `<p>Erro ao carregar os dados. Tente novamente mais tarde.</p>`;
  }
}



