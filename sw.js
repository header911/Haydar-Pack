const HP_CACHE = 'haydar-pack-pwa-v48-stability-cleanup';
const HP_ASSETS = [
  './',
  './index.html',
  './index.html?v=48stableguard',
  './config.js',
  './manifest.webmanifest',
  './manifest.webmanifest?v=48stableguard',
  './offline.html',
  './assets/css/styles.css',
  './assets/css/styles.css?v=48stableguard',
  './hp-logo-v3-192.png',
  './hp-logo-v3-192.png?v=48stableguard',
  './hp-logo-v3-512.png',
  './hp-logo-v3-512.png?v=48stableguard',
  './assets/js/01-core-base.js',
  './assets/js/01-core-base.js?v=48stableguard',
  './assets/js/02-business-legacy.js',
  './assets/js/02-business-legacy.js?v=48stableguard',
  './assets/js/03-boot-calc-print.js',
  './assets/js/03-boot-calc-print.js?v=48stableguard',
  './assets/js/04-sync-import.js',
  './assets/js/04-sync-import.js?v=48stableguard',
  './assets/js/05-feature-patches.js',
  './assets/js/05-feature-patches.js?v=48stableguard',
  './assets/js/06-data-protection-images-backup.js',
  './assets/js/06-data-protection-images-backup.js?v=48stableguard',
  './assets/js/07-clients-final.js',
  './assets/js/07-clients-final.js?v=48stableguard'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(HP_CACHE).then(cache => cache.addAll(HP_ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== HP_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(HP_CACHE).then(cache => { try { cache.put(event.request, copy); } catch(e){} });
      return response;
    }).catch(() => caches.match('./index.html?v=48stableguard').then(r => r || caches.match('./index.html')).then(r => r || caches.match('./offline.html'))))
  );
});
