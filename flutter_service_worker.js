'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7df77f870c1811d81cc2d3e4f022a5e4",
"assets/assets/cpp_es.json": "df4aa48456ee03431d6a82fadff9bbf7",
"assets/assets/fonts/Cookie-Regular.ttf": "1a26c990eb18bc85f1fe12a3416d57cf",
"assets/assets/images/3.png": "46c19ba5fa3d35ccd30b727109aef9fb",
"assets/assets/images/4.png": "d0d392227998520aa823db10d6c5e3af",
"assets/assets/images/B99A0068.JPG": "101138e8b5251b38e08dd7fbb66f3f16",
"assets/assets/images/Conocenos.jpg": "6872520fc36026b0a676416882ffb1f0",
"assets/assets/images/Conocenos2.jpg": "79d4105b025ea95d3e42b30b280d831b",
"assets/assets/images/Dise%25C3%25B1oFondo.png": "8bc61e02b8f2296be9903ae6d4680e5f",
"assets/assets/images/DisenoFondo2.png": "46c149f47df515fcad0f428aaa6f1e9d",
"assets/assets/images/Fondo1.jpg": "7653ea421252bcd491dbcf69481f274a",
"assets/assets/images/hombre.png": "8bf0e1b7245543364519bc2af2e99558",
"assets/assets/images/ImagenApp.jpg": "1c77ddffe5b6e4063a24120100eb9060",
"assets/assets/images/LogoEntrenaAppFondoBlanco.png": "07b6d5614eae73e5acfd7d0ff2cfd14f",
"assets/assets/images/LogoEntrenaAppFondoNegro.png": "059b5490b22e917f92417aa53b9afbde",
"assets/assets/images/man.png": "6459a78b8d655079c08d4249cbcc0db5",
"assets/assets/images/MostMuscular.jpg": "51246c242dfa77ebb6babb7fa7cf10cb",
"assets/assets/images/mujer.png": "5b550aab049b5881d1a25f578c962823",
"assets/assets/images/sorteoForocoches.jpg": "e3f72a39e966693b62bec117935f11f0",
"assets/assets/resources/langs/en.json": "9e6e46712a3ff19941b98814e404277e",
"assets/assets/resources/langs/es.json": "ed1476599f7efbc5e4ce623bd2f0bd88",
"assets/FontManifest.json": "7815851ec51e433729b023fb53abac53",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4d989877a07cabe94ba086e1ff6be048",
"assets/packages/auth_buttons/images/default/apple.svg": "55dba81be7ba24dd88dbf9cc81de95e8",
"assets/packages/auth_buttons/images/default/email.svg": "3082146f3f124a005b10db6fe3109fe7",
"assets/packages/auth_buttons/images/default/facebook.svg": "042d64dc3864e72dee8ed5a25b514b11",
"assets/packages/auth_buttons/images/default/github_black.svg": "8dd7ed5ef65c02f30b4121eee588af6a",
"assets/packages/auth_buttons/images/default/google.svg": "1b57b430c55cb377ac0a88930bcdbd20",
"assets/packages/auth_buttons/images/default/huawei.svg": "82181eb0cd9622dfd588444a4dfe42a5",
"assets/packages/auth_buttons/images/default/microsoft.svg": "4f6ca3fa4b69eb5fca87e32ff32a044b",
"assets/packages/auth_buttons/images/default/twitter.svg": "4250a2b8958bcbef1a0fdb25d7fcce7b",
"assets/packages/auth_buttons/images/outlined/apple.svg": "db47e542919fcaf7d34748536b1deb49",
"assets/packages/auth_buttons/images/outlined/email.svg": "baff162b99d4cb10734919644984b8c7",
"assets/packages/auth_buttons/images/outlined/facebook.svg": "f251b931be2bae01fb489fe3a673ebb3",
"assets/packages/auth_buttons/images/outlined/github.svg": "7f95e5f428d5e503704489ae9059d680",
"assets/packages/auth_buttons/images/outlined/google.svg": "db08beb87c3bf1cffb0eab33ba45e21d",
"assets/packages/auth_buttons/images/outlined/huawei.svg": "9808b2adfd6d50759ac212f2524d89aa",
"assets/packages/auth_buttons/images/outlined/microsoft.svg": "da1f5b1904d6db32f0a328843ef6c194",
"assets/packages/auth_buttons/images/outlined/twitter.svg": "17f1f53b9a9a48f7eb9bef23297adc13",
"assets/packages/auth_buttons/images/secondary/apple.svg": "ada971dac266ff0002cbe1242969fac4",
"assets/packages/auth_buttons/images/secondary/email.svg": "9a8b80e244ab3faef8f215ec9042d826",
"assets/packages/auth_buttons/images/secondary/facebook.svg": "d716044a24525120c68a8aecd0f3ad20",
"assets/packages/auth_buttons/images/secondary/github.svg": "aa9249981ef0010785ac08f5ad311fd9",
"assets/packages/auth_buttons/images/secondary/google.svg": "3d9f5981ce3d70492c4f2669eda64ce8",
"assets/packages/auth_buttons/images/secondary/huawei.svg": "873b380209f2ece370272067b97cc9a9",
"assets/packages/auth_buttons/images/secondary/microsoft.svg": "363865e791ab614f76714d47f31cfe5b",
"assets/packages/auth_buttons/images/secondary/twitter.svg": "7e2e9892b0a7f923f55720429f42f4f3",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "37b27401b90127a4490716a9a7bdf96c",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3ca6d5d18f3938a7591c877897a6a99c",
"/": "3ca6d5d18f3938a7591c877897a6a99c",
"main.dart.js": "e819b3013cc2e0622b76d77204665f7f",
"manifest.json": "ebcf31622a95108114c7032090ad2ffb",
"version.json": "86630990e42b1b1894327632b1c23b48"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
