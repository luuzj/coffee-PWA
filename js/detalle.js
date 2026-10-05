document.addEventListener('DOMContentLoaded', () => {
  // 1. Obtener el ID desde los parámetros de la URL (?id=X)
  const params = new URLSearchParams(window.location.search);
  const coffeeId = parseInt(params.get('id'));

  // 2. Buscar el café correspondiente en el arreglo global 'coffees'
  const selectedCoffee = coffees.find(item => item.id === coffeeId);

  const container = document.getElementById('detail-container');
  if (!container) return;

  // 3. Renderizar o mostrar mensaje de error si no existe
  if (selectedCoffee) {
    // Convertir el arreglo de ingredientes en etiquetas <li>
    const ingredientsList = selectedCoffee.ingredients
      ? selectedCoffee.ingredients.map(ing => `<li>${ing}</li>`).join('')
      : '<li>No especificados</li>';

    container.innerHTML = `
      <img src="${selectedCoffee.image}" alt="${selectedCoffee.name}" class="detail-img" />
      
      <div class="detail-content">
        <div class="detail-header">
          <h2>${selectedCoffee.name}</h2>
          <span class="detail-badge-rating">${selectedCoffee.rating}</span>
        </div>

        <p class="detail-desc">${selectedCoffee.description}</p>
        
        <div class="detail-grid">
          <div class="detail-info-box">
            <h3>🌱 Origen del grano</h3>
            <p>${selectedCoffee.origin || 'Origen de la casa'}</p>
          </div>

          <div class="detail-info-box">
            <h3>⏱ Tiempo de preparación</h3>
            <p>${selectedCoffee.prepTime || 'N/A'}</p>
          </div>
        </div>

        <div class="detail-info-box">
          <h3>☕ Notas de cata y detalles</h3>
          <p>${selectedCoffee.details}</p>
        </div>

        <div class="detail-info-box">
          <h3>📋 Ingredientes</h3>
          <ul class="ingredients-list">
            ${ingredientsList}
          </ul>
        </div>

        <a href="index.html" class="btn-primary">Volver al inicio</a>
      </div>
    `;
  } else {
    container.innerHTML = `
      <h2>Café no encontrado</h2>
      <p>No pudimos encontrar los detalles de este producto.</p>
      <a href="index.html" class="btn-primary">Regresar al menú</a>
    `;
  }
});