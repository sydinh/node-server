const express = require('express');
const serveStatic = require('serve-static');
const app = express();

const post = process.env.PORT || 3000;
const log = console.log;

const callback = () => {
  log(`Listening on port ${post}, Ctrl+C to stop`);
};

app.use(serveStatic('public/'));
app.listen(post, callback());
