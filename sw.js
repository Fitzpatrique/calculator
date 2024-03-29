self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("statics").then(cache => {
            return cache.addAll(["./","./index.css","./images/Eval.png","./index.js"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
