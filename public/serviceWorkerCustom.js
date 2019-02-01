
const cacheName = 'weatherPWA-final-1';
const filesToCache = [
  'index.html',
  '/static/js/0.chunk.js',
  '/static/js/bundle.js',
  '/staic/main.chunk.js',
];


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
