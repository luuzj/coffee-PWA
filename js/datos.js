// js/datos.js
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
    image: "imagenes/coffee3.jpg"
  },
  {
    id: 2,
    name: "Café Americano",
    description: "Espresso diluido con agua caliente, suave y fácil de tomar todo el día.",
    rating: "4.5 ★★★★☆",
    origin: "Brasil (Minas Gerais)",
    prepTime: "2-3 mins",
    ingredients: [
      "1 Shot de espresso doble",
      "150ml de agua caliente"
    ],
    details: "Notas de chocolate amargo y caramelo. Cuerpo ligero y acidez baja.",
    image: "imagenes/coffee2.jpg"
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Espresso con leche vaporizada y una gruesa capa de espuma cremosa.",
    rating: "4.9 ★★★★★",
    origin: "Italia (mezcla tradicional)",
    prepTime: "4-6 mins",
    ingredients: [
      "1 Shot de espresso",
      "60ml de leche al vapor",
      "60ml de espuma de leche",
      "Cacao en polvo (opcional)"
    ],
    details: "Textura sedosa con notas de nuez y vainilla. Equilibrio perfecto entre café y leche.",
    image: "imagenes/coffee3.jpg"
  },
  {
    id: 4,
    name: "Latte",
    description: "Café suave con mucha leche vaporizada y una capa delgada de espuma.",
    rating: "4.7 ★★★★★",
    origin: "Guatemala (Antigua)",
    prepTime: "4-5 mins",
    ingredients: [
      "1 Shot de espresso doble",
      "200ml de leche al vapor",
      "Una capa fina de espuma"
    ],
    details: "Dulce y cremoso, con notas de caramelo y cacao suave.",
    image: "imagenes/coffee4.jpg"
  },
  {
    id: 5,
    name: "Mocha",
    description: "La mezcla perfecta de espresso, chocolate y leche vaporizada.",
    rating: "4.6 ★★★★☆",
    origin: "Etiopía (Yirgacheffe)",
    prepTime: "5-6 mins",
    ingredients: [
      "1 Shot de espresso doble",
      "30g de chocolate o jarabe de chocolate",
      "180ml de leche al vapor",
      "Crema batida (opcional)"
    ],
    details: "Sabor dulce a chocolate con un fondo de café afrutado.",
    image: "imagenes/coffee5.jpg"
  },
  {
    id: 6,
    name: "Macchiato",
    description: "Espresso intenso \"manchado\" con un toque de espuma de leche.",
    rating: "4.4 ★★★★☆",
    origin: "Costa Rica (Tarrazú)",
    prepTime: "2-3 mins",
    ingredients: [
      "1 Shot de espresso",
      "1 cucharada de espuma de leche"
    ],
    details: "Sabor fuerte y brillante, con notas cítricas y final dulce.",
    image: "imagenes/coffee6.jpg"
  },
  {
    id: 7,
    name: "Flat White",
    description: "Espresso doble con leche microespumada, más intenso que un latte.",
    rating: "4.8 ★★★★★",
    origin: "Australia (mezcla de la casa)",
    prepTime: "4-5 mins",
    ingredients: [
      "2 Shots de espresso",
      "120ml de leche microespumada"
    ],
    details: "Textura aterciopelada con notas de avellana y chocolate con leche.",
    image: "imagenes/coffee7.jpg"
  },
  {
    id: 8,
    name: "Café de Olla",
    description: "Café mexicano tradicional con canela y piloncillo, cocido en olla de barro.",
    rating: "4.9 ★★★★★",
    origin: "México (Chiapas)",
    prepTime: "10-15 mins",
    ingredients: [
      "1 litro de agua",
      "3 cucharadas de café molido",
      "1 raja de canela",
      "50g de piloncillo"
    ],
    details: "Dulce y especiado, con aroma a canela y un toque ahumado de la olla de barro.",
    image: "imagenes/coffee8.jpg"
  },
  {
    id: 9,
    name: "Cold Brew",
    description: "Café extraído en frío durante muchas horas, suave y poco ácido.",
    rating: "4.6 ★★★★☆",
    origin: "Perú (Cajamarca)",
    prepTime: "12 horas (reposo)",
    ingredients: [
      "100g de café molido grueso",
      "1 litro de agua fría",
      "Hielo al servir"
    ],
    details: "Muy suave y refrescante, con notas de chocolate, frutos secos y poca acidez.",
    image: "imagenes/coffee9.jpg"
  },
  {
    id: 10,
    name: "Affogato",
    description: "Postre italiano: una bola de helado de vainilla bañada con espresso caliente.",
    rating: "4.7 ★★★★★",
    origin: "Italia",
    prepTime: "3-4 mins",
    ingredients: [
      "1 bola de helado de vainilla",
      "1 Shot de espresso caliente"
    ],
    details: "Contraste entre lo caliente y lo frío, dulce y amargo, con notas de vainilla y tostado.",
    image: "imagenes/coffee10.jpg"
  }
];