addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (url.origin === location.origin && url.pathname === '/share-target' && event.request.method === 'POST') {
        event.respondWith(Response.redirect('/converter'));
        event.waitUntil(async function() {
            const data = await event.request.formData();
            const client = await self.clients.get(event.resultingClientId);
            const file = data.get('file');
            client.postMessage({file});
        }());
    }
});