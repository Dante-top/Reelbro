const webpack = require("webpack");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  console.log("Overriding webpack config...");

  // Add fallbacks for Node.js core modules
  config.resolve.fallback = {
    ...(config.resolve.fallback || {}), // Spread existing fallbacks
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer/"), // Note: Requires buffer installed
    process: require.resolve("process/browser"), // Note: Requires process installed
    // Add other fallbacks if needed, e.g.:
    // "assert": require.resolve("assert/"),
    // "http": require.resolve("stream-http"),
    // "https": require.resolve("https-browserify"),
    // "os": require.resolve("os-browserify/browser"),
    // "url": require.resolve("url/"),
    // "zlib": require.resolve("browserify-zlib"),
    vm: require.resolve("vm-browserify"),
  };

  // Add plugins to provide global variables
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser", // Provide a global process variable
      Buffer: ["buffer", "Buffer"], // Provide a global Buffer variable
    }),
  ]);

  // Ignore specific warnings if they become noisy
  config.ignoreWarnings = [/Failed to parse source map/]; // Example

  // Make sure rules handle mjs files correctly (sometimes needed for crypto libs)
  config.module.rules.push({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false, // disable the behavior
    },
  });

  return config;
};
