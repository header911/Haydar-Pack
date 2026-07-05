const HP_CACHE = 'haydar-pack-pwa-v42-code-audit';
const HP_ASSETS = ['./','./index.html','./index.html?v=42audit','./config.js','./manifest.webmanifest','./manifest.webmanifest?v=42audit','./offline.html','./assets/css/styles.css','./assets/css/styles.css?v=42audit','./hp-logo-v3-192.png','./hp-logo-v3-192.png?v=42audit','./hp-logo-v3-512.png','./hp-logo-v3-512.png?v=42audit','./icon-192.png','./icon-192.png?v=42audit','./icon-512.png','./icon-512.png?v=42audit','./assets/js/01-core.js','./assets/js/01-core.js?v=42audit','./assets/js/02-pwa-register.js','./assets/js/02-pwa-register.js?v=42audit','./assets/js/03-client-edit.js','./assets/js/03-client-edit.js?v=42audit','./assets/js/04-finance-capital-docs.js','./assets/js/04-finance-capital-docs.js?v=42audit','./assets/js/05-safe-import-boot.js','./assets/js/05-safe-import-boot.js?v=42audit','./assets/js/06-delete-doclogo-sync.js','./assets/js/06-delete-doclogo-sync.js?v=42audit','./assets/js/07-doc-client-numbering.js','./assets/js/07-doc-client-numbering.js?v=42audit','./assets/js/08-doc-header-client-profit.js','./assets/js/08-doc-header-client-profit.js?v=42audit','./assets/js/09-boot-guard.js','./assets/js/09-boot-guard.js?v=42audit','./assets/js/10-calculations.js','./assets/js/10-calculations.js?v=42audit','./assets/js/11-printing.js','./assets/js/11-printing.js?v=42audit','./assets/js/12-sync-import.js','./assets/js/12-sync-import.js?v=42audit','./assets/js/13-stage6-features.js','./assets/js/13-stage6-features.js?v=42audit','./assets/js/14-v35-fixes.js','./assets/js/14-v35-fixes.js?v=42audit','./assets/js/15-v36-feature-integrity.js','./assets/js/15-v36-feature-integrity.js?v=42audit','./assets/js/16-v39-data-protection-lock.js','./assets/js/16-v39-data-protection-lock.js?v=42audit','./assets/js/17-v40-image-separation.js','./assets/js/17-v40-image-separation.js?v=42audit','./assets/js/18-v41-backup-center-simple-ui.js','./assets/js/18-v41-backup-center-simple-ui.js?v=42audit'];
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
    }).catch(() => caches.match('./index.html?v=42audit').then(r => r || caches.match('./index.html')).then(r => r || caches.match('./offline.html'))))
  );
});
