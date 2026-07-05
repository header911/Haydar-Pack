const HP_CACHE = 'haydar-pack-pwa-v45-1-flat';
const HP_ASSETS = [
  './',
  './index.html',
  './index.html?v=45_1flat',
  './config.js',
  './manifest.webmanifest',
  './manifest.webmanifest?v=45_1flat',
  './offline.html',
  './styles.css',
  './styles.css?v=45_1flat',
  './hp-logo-v3-192.png',
  './hp-logo-v3-192.png?v=45_1flat',
  './hp-logo-v3-512.png',
  './hp-logo-v3-512.png?v=45_1flat',
  './01-core-base.js',
  './02-business-legacy.js',
  './03-boot-calc-print.js',
  './04-sync-import.js',
  './05-feature-patches.js',
  './06-data-protection-images-backup.js',
  './07-clients-final.js',
  './01-core-base.js?v=45_1flat',
  './02-business-legacy.js?v=45_1flat',
  './03-boot-calc-print.js?v=45_1flat',
  './04-sync-import.js?v=45_1flat',
  './05-feature-patches.js?v=45_1flat',
  './06-data-protection-images-backup.js?v=45_1flat',
  './07-clients-final.js?v=45_1flat'
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
    }).catch(() => caches.match('./index.html?v=45_1flat').then(r => r || caches.match('./index.html')).then(r => r || caches.match('./offline.html'))))
  );
});
