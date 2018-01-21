var cacheName = 'test-cache-v1';
var dataCacheName = 'test-dataCache-v1';
var filesToCache = [
  '/',
  '/index.html',
  '/scripts/app.js',
];

self.addEventListener('install', function(e) {
  console.log('[SW] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[SW] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[SW] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[SW] Removing old cache', key);
          return caches.delete(key);
        }
      }))
    })
  )
});

self.addEventListener('fetch', function(e) {
  console.log('[SW] Fetch');
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});


/*

self.addEventListener('fetch', function(e) {
  console.log('[SW] Fetch');
  var dataUrl = 'https://query.yahooapis.com/v1/public/yql';

  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response) {
          cache.put(e.request.url, response.clone());
          return response;
        })
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});
*/