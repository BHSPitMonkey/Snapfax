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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.b990a52e41c5ec483aec3b9987523101.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "cancel.svg",
    "revision": "aa7768f7e598ef3e7cda9ef8439c902c"
  },
  {
    "url": "favicon.ico",
    "revision": "414e16fe2eabfd7c2cac16a09646aef6"
  },
  {
    "url": "flip.svg",
    "revision": "146976919a4c8f9393fcf114d719e4f7"
  },
  {
    "url": "icon.svg",
    "revision": "d7209118792e73f99f0fcc7e58ad8e05"
  },
  {
    "url": "icon2-512.png",
    "revision": "d39534ad168ff0c37eb06245fb956662"
  },
  {
    "url": "icon512.png",
    "revision": "68a50607d977bbde6bf3d89b1154aa70"
  },
  {
    "url": "manifest.json",
    "revision": "eba62ea6cc7c7050d6d696536f8f434d"
  },
  {
    "url": "NNC.json",
    "revision": "714496c20d717099ab64984e1ffe4bf2"
  },
  {
    "url": "noise.m4a",
    "revision": "68b44330de6ad7f88ef25e34671e5e03"
  },
  {
    "url": "send.svg",
    "revision": "42780caac7e802f013b8b89533cc77f5"
  },
  {
    "url": "stories.svg",
    "revision": "049a6af1f16c0835ca2d24d3262e0679"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
