const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello world!');
});

app.get('/api/test', (req, res) => {
  res.send({ message: 'Endpoint de teste na branch master com merge'});
});

app.get('/api/test-2', (req, res) => {
  res.send({ message: 'Branch master endpoint teste 2'});
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Usuário 1' },
    { id: 2, name: 'Usuário 2' }
  ];
  res.status(200).json(users);
});

// app.listen(port, () => {
//   console.log(`Listening http://localhost:${port}`);
// });

module.exports = app;
