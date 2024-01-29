'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "73597b73ef32adc79f38fa1d5aa61da4",
"assets/AssetManifest.json": "6f180aac8180bc52a948c47fce4b1d72",
"assets/assets/collection/collection.txt": "098e9a066e5faae34dc8b5d49dd66967",
"assets/assets/credentials/credentials.json": "45e096c2d9d439bbb231d89067f80dc5",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/candado.png": "3adef9540f5293c24ed18b2ff2454d83",
"assets/assets/images/celu.png": "b4865bed0eaa9a095112072881738131",
"assets/assets/images/computador.png": "e6fab6f5e05aacabeee36502a96f5866",
"assets/assets/images/conexion.jpg": "b59ff937c0e3c603fdda38223061f62f",
"assets/assets/images/descarga.png": "c1ff29fb166a15f30bcc461996933ca5",
"assets/assets/images/email.png": "8f4a5ca8523684c6805eb25d76a8d8ea",
"assets/assets/images/grupoBancolombia.svg": "7674eeb90816f168224b6c31fe9d8adb",
"assets/assets/images/hoja.png": "add31c3ade707e94ecb28b490d324391",
"assets/assets/images/IconBancolombia.42a39b61ba3af28e7ce1dc79953053eb_(1).svg": "05aa12222a173de25898feed416da8eb",
"assets/assets/images/id.png": "4e08bb4972906feeda4c2ad701317117",
"assets/assets/images/imageFooterMobile.png": "23af59e108f2b2fa4e64ed123eaf7ce6",
"assets/assets/images/imagenrie.png": "f021c272a484ab9e4230027e01e5af86",
"assets/assets/images/logo-bancolombiaWhite-1024x237.png": "29d413305bbd94ed91f92768aac0037e",
"assets/assets/images/logolargo.svg": "df853040fd0cc39893e9733af3064ab5",
"assets/assets/images/martillo.png": "232b0139792879572a331336ceb61071",
"assets/assets/images/numeros.png": "65affd66cd14b89e8652db86963446d0",
"assets/assets/images/nundoc.png": "c3ac92f74a5a698da862ddefb278987e",
"assets/assets/images/Screenshot_1.jpg": "6748421b0eb751d5a25bc63bc9b27cbc",
"assets/assets/images/Screenshot_2.jpg": "032c3d1e51af06767b6dc5217eab4dd8",
"assets/assets/images/Screenshot_3.jpg": "a1279139a6fab9d68315f8bc3607e0f2",
"assets/assets/images/trazo.51bfee6e83ae3ece80ddec22c48a6d1b.svg": "10a0f4f4ea1c2a81b675c8ecafd22468",
"assets/assets/images/trazo.51bfee6e83ae3ece80ddec22c48a6d1bnuevo.png": "65d53db7aa18b444057c2f6ef6b2b7e3",
"assets/assets/images/vigilado.691ba87177cfc7656937fafcb0c6925a.svg": "990c8033924a04454ce72c4f59d94d97",
"assets/assets/lottie_animations/Animationload.json": "60baac37b22ce567e6fc28b4ab1159c1",
"assets/assets/lottie_animations/loaddina.json": "156867c59e2afed3ae3c7b09045c5eca",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "62f306fa15113288a62f131c3ec89b04",
"assets/NOTICES": "5a2ed604fac80b1f9494e5a7a58ce994",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "7c4a2df28f03b428a63fb10250463cf5",
"canvaskit/canvaskit.wasm": "f93cce574798cbc3f46e44765b523058",
"canvaskit/chromium/canvaskit.js": "2236901a15edcdf16e2eaf18ea7a7415",
"canvaskit/chromium/canvaskit.wasm": "addd330d70d04918ab2059efeba5105f",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "c3803dbb1ac015d00c055bea11adb934",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "a71f0a2dbe0b3e87fd13e80d9758dc86",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "9abdd2d77454e154b995ceb2ac686243",
"icons/Icon-512.png": "6198178b0852a31e5c754400b1746b46",
"icons/Icon-maskable-192.png": "92840835eeee3069aeb0b6e691440e3d",
"icons/Icon-maskable-512.png": "1c2bf936970a02d62f3f3e9f637055a2",
"index.html": "d0bf4b1eb69e23ee012f5a8eee0b9fae",
"/": "d0bf4b1eb69e23ee012f5a8eee0b9fae",
"main.dart.js": "025400b0b89583968c802209090f3860",
"manifest.json": "1196da0df853452e0066532149b64976",
"version.json": "26a552ede764bd589102929a85be0e39"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
