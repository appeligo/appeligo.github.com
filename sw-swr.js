self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open('dirck-appeligo.com').then(cache => {
            return cache.match(event.request).then(cacheResponse => {
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                })
                return cacheResponse || fetchPromise;
            })
        })
    )
})