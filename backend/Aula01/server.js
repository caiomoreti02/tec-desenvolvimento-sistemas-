import http from 'http';

let products = [
  { id: 1, name: 'Mouse Gamer', price: 150.00 },
  { id: 2, name: 'Teclado Mecânico', price: 350.00 },
  { id: 3, name: 'Headset', price: 50.00 },
];


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');


  if (req.method === 'GET ') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
}
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}/`);
});