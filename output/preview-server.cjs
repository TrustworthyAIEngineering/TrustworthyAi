const express = require('../frontend/node_modules/express');
const path = require('path');
const app = express();
const root = path.resolve(__dirname, '../frontend/build');
app.use(express.static(root));
app.use((req, res) => res.sendFile(path.join(root, 'index.html')));
app.listen(4173, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:4173'));
