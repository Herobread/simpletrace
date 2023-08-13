const withPWA = require('next-pwa')({
	dest: 'public',
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
	experimental: {
		serverActions: true,
	},
})

module.exports = nextConfig
