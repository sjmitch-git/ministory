if (!self.define) {
	let e,
		n = {}
	const c = (c, s) => (
		(c = new URL(c + '.js', s).href),
		n[c] ||
			new Promise((n) => {
				if ('document' in self) {
					const e = document.createElement('script')
					;(e.src = c), (e.onload = n), document.head.appendChild(e)
				} else (e = c), importScripts(c), n()
			}).then(() => {
				let e = n[c]
				if (!e) throw new Error(`Module ${c} didn’t register its module`)
				return e
			})
	)
	self.define = (s, a) => {
		const i = e || ('document' in self ? document.currentScript.src : '') || location.href
		if (n[i]) return
		let o = {}
		const r = (e) => c(e, i),
			t = { module: { uri: i }, exports: o, require: r }
		n[i] = Promise.all(s.map((e) => t[e] || r(e))).then((e) => (a(...e), o))
	}
}
define(['./workbox-588899ac'], function (e) {
	'use strict'
	importScripts(),
		self.addEventListener('message', (e) => {
			e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting()
		}),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{ url: '/_next/static/chunks/framework-114634acb84f8baa.js', revision: '114634acb84f8baa' },
				{ url: '/_next/static/chunks/main-8e65c6fcee628a80.js', revision: '8e65c6fcee628a80' },
				{ url: '/_next/static/chunks/pages/_app-5d5fa813788ae392.js', revision: '5d5fa813788ae392' },
				{ url: '/_next/static/chunks/pages/_error-8353112a01355ec2.js', revision: '8353112a01355ec2' },
				{ url: '/_next/static/chunks/pages/index-8738359cc1644228.js', revision: '8738359cc1644228' },
				{
					url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
					revision: '837c0df77fd5009c9e46d446188ecfd0',
				},
				{ url: '/_next/static/chunks/webpack-ee7e63bc15b31913.js', revision: 'ee7e63bc15b31913' },
				{ url: '/_next/static/css/45c05840da31d4fa.css', revision: '45c05840da31d4fa' },
				{
					url: '/_next/static/q5xhS-J060YTsfsfK_IMv/_buildManifest.js',
					revision: '7e49c86b4117b45318c836e0ceb12147',
				},
				{
					url: '/_next/static/q5xhS-J060YTsfsfK_IMv/_ssgManifest.js',
					revision: 'b6652df95db52feb4daf4eca35380933',
				},
				{ url: '/android-icon-144x144.png', revision: '9ef226bbe167af1e76183464969ff8a1' },
				{ url: '/android-icon-192x192.png', revision: 'ffedba395effe2255c3c406b7898a654' },
				{ url: '/android-icon-36x36.png', revision: '91ccffbf312b64d62cc806008258f99e' },
				{ url: '/android-icon-48x48.png', revision: '028e0ba3986fd702a5ec4c1e27693fe2' },
				{ url: '/android-icon-72x72.png', revision: '72d78f4c3738d02bf92f705bc8d378ce' },
				{ url: '/android-icon-96x96.png', revision: '32cbb70ac1578cdfb809bc6f1a4b104c' },
				{ url: '/apple-icon-114x114.png', revision: 'ca44ab4eda3c0d45f2e54cc9f459a48c' },
				{ url: '/apple-icon-120x120.png', revision: 'a04048eec039acbb6ed4bc7d13dfa3e4' },
				{ url: '/apple-icon-144x144.png', revision: '9ef226bbe167af1e76183464969ff8a1' },
				{ url: '/apple-icon-152x152.png', revision: '049de8a142d6e347176aaac968347c13' },
				{ url: '/apple-icon-180x180.png', revision: 'a14f7625ffde2619724e642941b5a85c' },
				{ url: '/apple-icon-57x57.png', revision: 'bff23945c94c92e40fde710bfe48d639' },
				{ url: '/apple-icon-60x60.png', revision: '565d4adfb6cdd9d0dcee02305fb08808' },
				{ url: '/apple-icon-72x72.png', revision: '72d78f4c3738d02bf92f705bc8d378ce' },
				{ url: '/apple-icon-76x76.png', revision: '35ff4cecd8a8bd054470f447872d4a86' },
				{ url: '/apple-icon-precomposed.png', revision: 'c6f75cca261b9edb7afccf1cccf97f6b' },
				{ url: '/apple-icon.png', revision: 'c6f75cca261b9edb7afccf1cccf97f6b' },
				{ url: '/brand.png', revision: 'f9f78f137e8144bab11a89a41e6a4fc2' },
				{ url: '/browserconfig.xml', revision: '653d077300a12f09a69caeea7a8947f8' },
				{ url: '/favicon-16x16.png', revision: 'ca4341df77c0828a45c964f0412a7ac5' },
				{ url: '/favicon-32x32.png', revision: '382e0e36808f95528696befcc6be003d' },
				{ url: '/favicon-96x96.png', revision: '32cbb70ac1578cdfb809bc6f1a4b104c' },
				{ url: '/favicon.ico', revision: 'e7fade86b02c758147f4e60dd29d59e3' },
				{ url: '/manifest.json', revision: '9a6436541c423f45936ca140ae9eea1d' },
				{ url: '/ms-icon-144x144.png', revision: '9ef226bbe167af1e76183464969ff8a1' },
				{ url: '/ms-icon-150x150.png', revision: 'fe0d421efe6959cbcba4f7acf3be17dd' },
				{ url: '/ms-icon-310x310.png', revision: 'd85e4c227cd571cf6d90c399a7d8a3b5' },
				{ url: '/ms-icon-70x70.png', revision: '23dde6820d10804f91cd25d5097557e4' },
			],
			{ ignoreURLParametersMatching: [] }
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			'/',
			new e.NetworkFirst({
				cacheName: 'start-url',
				plugins: [
					{
						cacheWillUpdate: async ({ request: e, response: n, event: c, state: s }) =>
							n && 'opaqueredirect' === n.type
								? new Response(n.body, { status: 200, statusText: 'OK', headers: n.headers })
								: n,
					},
				],
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: 'google-fonts-webfonts',
				plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: 'google-fonts-stylesheets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-font-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-image-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-image',
				plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: 'static-audio-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: 'static-video-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-js-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-style-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-data',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: 'static-data-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1
				const n = e.pathname
				return !n.startsWith('/api/auth/') && !!n.startsWith('/api/')
			},
			new e.NetworkFirst({
				cacheName: 'apis',
				networkTimeoutSeconds: 10,
				plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1
				return !e.pathname.startsWith('/api/')
			},
			new e.NetworkFirst({
				cacheName: 'others',
				networkTimeoutSeconds: 10,
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: 'cross-origin',
				networkTimeoutSeconds: 10,
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
			}),
			'GET'
		)
})
