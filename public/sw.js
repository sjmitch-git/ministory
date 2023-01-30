if (!self.define) {
	let e,
		n = {}
	const a = (a, s) => (
		(a = new URL(a + '.js', s).href),
		n[a] ||
			new Promise((n) => {
				if ('document' in self) {
					const e = document.createElement('script')
					;(e.src = a), (e.onload = n), document.head.appendChild(e)
				} else (e = a), importScripts(a), n()
			}).then(() => {
				let e = n[a]
				if (!e) throw new Error(`Module ${a} didn’t register its module`)
				return e
			})
	)
	self.define = (s, i) => {
		const c = e || ('document' in self ? document.currentScript.src : '') || location.href
		if (n[c]) return
		let o = {}
		const r = (e) => a(e, c),
			t = { module: { uri: c }, exports: o, require: r }
		n[c] = Promise.all(s.map((e) => t[e] || r(e))).then((e) => (i(...e), o))
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
				{
					url: '/_next/static/VwCmyid6tD3jziZeH4FvI/_buildManifest.js',
					revision: 'b37a72060c8494d2c5dbb3aa3275fe1b',
				},
				{
					url: '/_next/static/VwCmyid6tD3jziZeH4FvI/_ssgManifest.js',
					revision: 'b6652df95db52feb4daf4eca35380933',
				},
				{ url: '/_next/static/chunks/framework-114634acb84f8baa.js', revision: '114634acb84f8baa' },
				{ url: '/_next/static/chunks/main-8e65c6fcee628a80.js', revision: '8e65c6fcee628a80' },
				{ url: '/_next/static/chunks/pages/_app-d6576ad0670a65bb.js', revision: 'd6576ad0670a65bb' },
				{ url: '/_next/static/chunks/pages/_error-8353112a01355ec2.js', revision: '8353112a01355ec2' },
				{ url: '/_next/static/chunks/pages/index-b5cac7d9c6d9627d.js', revision: 'b5cac7d9c6d9627d' },
				{
					url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
					revision: '837c0df77fd5009c9e46d446188ecfd0',
				},
				{ url: '/_next/static/chunks/webpack-ee7e63bc15b31913.js', revision: 'ee7e63bc15b31913' },
				{ url: '/_next/static/css/55931f25953632a2.css', revision: '55931f25953632a2' },
				{ url: '/android-icon-144x144.png', revision: '5a8828c13a40008208b27060e912248f' },
				{ url: '/android-icon-192x192.png', revision: '29bf651dba152f7059e90569244ee826' },
				{ url: '/android-icon-36x36.png', revision: 'de6e810b6967d73fca5d93753a6ea671' },
				{ url: '/android-icon-48x48.png', revision: '77488ced543c82b7fee63f5dbda347f8' },
				{ url: '/android-icon-72x72.png', revision: 'd15495160c183a5f7f8f33cd9572c17b' },
				{ url: '/android-icon-96x96.png', revision: '4902d9190576a667aa8cd3320baf52a4' },
				{ url: '/apple-icon-114x114.png', revision: '531f300532154993a69bea6735892c00' },
				{ url: '/apple-icon-120x120.png', revision: '7aa2f13fcfac8326af22a739ffe6e98a' },
				{ url: '/apple-icon-144x144.png', revision: 'beaa1d286651e526cc855280dcf1a373' },
				{ url: '/apple-icon-152x152.png', revision: '5e701dac2d059a861464161f4330068f' },
				{ url: '/apple-icon-180x180.png', revision: '93714ba2fb5acc6a5879fbac983faed5' },
				{ url: '/apple-icon-57x57.png', revision: '02ca7fa30ac1099532484c3da2ddd28f' },
				{ url: '/apple-icon-60x60.png', revision: 'c8f383d900be031c8f8c817c4ebb370d' },
				{ url: '/apple-icon-72x72.png', revision: '8da25699637c62df2899ecd82c6cd775' },
				{ url: '/apple-icon-76x76.png', revision: '22e730d08d6f7f7fcb921b8b28ab1a9b' },
				{ url: '/apple-icon-precomposed.png', revision: 'e828c073d4067d133dd64d8a2f6211e2' },
				{ url: '/apple-icon.png', revision: 'e828c073d4067d133dd64d8a2f6211e2' },
				{ url: '/brand.png', revision: 'bbe358752222db2e95ce8c137f3004d7' },
				{ url: '/browserconfig.xml', revision: '653d077300a12f09a69caeea7a8947f8' },
				{ url: '/favicon-16x16.png', revision: '656ed179570295c994dc4e13fe01eff6' },
				{ url: '/favicon-32x32.png', revision: '03d493aeffc12d879d9113c9286176c1' },
				{ url: '/favicon-96x96.png', revision: '468b883f31abd66a1333f8b93fc986d7' },
				{ url: '/favicon.ico', revision: '8923a98c77b371058289dbd12600012b' },
				{ url: '/manifest.json', revision: 'b58fcfa7628c9205cb11a1b2c3e8f99a' },
				{ url: '/ms-icon-144x144.png', revision: 'beaa1d286651e526cc855280dcf1a373' },
				{ url: '/ms-icon-150x150.png', revision: '7089605a01cb1dcd4d4b9b620e7f6120' },
				{ url: '/ms-icon-310x310.png', revision: '46f6c0ae8b30a372848cc0114c272545' },
				{ url: '/ms-icon-70x70.png', revision: '36e425cfedefa7c32c5ba018e99c14c7' },
				{ url: '/robots.txt', revision: '63e6aba7ddb50e8282c5cfecf017b9ff' },
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
						cacheWillUpdate: async ({ request: e, response: n, event: a, state: s }) =>
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
