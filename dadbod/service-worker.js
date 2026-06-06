const CACHE_NAME = 'dadbod-v3';

// ── Install: skip waiting immediately ────────────────────────────────────────
self.addEventListener('install', () => self.skipWaiting());

// ── Activate: nuke old caches, claim clients ─────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: network-first, fall back to cache ─────────────────────────────────
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(res => {
        if (res && res.status === 200 && event.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});

// ── Alarm system ─────────────────────────────────────────────────────────────
// App sends alarms via postMessage. SW fires them at the right local time.
// Each alarm: { id, fireAt (ms timestamp), title, body, repeat: 'daily' | null }
let alarms = [];

function checkAlarms() {
  const now = Date.now();
  alarms.forEach(alarm => {
    if (alarm.fireAt <= now) {
      self.registration.showNotification(alarm.title, {
        body: alarm.body,
        icon: '/dadbod/icon-192.png',
        badge: '/dadbod/icon-192.png',
        vibrate: [200, 100, 200],
        tag: alarm.id,
        renotify: true,
      });
      if (alarm.repeat === 'daily') {
        alarm.fireAt += 24 * 60 * 60 * 1000;
      } else {
        alarms = alarms.filter(a => a.id !== alarm.id);
      }
    }
  });
}

// Check every 30 seconds
setInterval(checkAlarms, 30000);

// ── Message handler ───────────────────────────────────────────────────────────
self.addEventListener('message', event => {
  const { type, payload } = event.data || {};
  if (type === 'SET_ALARMS') {
    alarms = payload || [];
    checkAlarms(); // fire immediately if overdue
  }
  if (type === 'CLEAR_ALARMS') {
    alarms = [];
  }
});

// ── Notification click ────────────────────────────────────────────────────────
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/dadbod/'));
});
