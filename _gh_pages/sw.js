/* global workbox:false */

self.importScripts('/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/brand/bootstrap-outline.svg",
    "revision": "9537646a9202cb5dca44e9034c1b414b"
  },
  {
    "url": "assets/brand/bootstrap-punchout.svg",
    "revision": "372e344ac243c4fa7c6c8b8a2af0e5ff"
  },
  {
    "url": "assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "assets/brand/bootstrap-solid.svg",
    "revision": "ea931a5b98a97e8b8658d9f6d537329e"
  },
  {
    "url": "assets/bs-custom/css/custom.min.css",
    "revision": "a76885cf9c2a00ec424db17e231edd1a"
  },
  {
    "url": "assets/css/hds.min.css",
    "revision": "46e339068635a69cd493a872ba805cc0"
  },
  {
    "url": "assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "assets/img/favicons/manifest.json",
    "revision": "eed73af41f4e55d335b5b3fa8c78538d"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "6b6b78894033fd91ce75affb548d8e67"
  },
  {
    "url": "assets/js/hds.min.js",
    "revision": "4fcb1727efae516010139bad4b3e18f5"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "ce7cd79e3bb7673a93972778da95d23f"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "c6e7032adf9bd98ac39e83c83108977b"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "cac6034355863d6205e66862f6a729f7"
  },
  {
    "url": "assets/js/src/search.js",
    "revision": "5b8bb2081b9e10ee9a469dd5feca5996"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "assets/js/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/bootstrap-grid.css",
    "revision": "db438cff680b6d0c029f75647b4b138a"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "2206c9fb0197956129137af662b31115"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "cceed351e3a8401f573988a38e78d3a8"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "e2b23d34f3fcc9ce074c942e76f25d61"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "82252d754417f95f7779be349acc6361"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "a7022c6fa83d91db67738d6e3cd3252d"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "03a15759e34a6f1bdf8edf391411631c"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "f7a06798e5fbe4c4095e5cdb37f95d5a"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "e77ac304b20a1fd7328f841ec558b284"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "1f039150205116b8cea52f30fd095cb6"
  },
  {
    "url": "hds/index.html",
    "revision": "aa97ce38b4e9d0b2581aad1744553242"
  },
  {
    "url": "hds/introduction/index.html",
    "revision": "1191b96d9d9151a64cb8adcac6c733f3"
  },
  {
    "url": "hds/login/index.html",
    "revision": "1ff4a00aa56d34245e55a6237a117615"
  },
  {
    "url": "index.html",
    "revision": "1d7c3fefa24c6d24f7eebe95b0c89299"
  },
  {
    "url": "redirects.json",
    "revision": "9ce2e856c466f316942e4a9c6990f69b"
  }
])
