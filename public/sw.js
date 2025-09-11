const CACHE_NAME = 'menumitra-v2';
const STATIC_CACHE = 'menumitra-static-v2';
const DYNAMIC_CACHE = 'menumitra-dynamic-v2';

const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://img.youtube.com/vi/j2e2stCcICo/maxresdefault.jpg'
];

// Cache strategies for different resource types
const CACHE_STRATEGIES = {
  // Static assets - cache first
  static: (request) => {
    return caches.match(request).then(response => {
      if (response) {
        return response;
      }
      return fetch(request).then(fetchResponse => {
        if (fetchResponse.ok) {
          const cache = caches.open(STATIC_CACHE);
          cache.then(c => c.put(request, fetchResponse.clone()));
        }
        return fetchResponse;
      });
    });
  },
  
  // Third-party resources - stale while revalidate
  thirdParty: (request) => {
    return caches.match(request).then(response => {
      const fetchPromise = fetch(request).then(fetchResponse => {
        if (fetchResponse.ok) {
          const cache = caches.open(DYNAMIC_CACHE);
          cache.then(c => c.put(request, fetchResponse.clone()));
        }
        return fetchResponse;
      });
      return response || fetchPromise;
    });
  },
  
  // Images - cache first with long TTL
  images: (request) => {
    return caches.match(request).then(response => {
      if (response) {
        return response;
      }
      return fetch(request).then(fetchResponse => {
        if (fetchResponse.ok) {
          const cache = caches.open(DYNAMIC_CACHE);
          cache.then(c => c.put(request, fetchResponse.clone()));
        }
        return fetchResponse;
      });
    });
  }
};

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests with optimized cache strategies
  if (url.origin === location.origin) {
    // Same origin - static assets
    if (url.pathname.startsWith('/static/')) {
      event.respondWith(CACHE_STRATEGIES.static(request));
    } else {
      // HTML pages - network first
      event.respondWith(
        fetch(request)
          .then(response => {
            if (response.ok) {
              const responseClone = response.clone();
              caches.open(DYNAMIC_CACHE)
                .then(cache => cache.put(request, responseClone));
            }
            return response;
          })
          .catch(() => caches.match(request))
      );
    }
  } else {
    // Third-party resources
    if (url.hostname.includes('youtube.com') || url.hostname.includes('img.youtube.com')) {
      // YouTube resources - cache first with long TTL
      event.respondWith(CACHE_STRATEGIES.images(request));
    } else if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('cdnjs.cloudflare.com')) {
      // Fonts and CDN resources - stale while revalidate
      event.respondWith(CACHE_STRATEGIES.thirdParty(request));
    } else {
      // Other third-party resources - network first
      event.respondWith(
        fetch(request)
          .then(response => {
            if (response.ok) {
              const responseClone = response.clone();
              caches.open(DYNAMIC_CACHE)
                .then(cache => cache.put(request, responseClone));
            }
            return response;
          })
          .catch(() => caches.match(request))
      );
    }
  }
});
