const coffees = [
  {
    name: "Espresso Cortado",
    description: "Café concentrado servido en taza de cristal con una ligera capa de crema.",
    image: "imagenes/coffe3.jpg"
  },
  {
    name: "Café Americano",
    description: "Espresso diluido en agua caliente, clásico, suave y reconfortante.",
    image: "imagenes/coffee1.jpg"
  },
  {
    name: "Cappuccino Tradicional",
    description: "Equilibrio perfecto entre espresso, leche al vapor y abundante espuma con arte latte.",
    image: "imagenes/coffee2.jpg"
  },
  {
    name: "Iced Caramel Latte",
    description: "Espresso frío con leche, mucho hielo y un toque suave de caramelo.",
    image: "imagenes/coffee4.jpg"
  },
  {
    name: "Maccchiato helado con crema",
    description: "Base de espresso frío cubierto con una generosa capa de crema batida casera.",
    image: "imagenes/coffee5.jpg"
  },
  {
    name: "Iced Black Coffee",
    description: "Café negro bien frío servido con hielo y popote para un toque refrescante.",
    image: "imagenes/coffee6.jpg"
  },
  {
    name: "Matcha Latte Helado",
    description: "Té matcha ceremonial disuelto en leche fresca con hielo en vaso de cristal.",
    image: "imagenes/coffee7.jpg"
  },
  {
    name: "Latte de Chocolate Macchiato",
    description: "Espresso cremoso con leche al vapor y un elegante diseño de arte latte.",
    image: "imagenes/coffee8.jpg"
  },
  {
    name: "Mokkaccino Especial",
    description: "Servido en copa, mezcla de café, chocolate cremoso y crema batida encima.",
    image: "imagenes/coffee9.jpg"
  },
  {
    name: "Frappé de Caramelo",
    description: "Bebida helada batida con leche, café, caramelo líquido y sorbete refrescante.",
    image: "imagenes/coffee10.jpg"
  }
];

// Función para renderizar las cards dentro del container
function renderCoffees() {
  const container = document.querySelector('.container');
  if (!container) return;

  container.innerHTML = coffees.map(coffee => `
    <article class="card">
      <img src="${coffee.image}" alt="${coffee.name}" />
      <div class="card-content">
        <h3 class="card-title">${coffee.name}</h3>
        <p class="card-description">${coffee.description}</p>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderCoffees);