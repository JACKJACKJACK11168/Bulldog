const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  let fp = req.url === '/' ? 'index.html' : req.url.slice(1);
  // 处理 /basketball_game.html 路径
  fp = fp.replace(/^\//, '');
  res.setHeader('Cache-Control', 'no-store');
  try {
    const d = fs.readFileSync(fp);
    const ext = path.extname(fp).toLowerCase();
    const ct = { '.html': 'text/html', '.js': 'application/javascript', '.glb': 'model/gltf-binary', '.obj': 'text/plain', '.mtl': 'text/plain' }[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': ct });
    res.end(d);
  } catch (e) { res.writeHead(404); res.end('Not found'); }
});
server.listen(63462, () => console.log('http://localhost:63462'));
