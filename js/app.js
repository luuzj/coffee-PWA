const coffees = [
  {
    id: 1,
    name: "Espresso Cortado",
    description: "Café concentrado servido en taza de cristal con una ligera capa de crema.",
    rating: "4.8 ★★★★★",
    origin: "Colombia (Huila)",
    prepTime: "3-5 mins",
    ingredients: [
      "1 Shot de espresso doble",
      "30ml de leche evaporada o entera al vapor",
      "Una fina capa de espuma de leche"
    ],
    details: "Notas de cacaos finos y nueces. Acidez media con cuerpo terroso y equilibrado.",
    image: "imagenes/coffe3.jpg"
  },
  {
    id: 2,
    name: "Café Americano",
    description: "Espresso diluido en agua caliente, clásico, suave y reconfortante.",
    rating: "4.5 ★★★★☆",
    origin: "Guatemala (Antigua)",
    prepTime: "3 mins",
    ingredients: [
      "1 Shot de espresso clásico",
      "150ml de agua caliente filtrada"
    ],
    details: "Ideal para acompañar desayunos. Tostado medio con notas cítricas ligeras.",
    image: "imagenes/coffee1.jpg"
  },
  {
    id: 3,
    name: "Cappuccino Tradicional",
    description: "Equilibrio perfecto entre espresso, leche al vapor y abundante espuma con arte latte.",
    rating: "4.9 ★★★★★",
    origin: "Italia / Mezcla Arábica",
    prepTime: "5-6 mins",
    ingredients: [
      "1 Shot de espresso intenso",
      "60ml de leche entera vaporizada",
      "60ml de espuma densa de leche",
      "Cacao en polvo o canela para decorar"
    ],
    details: "Proporción clásica de tercios (1/3 espresso, 1/3 leche, 1/3 espuma). Textura aterciopelada.",
    image: "imagenes/coffee2.jpg"
  },
  {
    id: 4,
    name: "Iced Caramel Latte",
    description: "Espresso frío con leche, mucho hielo y un toque suave de caramelo.",
    rating: "4.7 ★★★★★",
    origin: "Mezcla de la casa",
    prepTime: "4 mins",
    ingredients: [
      "1 Shot de espresso frío",
      "180ml de leche fresca",
      "2 cucharadas de jarabe de caramelo artesanal",
      "Cubos de hielo al gusto",
      "Salsa de caramelo para el vaso"
    ],
    details: "Bebida dulce y refrescante, perfecta para los días calurosos.",
    image: "imagenes/coffee4.jpg"
  },
  {
    id: 5,
    name: "Maccchiato helado con crema",
    description: "Base de espresso frío cubierto con una generosa capa de crema batida casera.",
    rating: "4.6 ★★★★☆",
    origin: "Etiopía",
    prepTime: "5 mins",
    ingredients: [
      "2 Shots de espresso helado",
      "120ml de leche fría",
      "Crema batida dulce artesanal",
      "Topping de vainilla"
    ],
    details: "Presentación en vaso alto con contraste visual entre el espresso y la crema.",
    image: "imagenes/coffee5.jpg"
  },
  {
    id: 6,
    name: "Iced Black Coffee",
    description: "Café negro bien frío servido con hielo y popote para un toque refrescante.",
    rating: "4.4 ★★★★☆",
    origin: "Oaxaca (Pluma Hidalgo)",
    prepTime: "2 mins",
    ingredients: [
      "Extracción Cold Brew concentrada",
      "Agua fría purificada",
      "Hielo gourmet"
    ],
    details: "Extracción lenta en frío por 12 horas. Baja acidez y dulzura natural resaltada.",
    image: "imagenes/coffee6.jpg"
  },
  {
    id: 7,
    name: "Matcha Latte Helado",
    description: "Té matcha ceremonial disuelto en leche fresca con hielo en vaso de cristal.",
    rating: "4.8 ★★★★★",
    origin: "Uji, Japón",
    prepTime: "5 mins",
    ingredients: [
      "2g de Matcha Grado Ceremonial",
      "30ml de agua tibia para batir",
      "180ml de leche de almendra u avena",
      "Hielo",
      "Miel de agave (opcional)"
    ],
    details: "Rico en antioxidantes con energía sostenida sin la alteración típica del café.",
    image: "imagenes/coffee7.jpg"
  },
  {
    id: 8,
    name: "Latte de Chocolate Macchiato",
    description: "Espresso cremoso con leche al vapor y un elegante diseño de arte latte.",
    rating: "4.7 ★★★★★",
    origin: "Chiapas",
    prepTime: "6 mins",
    ingredients: [
      "1 Shot de espresso",
      "150ml de leche al vapor",
      "15g de cacao puro al 70%",
      "Esencia de vainilla"
    ],
    details: "La combinación justa entre chocolate amargo y espresso de tostado oscuro.",
    image: "imagenes/coffee8.jpg"
  },
  {
    id: 9,
    name: "Mokkaccino Especial",
    description: "Servido en copa, mezcla de café, chocolate cremoso y crema batida encima.",
    rating: "4.9 ★★★★★",
    origin: "Mezcla Especial",
    prepTime: "7 mins",
    ingredients: [
      "1 Shot de espresso cargado",
      "30ml de sirope de chocolate espeso",
      "120ml de leche caliente",
      "Crema chantilly",
      "Chispas o virutas de chocolate amargo"
    ],
    details: "Postre en taza servido tradicionalmente en copa de cristal templado.",
    image: "imagenes/coffee9.jpg"
  },
  {
    id: 10,
    name: "Frappé de Caramelo",
    description: "Bebida helada batida con leche, café, caramelo líquido y sorbete refrescante.",
    rating: "4.6 ★★★★☆",
    origin: "Mezcla de la casa",
    prepTime: "5 mins",
    ingredients: [
      "2 Shots de espresso concentrado",
      "100ml de leche entera",
      "1 taza de hielo picado",
      "Jarabe y salsa de caramelo",
      "Base frappé neutra"
    ],
    details: "Batido a alta velocidad para lograr una consistencia cremoso-helada sin trozos grandes de hielo.",
    image: "imagenes/coffee10.jpg"
  }
];

// Función para renderizar las cards
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

  // Redireccionar al hacer clic en la tarjeta
  container.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
      const id = card.dataset.id;
      window.location.href = `detalle.html?id=${id}`;
    }
  });
}

document.addEventListener('DOMContentLoaded', renderCoffees);