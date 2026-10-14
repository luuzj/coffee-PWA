// js/app.js
function renderCoffees() {
  const container = document.querySelector('.container');
  if (!container) return;

  container.innerHTML = coffees.map(coffee => `
    <article class="card" data-id="${coffee.id}">
      <img src="${coffee.image}" alt="${coffee.name}" />
      <div class="card-body">
        <div class="card-header-info">
          <h3 class="card-title">${coffee.name}</h3>
          <span class="card-rating">${coffee.rating}</span>
        </div>
        <p class="card-description">${coffee.description}</p>
        <button class="btn-more">Ver detalles</button>
      </div>
    </article>
  `).join('');

  // Seleccionar todas las tarjetas recién creadas y agregarles el clic a cada una
  const cards = container.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      window.location.href = `detalle.html?id=${id}`;
    });
  });
}

document.addEventListener('DOMContentLoaded', renderCoffees);