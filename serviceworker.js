// Sube este número cada vez que cambies archivos, para que el celular descargue la versión nueva
const CACHE_NAME = 'dev-coffe-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './detalle.html',
  './css/style.css',
  './js/datos.js',
  './js/app.js',
  './js/detalle.js',
  './manifest.json',
  './imagenes/icons/icon-192x192.png',
  './imagenes/icons/icon-512x512.png',
  './imagenes/coffe3.jpg',
  './imagenes/coffee1.jpg',
  './imagenes/coffee2.jpg',
  './imagenes/coffee4.jpg',
  './imagenes/coffee5.jpg',
  './imagenes/coffee6.jpg',
  './imagenes/coffee7.jpg',
  './imagenes/coffee8.jpg',
  './imagenes/coffee9.jpg',
  './imagenes/coffee10.jpg'
];

// Instalación: guarda recursos clave en el caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activación: borra cachés de versiones anteriores
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Borrando caché antigua:', cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Network First (con respaldo en caché) para HTML, CSS y JS.
// Cache First solo para imágenes e iconos.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isImage = event.request.destination === 'image';

  if (!isImage) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return networkResponse;
        })
        .catch(() =>
          caches.match(event.request).then((cached) => cached || caches.match('./index.html'))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).then((networkResponse) => {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return networkResponse;
        })
      );
    })
  );
});