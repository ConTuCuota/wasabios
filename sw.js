self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('zen-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/index_en.html',
        '/styles.css',
        '/images/jardin1.jpg',
        '/images/jardin2.jpg',
        '/images/jardin3.jpg',
        '/favicon.ico'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});