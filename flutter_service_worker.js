'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "d0b3bf92014e698856d505a65b5f0ee9",
"canvaskit/canvaskit.wasm": "567c5aeda8f673d1b76256d2682fd3b9",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "e3a8db3bea434c929936f69d84e2f2bd",
"canvaskit/chromium/canvaskit.wasm": "e86670fe2af62cbdd3b75e098f393924",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "f1b800f6a9fac877f65a545b9f76c703",
"canvaskit/skwasm.wasm": "5a5c6171d2eed658e3b5fff70c4af82c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"main.dart.js": "1c82155ebcd14e15fdd133fc7bf59121",
"version.json": "9b818ca9511483c901bed1545384376c",
"assets/assets/icons/cancel_icon.svg": "23fc7998a35746be2994337b5f70f0ce",
"assets/assets/images/dart.png": "8f52a95f3cc0e0d6ab2e3cb8d4c7a590",
"assets/assets/images/flutter.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/images/firebase.png": "9757f579c063858951127af838b005a8",
"assets/assets/images/flutter_avatar.png": "6bb0a63c2184e319aa11707013e74966",
"assets/assets/images/android.png": "ac321c0f9aa755903eb80c8e4284bc00",
"assets/assets/images/desktop.png": "b9c1fc500ca67d3c9d7d1a691bc93d5a",
"assets/assets/images/ios.png": "d163d9a1dce5ef54195487ef994dfa87",
"assets/assets/images/web.png": "c01ef09b7cec029f8e417dd76825ae63",
"assets/assets/images/git.png": "194b755004863bf00014cf04a9e022be",
"assets/assets/images/php.png": "4182a9289ad01b3a03e18301be9e0afd",
"assets/assets/images/mysql.png": "02c5bb49899e55d18cb04767e7311d3d",
"assets/assets/images/github.png": "a76e194dbb119e0e917a8116534b110e",
"assets/assets/images/telegram.png": "391744ef61b95739e1e7d489dc118934",
"assets/assets/images/instagram.png": "c7f59191a1c7ff59b0776fae99465a9d",
"assets/assets/images/x.png": "594cdfc6ea398bee741f3e2a75b98dbe",
"assets/assets/images/linkedin.png": "26f19bb3b0f8f6d9af319ec19791a983",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "4bf5a6c7ab760654191e728461e3ba9b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "51de803007c41de454c88be5a4833282",
"assets/AssetManifest.bin": "ca76e8a80088978618e791ed26de9d27",
"assets/AssetManifest.bin.json": "2da2204886b45014f312baafb64a8945",
"assets/NOTICES": "13df58129453ec9900f86b211a1e60f9",
"assets/FontManifest.json": "97b7ae46de638b280c18538ade118d70",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"index.html": "012d5402fb2f40d69e4009cc18844fac",
"/": "012d5402fb2f40d69e4009cc18844fac",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/master": "87e6526f570848b73a5ae47d1d3c335c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
".git/objects/7d/cecc9cb4cf98d6c973aa62018ec8a10e2d6e31": "1e9b8de047130a1d868a619341d0d9dc",
".git/objects/af/9fe6aae4a594d432019f5e627bfd06916a9711": "2c4ebb3109be45f3c3cb2536260b79eb",
".git/objects/b6/e6d541f7fd6f9715a919d1f8d0e3951a6cc38c": "f42c74d53cc94d6b81537055313f0615",
".git/objects/14/fb635c40f8386bfe1eba830b4c1bb4b9a0574a": "f157eca5d3c45c01651ef78a57ab9911",
".git/objects/14/13cb10729d37eeeaaa00e86badd36978d0e917": "e6134b35ef4780c2a52877ab9a1da5a1",
".git/objects/14/17159f44647c034ae48c732836ce6b9254521f": "a6744501d8d06d5bb13403e6b55645f0",
".git/objects/24/c4c29ac0ca085fc0d73b469108d00821044423": "d1c9527b1547d1c7ec6a5325ff00034e",
".git/objects/6e/01956db06bfcac592e3af2178f6001f8a0c201": "a2e040c644ee32fc6a914c7b858b4ec7",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/12/c4d1122478c0bd99087cdacbd3ac53f271eb5d": "1110f1b8759ed7b9c35c2378b924d133",
".git/objects/6b/a297b7c6d490554cde8f393f59d7a12000d71a": "dcd12f60ac7af4307bc84f3c661e8c48",
".git/objects/6b/fbccb5f0c5ba08f56e95cc0ec97c9333398f07": "d3751b2dca3f78ff13935f625a7bfbea",
".git/objects/e2/33aad85cb2052608c67cb23cf57ff5d7d346d1": "45fa844642b98287284317de116a33f7",
".git/objects/5f/679621f62e6e7d4c00df24a16b7da1694e3dcc": "f9224b0d7dc1b73dcf7ae09abbc240b5",
".git/objects/40/a629bac8c1dddec28b5d093fbd46e123b8b1e7": "2fc9a00e47aaef741d6abf357f447703",
".git/objects/0f/c066ab604cd2d2da50242787437cd050bda454": "9188b7787ae4665e3d91a2dea7f31fbe",
".git/objects/1b/b31f93cafdb2cbffc043d6b402c995b0f7f641": "ddda08d2e86aa2a70be5e541eb715e56",
".git/objects/2d/5ef2e608e26de5f55af9dfb9445ac8e32c43ad": "1aee749a4ef588de4d816d9524d33ea5",
".git/objects/ae/027261f256bbd24abaab6b7357edca1108baa4": "a6dc7d3761d85158cbe1667d4778e4e2",
".git/objects/85/f576a24d0e1dd4ca9f96d3b68f78cd531f9383": "feaf41aa87e89fbd56e7c5d296dd8723",
".git/objects/ca/d6a087beff2da93c0b0b1dfb36f144e7cc5d67": "07ea5ce1ce1f2248b53824993a041c8b",
".git/objects/f2/0269aeb899bc510c5734bf6fb43f15196b7199": "f3dba0e45bd5ba3640ff2492672381ab",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ef/175aeae71c15c5aa51e3d9020abdaaf4b33b67": "ea82a4a2d506a520b4fa0afa4b9da646",
".git/objects/51/d8e5a5bf1dd66ccdfefaaa938f1a1a716ba03a": "42fbf1c2923600ead302c2ef3e40dbd0",
".git/objects/71/d7cb4c459f9712c194b57b6e98adbf27b6e60b": "dad7c610a4ced544733ff0243707d489",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/4a/5874f6560014321021afe60406c94a94cee32d": "6610753eac6f551fd4fc698724ea26c7",
".git/objects/ab/8b71adceb6abfba6225c323a8969c20711e4c1": "b3c46fddb0ecfe30c872b0c278ee115a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/73/8968d66d77b9e27209d21c8e6e2625f529a065": "9c5e4a1fedf3d034d050908c5506e1de",
".git/objects/1a/064d3310853d720c10b8de2a3c9aa57f3faba6": "54757c271f663d277f9bc1b099360efd",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/13/aedf30c168b8b05d9c46df080608ad5b483293": "00cad79e8981d323444175f5f42a4c03",
".git/objects/59/6deb67e0763b26f5e41e5e0e56378f55ad5324": "6b07c95b34abcf97accb78bab225051e",
".git/objects/60/39b16e94c6bde2957c8c53d0cc4b2540d0e001": "4b6ce61779a2f59754fb3c6c71bfdcee",
".git/objects/58/f95a730d1d80564c46b4ae3e5788f3903e9fe4": "c1445a757d6c3b0bc0d35100915aa486",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/fc/e8ccd950b54c5f971f114aa72e3ea60e76651b": "e1d732e7eb1500a550fad96c4e0f698a",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/94/68605a9b031f78ba2d86e4a2feee447f541b78": "a68ab21c8cb954858d2e436402323494",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/72/0dd0cefea6b7a6f6ed52ad40d9cb76fc2e2c2f": "4271a7bdd5382493d092c8db42e53b4e",
".git/objects/25/03e61ce670dfadd764c159b751580add3dab2b": "acaf86f2d7426b046a21273a29c48789",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/08/714fb148aac2ba3413973bc62b3bf158bf1193": "7beef69350f0776240e25abac710aed9",
".git/objects/4e/be6f533bd81d7de98fef87d9fd79af2a535a20": "079169dd78dc697d7a194b85af6e5242",
".git/objects/76/f168fa73f02410f3579e048897c10fc08c7587": "dab20771214b5a8b46a6db77bf4635dd",
".git/objects/7f/a6e2b59f26802c23f5f8d4c14b2f1c4fe778b8": "a2f2ecb897689ddc3b7104c18581cea1",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/fc64d48fe0e7b0226ae5e5c95da4b7a7960b8a": "f6d5db161bf502cd91c4fc18635f235e",
".git/objects/54/a0c2365c0a0186466ef5699d5042fe8414b84e": "0a0ac99db94855cdf493b78ed426fd1d",
".git/objects/a3/5cdd8789e3f942ce968872404669262d3156a8": "1f2dbd3ad1c1e1d9b059c8f85c68f64a",
".git/objects/e5/c9b34e2ee87a8463378e8bbb58b7f7693b6d67": "39b90cc12204ed58c468651f921c0968",
".git/index": "b9388edc7755622ab5b402d10b9a5763",
".git/COMMIT_EDITMSG": "6961d7607f40a71bc7f0111a7c0bb443",
".git/logs/HEAD": "c4a7f90fac3b300c646e55ede40cb911",
".git/logs/refs/heads/master": "c4a7f90fac3b300c646e55ede40cb911",
"favicon.ico": "6f6e6c234178221b71e7f0db17ccb47a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
