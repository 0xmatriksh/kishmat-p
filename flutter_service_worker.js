'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "10091be169f04193be502fc39aa5da85",
".git/config": "2e1ed83f4116a276a4a19afa095cc4c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "6cbe01ba624bc417be879898156d389e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d89dae9ce3b2c0ee004c17e65e35408",
".git/logs/refs/heads/master": "1d89dae9ce3b2c0ee004c17e65e35408",
".git/logs/refs/remotes/origin/master": "2075f05c080fefd94e8aa79126e1935c",
".git/objects/08/1af6c521815bb7c54725b862b9b0c299308b8a": "de0fd7aa33532a21c8d933350e4eee39",
".git/objects/13/1db17257b972537a78978e7a011ecfa605bea1": "9b211c6bab35d0237063732d739e97dc",
".git/objects/1e/76fe8c2dbe189d4658ce32b43f2a7529882504": "e88fb56f1a34ffc7f1704ddc5f5e42a5",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4c/1179d30dd9b20420f8fdff35a93f5e36c2d0dc": "0a2d792e90a3b5da19845bb59b2028d9",
".git/objects/59/c75bfd1ae5b654ab766e20e6be587325ebb9d3": "94a20585498f7ab24d41284332dc82f5",
".git/objects/5d/82d4f4bdaed3412ae2e9c9486f56c2b45cbf0b": "af0916a8cf46a15b2635fca055798b07",
".git/objects/6b/f094d20c89883756ec5a105ec2cea1f9eeaf76": "96dbfc781b558de61c524af5ccc7e70c",
".git/objects/6f/53c5fac7d63a76205dfe27183c149725273647": "d400d2f63d8dc7c64e8c469770253824",
".git/objects/73/0c00241db8881be310fb483469b0f320909647": "f398949d107486952a1451f1d2e774a3",
".git/objects/75/8fe056f0e0148b91e7e05ccc53af749b863f41": "2cbd904a49643a7bee4fe3e31c62f374",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/8a6b8dce9288689ac9350d3fdf6a676489580e": "6d397e8556f9100c306a57141e5307f6",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/a5627e6bff5c1ca9546c79fd12fd6d715a68b9": "8248057165db82757aa34e2455f7c06e",
".git/objects/98/98d6951094bce19dd2768cfb1b6475f52c26f1": "bdb8cee1946829f94b6992ecab9e647b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/67ad9edc85f3bd909e8c4ca7a73cc9b0205ee7": "77ff0f921b770b9f188e3a41e796d349",
".git/objects/a7/e08ac403d6ed29ab0b59b900b9761dcafa227c": "df3ecd7f48f79bd123e9363078e8fd1c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/a69c36c0859aca9f55f84b7141546b29047002": "4d9c0ddf42e95a0f48da39e9817121e4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/0ae4721c64bc7018f0f9a41965667028178a46": "2910296f09ba731c77d402791ae4fa02",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/ac3b478ec2154c7b2d0afc064b6814f3053a95": "05753dacadcbc2a939613d381fcfbfdd",
".git/objects/c7/62a2abe4a294ab1d5fa8716934631c1b3bf77b": "1e106709be27c6dbf407a9b63fc42d64",
".git/objects/d2/5a9315e44752939f775f80ce4a3ecf50089c2c": "382c9a6f9e7603c9f55b2f55f6a2869f",
".git/objects/d8/c67baa04242f4b0acfd78a707b8ef610c22353": "8dcb3539a715ad49400934b076ceb778",
".git/objects/dd/dc961f7aeeee0e90a5fc973baecfb92362bc97": "bb1ce1f205794a95b059e5bc8c2fbe70",
".git/objects/de/79313b3c71234e6d5072246cb106d5208493b0": "f7e41457338f6af777e87011b21eeabe",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/c597b05a8bff060a6a01b37c5829b998d18337": "2470d95abe7728e52e42a8a9a05e8fff",
".git/refs/heads/master": "4220f07aca8c2b4b4f637316a623af78",
".git/refs/remotes/origin/master": "4220f07aca8c2b4b4f637316a623af78",
"assets/AssetManifest.json": "6dbb90defc0deaf0b79d3401dd0ae3e3",
"assets/assets/ecommerce.JPG": "f8bcc95457408f096d8b85ef7cf7b9c5",
"assets/assets/github.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/assets/IMG_o0edbv.jpg": "f7176ca6e14a3e2f20f057e47f81d5f2",
"assets/assets/kishmat.png": "aec77056a99576b2a94acafd98579cef",
"assets/assets/linkedin.jpg": "14f8d0d8ea255a03471032d79087fdf0",
"assets/assets/myproject1.PNG": "10936b294d6167a620598a1ca7e35248",
"assets/assets/person.jpg": "1fbc7baaacef433de125b37df24131fe",
"assets/assets/Project.JPG": "12d2e64628f3c30982fe82507bcf71b6",
"assets/assets/twitter.png": "839e3381beaa71a55cde7e4a6c737c26",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0db9ce01d49d00d4a5063c7c89ffe714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/index.html": "291f3a52a1941da4ca4d4f8b1e963d35",
"/": "96faf25418ff2e684ced85c930a6079a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "96faf25418ff2e684ced85c930a6079a",
"main.dart.js": "03e403abb1fc89edc257775d8d02e276",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
