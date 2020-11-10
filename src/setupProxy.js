const { createProxyMiddleware } = require("http-proxy-middleware");

// function onProxyReq(proxyReq, req, res) {
//   if (req.url.indexOf('/widget')) {
//     proxyReq.setHeader("content-Type", "application/x-www-form-urlencoded")
//   }
// }

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/proxy_google_map",
    {
      target: "https://maps.googleapis.com",
      pathRewrite: {'/proxy_google_map': '/'},
      changeOrigin: true,
      onProxyReq(proxyReq) {
        if (proxyReq.getHeader("origin")) {
          proxyReq.setHeader("origin", target);
          proxyReq.setHeader("Content-Type", "application/x-www-form-urlencoded");
        }
      },
    })
  );
  app.use(
    "/proxy_geoserver",
    createProxyMiddleware({
      target: "http://18.217.77.37:8080",
      pathRewrite: {'/proxy_geoserver': '/'},
      changeOrigin: true,
      onProxyReq(proxyReq) {
        if (proxyReq.getHeader("origin")) {
          proxyReq.setHeader("origin", target)
        }
      },
    })
  );
  app.use(
    "/proxy_localhost",
    createProxyMiddleware({
      target: "http://34.227.93.214:8080",
      pathRewrite: {'/proxy_localhost': '/'},
      changeOrigin: true,
      onProxyReq(proxyReq) {
        if (proxyReq.getHeader("origin")) {
          proxyReq.setHeader("origin", "http://34.227.93.214:8080");
        }
      },
    })
  );
  app.use(
    "/proxy",
    createProxyMiddleware({
      target: "http://34.227.93.214:8080",
      pathRewrite: {'/proxy': '/'},
      changeOrigin: true,
      onProxyReq(proxyReq) {
        if (proxyReq.getHeader("origin")) {
          proxyReq.setHeader("origin", target)
        }
      },
    })
  );
};
