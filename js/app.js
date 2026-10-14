// js/app.js
function renderCoffees() {
  const container = document.querySelector('.container');
  if (!container) return;

  container.innerHTML = coffees.map(coffee => `
    <a class="card" href="detalle.html?id=${coffee.id}">
      <img src="${coffee.image}" alt="${coffee.name}" />
      <div class="card-body">
        <div class="card-header-info">
          <h3 class="card-title">${coffee.name}</h3>
          <span class="card-rating">${coffee.rating}</span>
        </div>
        <p class="card-description">${coffee.description}</p>
        <span class="btn-more">Ver detalles</span>
      </div>
    </a>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderCoffees);