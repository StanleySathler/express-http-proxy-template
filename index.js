const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy requests from localhost:8080/api to localhost:3001
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:3001", // TODO: For some reason, it MUST BE localhost, not 127.0.0.1
    changeOrigin: true, // Change the origin of the host header to the target URL
    pathRewrite: { "^/api": "" }, // Remove /api from the host header
  })
);

// Proxy other requests from localhost:8080 to localhost:3000
app.use(
  "/",
  createProxyMiddleware({
    target: "http://127.0.0.1:3000", // TODO: For some reason, it MUST BE 127.0.0.1, not localhost
    changeOrigin: true,
  })
);

app.listen(8080, () => {
  console.log("Proxy server is running on port 8080");
});
