const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
var app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
app.use((req, res, next) => {
  if (!req.originalUrl.includes("/dist/", 0)) {
    res.sendFile(`${__dirname}/app/index.html`);
  } else {
    next();
  }
});
const port = process.env.PORT || 80;
app.listen(port);
