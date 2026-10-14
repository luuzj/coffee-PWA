const CACHE_NAME = 'dev-coffe-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './manifest.json',
  './imagenes/icons/icon-192x192.png',
  './imagenes/icons/icon-512x512.png'
];

// Evento de instalación: guarda recursos clave en el caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Evento de activación: limpia cachés antiguas si cambias de versión
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Borrando caché antigua:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia combinada: Network First para HTML y Cache First para el resto
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. NETWORK FIRST: Para solicitudes de navegación (archivos HTML / vistas principales)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // 2. CACHE FIRST: Para recursos estáticos (CSS, JS, imágenes, iconos)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).then((networkResponse) => {
        // Opcional: puedes guardar dinámicamente nuevos recursos si lo deseas
        return networkResponse;
      });
    })
  );
});