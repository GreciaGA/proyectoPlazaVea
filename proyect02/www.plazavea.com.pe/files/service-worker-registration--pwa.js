if (navigator.serviceWorker) {
  //navigator.serviceWorker.register('/files/service-worker.js', { scope: '../pwa/' })
  navigator.serviceWorker.register('/files/service-worker.js', { scope: '/' })
  .then(function (registration) {
    console.log('ServiceWorker registration successful with scope:', registration.scope);
  }).catch(function (error) {
    console.log('ServiceWorker registration failed:', error);
  });
}