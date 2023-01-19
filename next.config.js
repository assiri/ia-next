const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/assiri/ia-next/" : "",
  images: {
    unoptimized: true,
  },
};
