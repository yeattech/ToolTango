const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/scss')],
  },
  // You can add more Next.js specific configurations here
};

module.exports = nextConfig;