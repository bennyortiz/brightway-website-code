module.exports = {
  "reactStrictMode": true,
  "typescript": {
    "ignoreBuildErrors": true
  },
  "eslint": {
    "ignoreDuringBuilds": true
  },
  "swcMinify": true,
  "output": "standalone",
  "images": {
    "remotePatterns": [
      {
        "protocol": "https",
        "hostname": "images.unsplash.com",
        "pathname": "/**"
      }
    ],
    "formats": [
      "image/avif",
      "image/webp"
    ],
    "deviceSizes": [
      640,
      750,
      828,
      1080,
      1200,
      1920,
      2048,
      3840
    ],
    "imageSizes": [
      16,
      32,
      48,
      64,
      96,
      128,
      256,
      384
    ],
    "minimumCacheTTL": 2592000
  },
  "compiler": {
    "removeConsole": true,
    "reactRemoveProperties": {
      "properties": [
        "^data-test$"
      ]
    }
  },
  "serverExternalPackages": [
    "sharp"
  ],
  "experimental": {
    "optimizeCss": true,
    "optimisticClientCache": true,
    "serverActions": {
      "allowedOrigins": [
        "localhost:3000",
        "brightway-website.vercel.app"
      ]
    },
    "optimizePackageImports": [
      "react",
      "react-dom",
      "lodash",
      "date-fns"
    ],
    "strictTreeShaking": true,
    "optimizeServerReact": true
  }
}