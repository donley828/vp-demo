/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "03d3219955953dd05dc7c646079c21ae"
  },
  {
    "url": "assets/css/11.styles.e74c64b6.css",
    "revision": "24d1509af3fe3fd164a9942e903cfbea"
  },
  {
    "url": "assets/helloworld-404.png",
    "revision": "b5009af316072de11cd64ba4f214b3a2"
  },
  {
    "url": "assets/helloworld-controller.png",
    "revision": "c9ee065427560ae1a203c1492d8e44d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.16728135.js",
    "revision": "57fbc02d85faf11e916000620b2a4371"
  },
  {
    "url": "assets/js/1.9b84f289.js",
    "revision": "3494810ee48cefaa6e275ae387966433"
  },
  {
    "url": "assets/js/10.e8f9445f.js",
    "revision": "8fe705cc069232dae873b4d36fcee421"
  },
  {
    "url": "assets/js/2.17d17b7c.js",
    "revision": "cce7beb204e2ccd94979ea18a15338b9"
  },
  {
    "url": "assets/js/3.6565e958.js",
    "revision": "822741f5da37d4eafd6a1d60e81544d8"
  },
  {
    "url": "assets/js/4.27c7eeaa.js",
    "revision": "bf584b053d0cc48cc3c5518c2ad62a22"
  },
  {
    "url": "assets/js/5.d1e8d316.js",
    "revision": "ddc915b88707bc3917ff320ad18a5c32"
  },
  {
    "url": "assets/js/6.e9a45eb5.js",
    "revision": "d10d887827064c019b4e85ba5cea44fc"
  },
  {
    "url": "assets/js/7.15b80c06.js",
    "revision": "1139425ffb902c596d99c4ad4aeb0416"
  },
  {
    "url": "assets/js/8.181b59d0.js",
    "revision": "2953363b5903b2b54b0ed657b172c143"
  },
  {
    "url": "assets/js/9.1b6de168.js",
    "revision": "9f2588e9f25f63b3b5ad51ef48296817"
  },
  {
    "url": "assets/js/app.8cf63ac6.js",
    "revision": "29d27be1b63b042d0bca8fc13869603d"
  },
  {
    "url": "assets/serverhub-compact.png",
    "revision": "5f1f2a0c4ef2045de65431e3fe54fbc7"
  },
  {
    "url": "assets/serverhub-module-plugin-sequence.png",
    "revision": "a7f1874364f41a75e92bb36f57bbe445"
  },
  {
    "url": "assets/serverhub-module-plugin-sequence.svg",
    "revision": "a10a9f2f204266ce2b7368ecf170c618"
  },
  {
    "url": "documention/controller.html",
    "revision": "84301748798dbb691aaab107bd936435"
  },
  {
    "url": "documention/index.html",
    "revision": "a87cbd8149e314b564f27fafa613f86a"
  },
  {
    "url": "documention/plugin.html",
    "revision": "21c461d57e589c50b6009b83f6cdb470"
  },
  {
    "url": "documention/route.html",
    "revision": "67f2c4fa72ab291a6d72961c05def82d"
  },
  {
    "url": "documention/run-module-method.html",
    "revision": "cfcd162efcfb6025c6924e1d3b9e6a38"
  },
  {
    "url": "favicon.png",
    "revision": "98b7077981ca9e159638993a2d1cc3e4"
  },
  {
    "url": "index.html",
    "revision": "df23bacd1a97dc68d3b54ac037ee7d3c"
  },
  {
    "url": "tutorial/getting-started.html",
    "revision": "ef0ed8602afde794838cf7d31828b21b"
  },
  {
    "url": "tutorial/hello-world.html",
    "revision": "2f11c10852dbdd1d0377f9c1f5180f44"
  },
  {
    "url": "tutorial/index.html",
    "revision": "8bd4bfbe90eaf5d5764f4d5f9659dc20"
  },
  {
    "url": "tutorial/Instance.Run().html",
    "revision": "a06998fac3b8b0363520862c93e26a86"
  },
  {
    "url": "zh/index.html",
    "revision": "2a643aa981ffd5430030f48d4a35d855"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
