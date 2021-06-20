
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  poweredByHeader: false,
});