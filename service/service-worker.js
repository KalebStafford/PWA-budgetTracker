let filesToCache = [
    "../public/js/index.js",
    "../public/css/styles.css",
    "../public/index.html",
  ];
  
  self.addEventListener("active", (eventListener) => {
    eventListener.waitUntil(
      caches.keys().then((cacheKeys) => {
        let appPrefix = "Challenge-19";
        let version = "1";
        let cacheKeepKeys = cacheKeys.filter((cacheKey) => {
          return cacheKey.indexOf(appPrefix);
        });
        let cacheName = appPrefix + version;
        cacheKeepKeys.push(cacheName);
        return Promise.all(
          cacheKeys.map((cacheKeys, i) => {
            if (cacheKeepKeys.indexOf(cacheKeys) === -1) {
              return caches.delete(cacheKeys[i]);
            }
          })
        );
      })
    );
    console.log(eventListener);
  });